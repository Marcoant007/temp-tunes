import { GeneratePlaylistUseCase } from "@/domain/use-cases/generate-playlist/generate-playlist";
import { TemperatureUseCase } from "@/domain/use-cases/temperature/temperature-use-case";
import { SearchTrackUseCase } from "@/domain/use-cases/track/search-track-use-case";
import { GenerateTrackTokenUseCase } from "@/domain/use-cases/track/token/generate-track-token-use-case";
import { Module } from "@nestjs/common";
import { RedisModule } from "../redis/redis.module";
import { MusicController } from "./controller/playlist/playlist.controller";
import { StatisticsCityController } from "./controller/statistics-city/static-city.controller";
import { StatisticsUseCase } from "@/domain/use-cases/temperature/statics-cityes/statics-use-case";

@Module({
    imports: [RedisModule],
    controllers: [MusicController, StatisticsCityController],
    providers: [GeneratePlaylistUseCase, TemperatureUseCase, SearchTrackUseCase, GenerateTrackTokenUseCase, StatisticsUseCase]
})

export class HttpModule {}