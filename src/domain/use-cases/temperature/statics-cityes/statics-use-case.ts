import { RedisService } from "@/infra/redis/redis.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class StaticsUseCase implements IStaticsInterface {

    constructor(private readonly redisService: RedisService) {}
    
    async getStatics(): Promise<CityDTO[]> {
        const redisKey = "city-statistics:"
        const allCityStatistics = await this.redisService.getAll(`${redisKey}*`);
    
        const statistics = allCityStatistics.reduce((acc, { key, value }) => {
            const city = key.replace(redisKey, '');
            acc[city] = JSON.parse(value);
            return acc;
        }, {});
    
        const citiesArray: CityDTO[] = Object.values(statistics).map((city:any) => ({
            name: city.name,
            coord: city.coord,
            main: city.main
        }));
    
        return citiesArray;
    }
}