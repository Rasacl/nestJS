/*
 * @Author: chenxiao chenxiao@uino.com
 * @Date: 2023-01-30 16:57:06
 * @LastEditors: chenxiao chenxiao@uino.com
 * @LastEditTime: 2023-01-31 16:39:11
 * @FilePath: \nestJS\nestxiaomi\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from "path";
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  //配置静态资源目录
  app.useStaticAssets(path.join(__dirname, '..', 'public'));
  //配置模板引擎
  app.setBaseViewsDir('views');
  app.setViewEngine('ejs');

  //配置cookie中间件
  app.use(cookieParser("this signed cookies"));

  //配置session的中间件
  app.use(session({ 
    secret: 'keyboard cat',
    resave:true, 
    saveUninitialized:true, 
    cookie: { maxAge: 1000*60*30,httpOnly:true },
    rolling:true 
  }));
  
  await app.listen(3000);
}
bootstrap();
