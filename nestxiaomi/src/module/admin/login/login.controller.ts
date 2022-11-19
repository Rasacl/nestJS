
import { Controller, Get, Render, Request, Response } from '@nestjs/common';
import { ToolsService } from '../../../service/tools/tools.service';

@Controller('admin/login')
export class LoginController {
    constructor(private toolsService:ToolsService){}
    @Get()
    @Render('admin/login')
    index() {
        return {}
    }
    @Get('code')
    async getCode(@Request() req,@Response() res) {
        let svgCaptcha = await this.toolsService.captcha()
        
        //设置session
        req.session.captcha = svgCaptcha.text
        res.type('image/svg+xml')
        res.send(svgCaptcha.data)
    }
}
