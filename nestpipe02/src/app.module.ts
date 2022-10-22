import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsController } from './controller/news/news.controller';
import { UserController } from './controller/user/user.controller';

@Module({
  imports: [],
  controllers: [AppController, NewsController, UserController],
  providers: [AppService],
})
export class AppModule {}
