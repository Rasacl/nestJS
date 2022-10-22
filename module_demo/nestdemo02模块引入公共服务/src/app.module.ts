import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './module/admin/admin.module';
import { ApiModule } from './module/api/api.module';
import { DefaultModule } from './module/default/default.module';

@Module({
  imports: [AdminModule, ApiModule, DefaultModule],
  controllers: [AppController],
  providers: [AppService]  
})
export class AppModule {}
