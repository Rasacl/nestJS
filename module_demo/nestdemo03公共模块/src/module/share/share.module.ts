import { Module } from '@nestjs/common';
import { BaseService } from './service/base/base.service';

@Module({
  providers: [BaseService],
  exports:[BaseService]   //暴露服务  暴露出去以后引入当前模块的模块就可以使用当前模块里面的服务
})
export class ShareModule {}
