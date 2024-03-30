import { Module } from '@nestjs/common';
import { HttpModule } from './http/http.module';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './env';
import { RedisModule } from './redis/redis.module';
import { LoggerModule } from 'nestjs-pino';
@Module({
  imports: [ConfigModule.forRoot({
    validate: env => envSchema.parse(env),
    isGlobal: true,
  }),
    HttpModule,
    RedisModule,
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
            colorize: true
          },
        },
        level: 'error',
      },
    }),
  ],
})
export class AppModule {}
