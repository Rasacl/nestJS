import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class NewsPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
