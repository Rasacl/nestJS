import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getConfig() {
    return {"domain":"www.itying.com"};
  }
}
