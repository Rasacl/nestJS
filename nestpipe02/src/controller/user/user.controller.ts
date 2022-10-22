import { Controller, Get, Query, UsePipes } from '@nestjs/common';

import { UserPipe } from '../../pipe/user.pipe';
/*
joi使用：
    https://github.com/hapijs/joi

    npm install joi --save
    
    import * as Joi from 'joi';
*/


import * as Joi from 'joi';
let userSchema = Joi.object().keys({
    name: Joi.string().required(),
    age: Joi.number().integer().min(6).max(66).required(),
})

@Controller('user')
export class UserController {

    //http://localhost:3000/user?name=zhangsan&age=xxx

    //http://localhost:3000/user?name=zhangsan&age=20

    @Get()
    @UsePipes(new UserPipe(userSchema))
    index(@Query() info) {
        console.log(info);
        return '这是一个用户中心页面';
    }
}
