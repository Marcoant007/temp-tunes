import { GeneratePlaylistUseCase } from "@/domain/use-cases/generate-playlist";
import { Controller, Get, Query } from "@nestjs/common";

@Controller('music')
export class MusicController {
    constructor(private readonly generatePlaylistUseCase: GeneratePlaylistUseCase) {}

    @Get('playlist')
    async getPlaylist(@Query('city') city: string): Promise<string[]> {
        return await this.generatePlaylistUseCase.generatePlaylist(city);
    }
}
