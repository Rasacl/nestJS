import { Controller,Get,UseGuards} from '@nestjs/common';

import {AuthGuard} from '../../../../guard/auth.guard'

@Controller('admin/news')
// @UseGuards(AuthGuard)   //配置守卫 整个控制器都需要进行权限判断
export class NewsController {
    @Get()
    // @UseGuards(AuthGuard) 
    index(){
        return '我是admin模块里面的news控制器里面的方法';
    }

    @Get('add')
    addNesw(){
        return '新闻add页面';
    }
}
