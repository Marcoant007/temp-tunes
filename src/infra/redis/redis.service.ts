import { Inject, Injectable, Logger } from '@nestjs/common';

import { Redis } from 'ioredis';
import { IRedisService } from './interfaces/redis-service.interface';

@Injectable()
export class RedisService implements IRedisService {
  private readonly logger: Logger = new Logger(RedisService.name);

  constructor(
    @Inject('READ') private readonly redisRead: Redis,
    @Inject('WRITE') private readonly redisWrite: Redis,
  ) {}

  public async get(key: string): Promise<any> {
    try {
      const cached = await this.redisRead.get(key);
      if (cached) {
        return JSON.parse(cached);
      }
    } catch (error) {
      this.logger.error('Failed to get cache, Trace:', error);
      return null;
    }
  }

  public async set(key: string, value: any, ttl?: number): Promise<any> {
    try {
      console.log("salvando no cache: ", key);
      await this.redisWrite.set(key, JSON.stringify(value));
      if(ttl){
        await this.redisWrite.expire(key, ttl);
      }
    } catch (error) {
      this.logger.error('Failed to set cache, Trace:', error);
    }
  }

  public async del(key: string): Promise<any> {
    try {
      return await this.redisWrite.del(key);
    } catch (error) {
      this.logger.error('Failed to delete cache, Trace:', error);
    }
  }
}
