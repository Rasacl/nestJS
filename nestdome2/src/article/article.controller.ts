/*
 * @Author: chenxiao chenxiao@uino.com
 * @Date: 2022-10-15 14:37:06
 * @LastEditors: chenxiao chenxiao@uino.com
 * @LastEditTime: 2022-10-15 14:39:18
 * @FilePath: \nestJS\nestdome2\src\article\article.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Controller, Get } from '@nestjs/common';
import { NewsService } from '../news/news.service';

@Controller('article')
export class ArticleController {
    //实例化服务
    constructor(private newsService: NewsService) { }
    
    @Get()
    index() {
        return this.newsService.findAll()
    }
}
