import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getProduct(): string {
    return 'ๅๅๅ่กจ'
  }
}
