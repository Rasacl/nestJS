/*
 * @Author: chenxiao chenxiao@uino.com
 * @Date: 2022-10-13 14:29:17
 * @LastEditors: chenxiao chenxiao@uino.com
 * @LastEditTime: 2022-10-15 14:40:06
 * @FilePath: \nestJS\nestdome2\src\app.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { NewsService } from './news/news.service';
import { NewsController } from './news/news.controller';
import { ArticleController } from './article/article.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, NewsController, ArticleController],
  providers: [AppService, NewsService],
})
export class AppModule {}
