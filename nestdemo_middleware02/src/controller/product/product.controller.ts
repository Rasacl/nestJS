import { Controller,Get } from '@nestjs/common';

@Controller('product')
export class ProductController {
    @Get()
    index(){
        return '商品页面'
    }
}
