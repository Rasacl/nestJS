import { Module,NestModule,MiddlewareConsumer,RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsController } from './controller/news/news.controller';
import { UserController } from './controller/user/user.controller';
import { ProductController } from './controller/product/product.controller';

import { InitMiddleware } from './middleware/init.middleware';

@Module({
  imports: [],
  controllers: [AppController, NewsController, UserController, ProductController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {    
    consumer
      .apply(InitMiddleware)
      // .forRoutes('*');   //.forRoutes('*'); 匹配所有的路由
      // .forRoutes('user')    //匹配指定路由

      .forRoutes({ path: 'user', method: RequestMethod.ALL },{ path: 'news', method: RequestMethod.ALL })    //匹配多个路由
  }
}
