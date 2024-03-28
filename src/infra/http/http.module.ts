import { Module } from "@nestjs/common";
import { MusicController } from "./controller/music.controller";
import { GeneratePlaylistUseCase } from "@/domain/use-cases/generate-playlist";
import { TemperatureUseCase } from "@/domain/use-cases/weathermap/temperature-use-case";

@Module({
    imports: [],
    controllers: [MusicController],
    providers: [GeneratePlaylistUseCase, TemperatureUseCase]
})

export class HttpModule {}