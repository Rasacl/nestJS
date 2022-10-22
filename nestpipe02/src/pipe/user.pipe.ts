import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';


@Injectable()
export class UserPipe implements PipeTransform {
  private schema;
  constructor(schema){
    this.schema=schema
  }
  transform(value: any, metadata: ArgumentMetadata) {
    
    const { error } = this.schema.validate(value);
    // console.log(error);
    if(error){
      return {"success":false};
    }
    return value;    
  }
}
