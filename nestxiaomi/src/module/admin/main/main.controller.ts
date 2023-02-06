import { Controller, Get, Request, Render } from '@nestjs/common';
import { Config } from '../../../config/config'
import { AccessService } from '../../../service/access/access.service'
import { RoleAccessService } from '../../../service/role-access/role-access.service'

@Controller(`${Config.adminPath}/main`)
export class MainController {
    constructor(private accessService:AccessService, private roleAccessService:RoleAccessService){}

    @Get()
    @Render('admin/main/index')
    async index(@Request() req) {
         // 1 在access表中找出module_id=0的数据、
        //2 让access表和access表关联，条件：找出access表中module_id等于id的数据
        let userinfo = req.session.userinfo
        let role_id = userinfo.role_id
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
            asideList:result
        };
    }

    @Get('welcome')
    @Render('admin/main/welcome')
    welcome(){
        return {};
    }

}
