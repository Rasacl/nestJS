
import { Module } from '@nestjs/common';
import { MainController } from './main/main.controller';
import { LoginController } from './login/login.controller';
import { MangerController } from './manger/manger.controller';
import { ToolsService } from '../../service/tools/tools.service';

@Module({
  controllers: [MainController, LoginController, MangerController],
  providers:[ToolsService]
})
export class AdminModule {}
