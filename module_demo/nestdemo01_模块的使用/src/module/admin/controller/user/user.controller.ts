import { Controller, Get } from '@nestjs/common';

@Controller('admin/user')
export class UserController {


    @Get()
    index(){
        return '我是admin模块里面的user页面';
    }
}
