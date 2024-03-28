import { Module } from "@nestjs/common";
import { MusicController } from "./controller/music.controller";
import { GeneratePlaylistUseCase } from "@/domain/use-cases/generate-playlist/generate-playlist";
import { TemperatureUseCase } from "@/domain/use-cases/temperature/temperature-use-case";
import { searchTrackUseCase } from "@/domain/use-cases/track/search-track-use-case";

@Module({
    imports: [],
    controllers: [MusicController],
    providers: [GeneratePlaylistUseCase, TemperatureUseCase, searchTrackUseCase]
})

export class HttpModule {}