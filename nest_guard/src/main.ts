import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

import * as path from "path";

import * as cookieParser from 'cookie-parser';

import * as session from 'express-session';
import {AuthGuard} from './guard/auth.guard';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  //配置静态资源目录
  app.useStaticAssets(path.join(__dirname, '..', 'public'), {
    prefix: '/static/',
  });
  //配置模板引擎
  app.setBaseViewsDir('views');
  app.setViewEngine('ejs');
  //配置cookie中间件
  app.use(cookieParser("this signed cookies"));

  //配置session的中间件
  app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 109000,httpOnly:true },rolling:true }));

  //全局配置守卫
  app.useGlobalGuards(new AuthGuard());

  await app.listen(3000);
}
bootstrap();
