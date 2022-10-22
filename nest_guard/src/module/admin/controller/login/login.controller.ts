import { Controller, Get,Request } from '@nestjs/common';

@Controller('admin/login')
export class LoginController {

    @Get()
    index(@Request() req){
        //登录  设置session
        req.session.username="张三";
        return '登录成功';
        
    }
    @Get("test")

    testindex(@Request() req){
        //登录  设置session
        
        return req.session.username;
        
    }

}
