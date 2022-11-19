
import { Controller, Get, Render } from '@nestjs/common';

@Controller('admin/manger')
export class MangerController {
    @Get()
    @Render('admin/manger/index')
    index() {
        return {}
    }
    @Get('add')
    @Render('admin/manger/add')
    add() {
        return {}
    }
    @Get('edit')
    @Render('admin/manger/edit')
    edit() {
        return {}
    }
}
