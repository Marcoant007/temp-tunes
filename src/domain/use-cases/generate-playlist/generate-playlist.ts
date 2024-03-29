import { GenreEnum } from "@/core/enum/genre-enum";
import { Injectable } from "@nestjs/common";
import { TemperatureUseCase } from "../temperature/temperature-use-case";
import { SearchTrackUseCase } from "../track/search-track-use-case";

@Injectable()
export class GeneratePlaylistUseCase implements IGeneratePlaylistInterface {
    constructor(private temperatureUseCase: TemperatureUseCase, private searchTrackUseCase: SearchTrackUseCase) {}

    async generatePlaylist(city: string): Promise<ResponseDTO> {
        const temperature = await this.temperatureUseCase.getTemperature(city);
        let genre: GenreEnum;
        let playlist: TrackDTO[];

        if (temperature > 25) {
            genre = GenreEnum.POP;
            playlist = await this.searchTrackUseCase.searchTracksByGenre(genre);
        } else if (temperature >= 10 && temperature <= 25) {
            genre = GenreEnum.ROCK;
            playlist = await this.searchTrackUseCase.searchTracksByGenre(genre);
        } else {
            genre = GenreEnum.CLASSICAL;
            playlist = await this.searchTrackUseCase.searchTracksByGenre(genre);
        }
        const response: ResponseDTO = {
            city,
            temperature,
            playlist,
            genre
        };

        return response;
    }
}