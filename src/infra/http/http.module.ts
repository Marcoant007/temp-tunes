import { Module } from "@nestjs/common";
import { MusicController } from "./controller/music.controller";
import { GeneratePlaylistUseCase } from "@/domain/use-cases/generate-playlist/generate-playlist";
import { TemperatureUseCase } from "@/domain/use-cases/temperature/temperature-use-case";
import { SearchTrackUseCase } from "@/domain/use-cases/track/search-track-use-case";
import { GenerateTrackToken } from "@/domain/use-cases/track/token/generate-track-token-use-case";
import { RedisService } from "../redis/redis.service";
import { RedisModule } from "../redis/redis.module";

@Module({
    imports: [RedisModule],
    controllers: [MusicController],
    providers: [GeneratePlaylistUseCase, TemperatureUseCase, SearchTrackUseCase, GenerateTrackToken]
})

export class HttpModule {}