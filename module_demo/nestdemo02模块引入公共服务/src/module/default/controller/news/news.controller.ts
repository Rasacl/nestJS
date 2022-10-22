import { Controller, Get } from '@nestjs/common';

import { AppService } from '../../../../app.service';

@Controller('news')
export class NewsController {

    constructor(private appService:AppService){}
    @Get()
    index(){
        console.log(this.appService.getConfig());
        return "我是前台的新闻页面";
    }
}
