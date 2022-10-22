import { Controller, Get } from '@nestjs/common';

import { AppService } from '../../../../app.service';

//公共模块里面的服务
import { BaseService } from '../../../share/service/base/base.service';


@Controller('news')
export class NewsController {

    constructor(private appService:AppService,private baseService:BaseService){}
    @Get()
    index(){
        console.log(this.appService.getConfig());
        console.log(this.baseService.getData());
        return "我是前台的新闻页面";
    }
}
