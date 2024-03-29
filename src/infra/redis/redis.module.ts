import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { RedisService } from './redis.service';
import { Redis } from 'ioredis';

@Module({
  providers: [
    RedisService,
    {
      provide: 'READ',
      inject: [ConfigService],
      useFactory: async (configService: ConfigService): Promise<Redis> => {
        return new Redis({
          host: configService.get<string>('REDIS_RO_HOST'),
          port: configService.get<number>('REDIS_RO_PORT'),
          username: configService.get<string>('REDIS_RO_USERNAME'),
          password: configService.get<string>('REDIS_RO_PASSWORD'),
        });
      },
    },
    {
      provide: 'WRITE',
      inject: [ConfigService],
      useFactory: async (configService: ConfigService): Promise<Redis> => {
        return new Redis({
          host: configService.get<string>('REDIS_HOST'),
          port: configService.get<number>('REDIS_PORT'),
          username: configService.get<string>('REDIS_USERNAME'),
          password: configService.get<string>('REDIS_PASSWORD'),
        });
      },
    },
  ],
  exports: [RedisService],
})
export class RedisModule {}
