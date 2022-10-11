import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleController } from './article/article.controller';
import { UserController } from './user/user.controller';
import { NewsController } from './news/news.controller';

@Module({
  imports: [],
  controllers: [AppController, ArticleController, UserController, NewsController],
  providers: [AppService],
})
export class AppModule {}
