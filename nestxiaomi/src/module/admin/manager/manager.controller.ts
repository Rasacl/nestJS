import { Body, Controller,Get, Post, Render, Response } from '@nestjs/common';
import { Config } from '../../../config/config'

import { ToolsService } from '../../../service/tools/tools.service'
import { AdminService } from '../../../service/admin/admin.service'
import { RoleService } from '../../../service/role/role.service'
@Controller(`${Config.adminPath}/manager`)
export class ManagerController {

    constructor(private roleService:RoleService, private toolsService:ToolsService,private adminService:AdminService){}

    @Get()
    @Render('admin/manager/index')
    async index() {
      //获取admin表与role表关联的数据
        let result = await this.adminService.getModel().aggregate([
            {
                $lookup: {
                    from: 'role',
                    localField: 'role_id',
                    foreignField: '_id',
                    as:'role'
                }
            }
        ])
        return {
            adminResult: result
        };
    }
    @Get('add')
    @Render('admin/manager/add')
   async add() {
        let result = await this.roleService.find()
        return {
            roleList:result
        };
    }

    @Post('doAdd')
    async doAdd(@Body() body, @Response() res) {
        if (body.username.length == '' || body.password.length < 6) {
            this.toolsService.error(res,'用户名或密码长度不合法',`/${Config.adminPath}/manager/add`)
        } else {
            let adminResult = await this.adminService.find({ 'username': body.username })
            if (adminResult.length > 0) {
                this.toolsService.error(res,'此管理以及存在',`/${Config.adminPath}/manager/add`)
            } else {
                body.password = this.toolsService.getMd5(body.password)
                this.adminService.add(body)
                this.toolsService.success(res,`/${Config.adminPath}/manager`)
            }
        }
    }

    @Get('edit')
    @Render('admin/manager/edit')
    edit(){

        return {};
    }

}
