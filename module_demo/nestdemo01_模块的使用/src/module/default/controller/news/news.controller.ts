import { Controller, Get } from '@nestjs/common';

@Controller('news')
export class NewsController {

    @Get()
    index(){
        return "我是前台的新闻页面";
    }
}
