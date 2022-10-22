import { Controller,Get } from '@nestjs/common';
import { NewsService } from '../../service/news/news.service';

//公共的服务
import { AppService } from '../../../../app.service';

@Controller('admin/news')
export class NewsController {
    constructor (private newsService:NewsService,private appService:AppService){}

    @Get()
    index(){
        console.log(this.newsService.getNews())

        console.log(this.appService.getConfig());
        return '我是admin模块里面的news控制器里面的方法';
    }
}
