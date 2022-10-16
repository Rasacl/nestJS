import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class InitMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    
    // console.log(Date());
    console.log('我是公共中间件');

    next();
  }
}
