import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

import * as path from "path";

import * as cookieParser from 'cookie-parser';

import * as session from 'express-session';

//全局中间件只能引入函数式中间件
import { logger } from './middleware/logger.middleware';

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

  app.use(session({ 
    secret: 'keyboard cat', 
    cookie: { maxAge: 9000,httpOnly:true },
    rolling:true }
    ));

  app.use(logger);
  
  await app.listen(3000);
}
bootstrap();
