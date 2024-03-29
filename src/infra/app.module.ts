import { Module } from '@nestjs/common';
import { HttpModule } from './http/http.module';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './env';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [ConfigModule.forRoot({
    validate: env => envSchema.parse(env),
    isGlobal: true,
  }),
    HttpModule,
    RedisModule
  ],
})
export class AppModule {}
