import { Controller,Get } from '@nestjs/common';

@Controller('admin/news')
export class NewsController {

    @Get()
    index(){
        return '我是admin模块里面的news控制器里面的方法';
    }
}
