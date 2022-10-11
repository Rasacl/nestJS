import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('news')
  getNews(): string{
    return '这是nest里面自定义的方法 页面 路由'
    }

  @Get('product')
  getProduct(): string{
    return this.appService.getProduct()
  }
}
