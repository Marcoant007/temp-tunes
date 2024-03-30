import { StatisticsUseCase } from "@/domain/use-cases/temperature/statics-cityes/statics-use-case";
import { Controller, Get } from "@nestjs/common";

@Controller('statistics')
export class StatisticsCityController {
    constructor(private readonly StatisticsUseCase: StatisticsUseCase) {}

    @Get('/')
    async findStatisticsCityes(): Promise<CityDTO[]> {
        const Statistics = await this.StatisticsUseCase.getStatistics();
        return Statistics
    }
}