import{ Body,Controller, Get, Post, Render, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import {ToolsService} from '../../../service/tools/tools.service'

import {Config} from '../../../config/config'

@Controller(`${Config.adminPath}/focus`)
export class FocusController {
    constructor(private toolsService:ToolsService){}
    @Get()
    index() { }
    
    @Get('add')
    @Render('admin/focus/add')
    add() {
        return {}
    }

    @Post('doAdd')
    @UseInterceptors(FileInterceptor('focus_img'))
    doAdd(@Body() body,@UploadedFile() file) {
        let saveDir = this.toolsService.uploadFile(file)
        console.log(saveDir);
        
    }
}
