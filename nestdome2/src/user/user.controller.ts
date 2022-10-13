import { Body, Controller, Get, Post, Render, Response } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
        
    @Render('default/user')
    index() {
    }
    @Post("doAdd")
    doAdd(@Body() Body, @Response() res) {
        console.log(Body)
        res.redirect('/user') //路由跳转
        
    }
}
