import { Injectable, PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { z } from 'zod';

@Injectable()
export class CityValidationPipe implements PipeTransform {
 private readonly citySchema = z.string().refine(value => /^[a-zA-Z]+$/.test(value), {
    message: 'City must contain only letters',
 });

 transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type !== 'query') {
      return value;
    }

    try {
      return this.citySchema.parse(value);
    } catch (error) {
      throw new BadRequestException(error);
    }
 }
}