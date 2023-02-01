import { Body, Controller, Get, Post, Query, Render,Response } from '@nestjs/common';

import { RoleService } from '../../../service/role/role.service'
import {ToolsService} from '../../../service/tools/tools.service'

import {Config} from '../../../config/config'

@Controller(`${Config.adminPath}/role`)
export class RoleController {
    constructor(private roleService: RoleService,private toolService:ToolsService) { }
    
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


}
