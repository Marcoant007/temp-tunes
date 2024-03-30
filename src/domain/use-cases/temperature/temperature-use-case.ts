import { RedisService } from "@/infra/redis/redis.service";
import { HttpException, Injectable, Logger, NotFoundException } from "@nestjs/common";
import axios from "axios";
import 'dotenv/config';

@Injectable()
export class TemperatureUseCase implements ITemperatureInterface {
  private readonly logger = new Logger(TemperatureUseCase.name);
  constructor(private redisService: RedisService) { }

  async getTemperature(city: string): Promise<number> {
    const apiKey = process.env.WEATHERMAP_KEY;
    const encodedCity = encodeURIComponent(city);
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      if (response.data.cod === '404') {
        throw new HttpException(`${city} não foi encontrada`, 404);
      }

      this.redisService.set('city-statistics:' + city, response.data, 10000);
      this.logger.log(`Temperatura da cidade ${city} salva no redis`);
      return response.data.main.temp;
    } catch (error) {
      this.logger.log('Erro ao buscar a temperatura:' + error);
      throw new HttpException(`Ocorreu um erro ao buscar a temperatura da cidade: ${city}, verifique se o nome da cidade esta correto`, 404);
    }
  }
}