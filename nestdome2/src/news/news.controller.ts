/*
 * @Author: chenxiao chenxiao@uino.com
 * @Date: 2022-10-15 14:19:21
 * @LastEditors: chenxiao chenxiao@uino.com
 * @LastEditTime: 2022-10-15 14:27:56
 * @FilePath: \nestJS\nestdome2\src\news\news.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE！
 */
import { Controller, Get, Render } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
    constructor(private newsService:NewsService){}
    @Get()
    @Render('default/news')
    index() {
        return{ newsList: this.newsService.findAll() }
    }

}
