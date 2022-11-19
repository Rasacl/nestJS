/*
 * @Author: chenxiao chenxiao@uino.com
 * @Date: 2022-11-12 14:39:24
 * @LastEditors: chenxiao chenxiao@uino.com
 * @LastEditTime: 2022-11-19 14:53:09
 * @FilePath: \nestJS\nestxiaomi\src\module\admin\main\main.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Controller, Get, Render } from '@nestjs/common';

@Controller('admin/main')
export class MainController {

    @Get()
    @Render('admin/main/index')
    index() {
        return {}
    }

    @Get('welcome')
    @Render('admin/main/welcome')
    welcome() {
        return {}
    }
}
