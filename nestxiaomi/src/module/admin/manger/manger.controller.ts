import { Controller, Get } from '@nestjs/common';

@Controller('admin/manger')
export class MangerController {
    @Get()
    index() {
        return '我是管理员页面'
    }
}
