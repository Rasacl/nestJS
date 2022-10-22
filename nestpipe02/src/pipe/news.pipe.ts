import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class NewsPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);   // Get 或者Post传过来的值
    console.log('-------我是管道------')
    value.id='666666';
    
    return value;
  }
}
