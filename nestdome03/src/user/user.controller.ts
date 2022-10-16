import { Controller, Get, Request } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    index() {
        return '这是用户页面'
    }

    @Get('cookie')
  getCookie(@Request() req) {
    // console.log(req.cookies.username);
        //加密获取
        console.log(req.signedCookies.username);
    return req.signedCookies.username
  }
}
