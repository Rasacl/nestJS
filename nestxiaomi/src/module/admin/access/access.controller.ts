
import { Body, Controller, Get, Post, Query, Render, Response } from '@nestjs/common';
import { AccessService } from '../../../service/access/access.service'
import { ToolsService } from '../../../service/tools/tools.service'
import * as mongoose from 'mongoose';

import {Config} from '../../../config/config'
@Controller(`${Config.adminPath}/access`)
export class AccessController {
    constructor(private accessService: AccessService, private toolsService:ToolsService) { }
    @Get()
    @Render('admin/access/index')
    async index() {
        // 1 在access表中找出module_id=0的数据、
        //2 让access表和access表关联，条件：找出access表中module_id等于id的数据

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
        return {
            list: result
        }
    }

    @Get('add')
    @Render('admin/access/add')
    async add() {
        let result = await this.accessService.find({'module_id':'0'})
        return {
            moduleList:result
        }
    }

    @Post('doAdd')
    async doAdd(@Body() body,@Response() res) {
        let module_id = body.module_id
        if (module_id != 0) {
            body.module_id = new mongoose.Types.ObjectId(module_id)
        }
        await this.accessService.add(body)
        this.toolsService.success(res,`/${Config.adminPath}/access`)
    }

    @Get('edit')
    @Render('admin/access/edit')
    async edit(@Query() query) {
        let result = await this.accessService.find({ 'module_id': '0' })
        let accessResult = await this.accessService.find({ '_id': query.id })
        return {
            list:accessResult[0],
            moduleList:result
        }
    }

    @Post('doEdit')
    async doEdit(@Body() body, @Response() res) {
        try {
            let module_id = body.module_id
            let id = body._id
            if (module_id != 0) {
                body.module_id = new mongoose.Types.ObjectId(module_id)
            }
            await this.accessService.update({'_id':id},body)
            this.toolsService.success(res,`/${Config.adminPath}/access`)
        } catch (error) {
            let id = body._id
            this.toolsService.error(res,'非法请求',`/${Config.adminPath}/access/edit?id=${id}`)
        }
    }
    
    @Get('delete')
    async delete(@Query() query, @Response() res) {
        let result = await this.accessService.delete({ '_id': query.id })
        this.toolsService.success(res,`/${Config.adminPath}/access`)
    }

}
