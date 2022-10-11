import { Body, Controller, Get, Post, Query, Request } from '@nestjs/common';

@Controller('user')
export class UserController {
    
    @Get()
    index(): string{
        return '用户中心'
    }


    // 通过@Query()装饰器获取get传值  user/add?id=123&name=zhangsan
    @Get('add')
    addData(@Query() query) {
        console.log(query)
        return query
    }

    // 通过@Request()装饰器获取get传值  user/add?id=56&name=lisi
    @Get('edit')
    editData(@Request() req) {
        console.log(req.query)
        return '通过Request获取get传值'
    }

    // 通过@Body()装饰器获取post传值
    @Post('create')
    create(@Body() body) {
        console.log('触达了post')
        console.log(body)
        return '我是post的方法'
    }

}
