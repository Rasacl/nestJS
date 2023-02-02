
import { Module } from '@nestjs/common';
import { MainController } from './main/main.controller';
import { LoginController } from './login/login.controller';
import { ManagerController } from './manager/manager.controller';
import { RoleController } from './role/role.controller';
import { AccessController } from './access/access.controller';

import { MongooseModule } from '@nestjs/mongoose';

import { AdminSchema } from '../../schema/admin.schema'; 
import { RoleSchema } from '../../schema/role.schema';
import {AccessSchema} from '../../schema/access.schema'

import { AdminService } from '../../service/admin/admin.service';
import {RoleService} from '../../service/role/role.service'
import { ToolsService } from '../../service/tools/tools.service';
import {AccessService} from '../../service/access/access.service'

@Module({
  imports:[
    MongooseModule.forFeature([
      { name: 'Admin', schema: AdminSchema, collection: "admin" },
      { name: 'Role', schema: RoleSchema, collection: "role" },
      { name: 'Access', schema: AccessSchema, collection: "access" },
    ])
  ],
  controllers: [MainController, LoginController, ManagerController, RoleController, AccessController],
  providers:[ToolsService,AdminService,RoleService,AccessService]
})
export class AdminModule {}
