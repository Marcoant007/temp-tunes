import { GeneratePlaylistUseCase } from "@/domain/use-cases/generate-playlist/generate-playlist";
import { CityValidationPipe } from "@/infra/pipes/city-validation.pipe";
import { Controller, Get, Query, UsePipes } from "@nestjs/common";

@Controller('playlist')
export class MusicController {
    constructor(private readonly generatePlaylistUseCase: GeneratePlaylistUseCase) {}

    @Get('/')
    @UsePipes(CityValidationPipe)
    async getPlaylist(@Query('city') city: string): Promise<ResponseDTO> {
        const playlist = await this.generatePlaylistUseCase.generatePlaylist(city);
        return playlist
    }
}
