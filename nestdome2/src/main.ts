/*
 * @Author: chenxiao chenxiao@uino.com
 * @Date: 2022-10-13 14:29:17
 * @LastEditors: chenxiao chenxiao@uino.com
 * @LastEditTime: 2022-10-13 14:53:43
 * @FilePath: \nestJS\nestdome2\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//引入http平台
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path'
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.useStaticAssets('public') //配置静态资源目录

  // app.useStaticAssets('public', { // 配置虚拟目录 第一种方法
  //   prefix:'/static/'
  // })

  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/static/'   // 配置虚拟目录 第二种方法
  })

  // 注意首先必须安装模板引擎 npm i ejs --save
  app.setBaseViewsDir('views') //设置模板目录
  app.setViewEngine('ejs') //设置模板引擎


  await app.listen(3000);
}
bootstrap();
