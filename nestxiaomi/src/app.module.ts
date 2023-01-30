/*
 * @Author: chenxiao chenxiao@uino.com
 * @Date: 2023-01-30 16:57:06
 * @LastEditors: chenxiao chenxiao@uino.com
 * @LastEditTime: 2023-01-30 16:58:25
 * @FilePath: \nestJS\nestxiaomi\src\app.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module ,NestModule,MiddlewareConsumer} from '@nestjs/common';
import { AdminModule } from './module/admin/admin.module';
import { DefaultModule } from './module/default/default.module';
import { ApiModule } from './module/api/api.module';
import { MongooseModule } from '@nestjs/mongoose';
import {AdminauthMiddleware} from './middleware/adminauth.middleware';
import {InitMiddleware} from './middleware/init.middleware';

import {Config} from './config/config';

//配置中间件


@Module({
  imports: [
    AdminModule, DefaultModule, ApiModule,
    MongooseModule.forRoot('mongodb://localhost:27017/collections',{ useNewUrlParser: true })
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AdminauthMiddleware)
      .forRoutes(`${Config.adminPath}/*`)
      .apply(InitMiddleware)
      .forRoutes('*');
  }
}
