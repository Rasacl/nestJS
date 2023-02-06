import { Body, Controller, Get, Post, Query, Render,Response } from '@nestjs/common';

import { RoleService } from '../../../service/role/role.service'
import { ToolsService } from '../../../service/tools/tools.service'
import { AccessService } from '../../../service/access/access.service'
import {RoleAccessService} from '../../../service/role-access/role-access.service'

import {Config} from '../../../config/config'

@Controller(`${Config.adminPath}/role`)
export class RoleController {
    constructor(private roleService: RoleService,private toolService:ToolsService, private accessService:AccessService,private roleAccessService: RoleAccessService) { }
    
    @Get()
    @Render('admin/role/index')
   async index() {
        let result = await this.roleService.find({})
        return {
            roleList:result
        }
        
    }
    @Get('add')
    @Render('admin/role/add')
    async add() {
        return {}
    }

    @Post('doAdd') 
    async doAdd(@Body() body, @Response() res) {
        if(body != ''){
            let result = await this.roleService.add(body)
            if (result) {
                this.toolService.success(res, `/${Config.adminPath}/role`)
            } else {
                this.toolService.error(res,'增加失败', `/${Config.adminPath}/role`)
            }
        } else {
            this.toolService.error(res,'标题不能为空', `/${Config.adminPath}/role`)
        }
      
    }

    @Get('edit')
    @Render('admin/role/edit')
    async edit(@Query() query) {
        let result = await this.roleService.find({ '_id': query.id })
        return {
            roleList:result[0]
        }
    }

    @Post('doEdit')
    async doEdit(@Body() Body, @Response() res) {
        
        if (Body.title != '') {
            let result = this.roleService.update({ '_id': Body._id }, Body)
            if (result) {
                this.toolService.success(res,`/${Config.adminPath}/role`)
            } else {
                this.toolService.error(res, '修改失败',`/${Config.adminPath}/role`)
            }
        } else
            this.toolService.error(res, '标题不能为空',`/${Config.adminPath}/role`)
    }

    @Get('delete')
    async delete(@Query() query, @Response() res) {
        let result = this.roleService.delete({ '_id': query.id })
        this.toolService.success(res,`/${Config.adminPath}/role`)
    }


    //授权
    @Get('auth')
    @Render('admin/role/auth')
    async auth(@Query() query, @Response() res) {
        // 1 在access表中找出module_id=0的数据、
        //2 让access表和access表关联，条件：找出access表中module_id等于id的数据
        let role_id = query.id
        let result = await this.accessService.getModel().aggregate([
            {
                $lookup: {
                    from: 'access',
                    localField: '_id',
                    foreignField: 'module_id',
                    as:'items'
                }
            },
            {
                $match: {
                    'module_id':'0'
                }
            }
        ])

        // 查询当前角色拥有的权限（查询当前角色的权限id） 把查找到的数据放到数组中
        let accessResult = await this.roleAccessService.find({ "role_id": role_id })
        
        let roleAccessArray = []
        accessResult.forEach(value => {
            roleAccessArray.push(value.access_id.toString())
        })
        //循环遍历所有的权限数据，判断当前权限是否在角色权限的数组中，如果是的话就给当前数据加入
        for (let i = 0; i < result.length; i++) {
            if (roleAccessArray.indexOf(result[i]._id.toString()) != -1) {
                result[i].checked = true
            }
            for (let j = 0; j <  result[i].items.length; j++) {
                if (roleAccessArray.indexOf(result[i].items[j]._id.toString()) != -1) {
                    result[i].items[j].checked = true
                }
                
            }
            
        }
        return {
            list: result,
            role_id:role_id
        }
    }

    

    @Post('doAuth')
    async doAuth(@Body() body, @Response() res) {
        let role_id = body.role_id
        let access_node = body.access_node
        //删除当前角色下的所有权限
        await this.roleAccessService.deleteMany({'role_id':role_id})
    //把当前角色对应的所有权限增加到role_access表里面
        for (let i = 0; i < access_node.length; i++) {
            await this.roleAccessService.add({
                role_id: role_id,
                access_id: access_node[i]
                
         })
            
        }
        this.toolService.success(res,`/${Config.adminPath}/role/auth?id=${role_id}`)
      
    }


}
