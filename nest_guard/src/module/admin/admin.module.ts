import { Module } from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { NewsController } from './controller/news/news.controller';
import { LoginController } from './controller/login/login.controller';

@Module({
  controllers: [UserController, NewsController, LoginController]
})
export class AdminModule {}
