import { Module } from "@nestjs/common";
import { MusicController } from "./controller/music.controller";
import { GeneratePlaylistUseCase } from "@/domain/music/use-cases/generate-playlist";

@Module({
    imports: [],
    controllers: [MusicController],
    providers: [GeneratePlaylistUseCase]
})

export class HttpModule {}