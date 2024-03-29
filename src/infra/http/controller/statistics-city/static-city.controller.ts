import { StaticsUseCase } from "@/domain/use-cases/temperature/statics-cityes/statics-use-case";
import { Controller, Get } from "@nestjs/common";

@Controller('statics')
export class StaticsCityController {
    constructor(private readonly staticsUseCase: StaticsUseCase) {}

    @Get('/')
    async getStatics(): Promise<CityDTO[]> {
        const statics = await this.staticsUseCase.getStatics();
        return statics
    }
}