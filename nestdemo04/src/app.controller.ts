import { Controller, Get, Render ,Request} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @Render('default/index')
  index(@Request() req): string {
    //设置session
    req.session.username="哈哈哈";
    return '';
  }

  @Get('user')
  userIndex(@Request() req): string {
    //获取session的值
    console.log(req.session.username);    
    return '用户中心';
  }


  

}
