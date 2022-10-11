import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('news')
export class NewsController {

    @Get('a*a')
    indexA() {
        return '模糊匹配'
    }
    
    @Get('add')
    addData(@Query('id') id) {
        console.log(id)
        return id
    }


    //获取动态路由    http://localhost:3000/news/123

    @Get(':id')
    index(@Param() param) {
        console.log(param)
        return '动态路由'
    }
}
