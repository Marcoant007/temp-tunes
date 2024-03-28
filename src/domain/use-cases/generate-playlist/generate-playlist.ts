import { GenreEnum } from "@/core/enum/genre-enum";
import { Injectable } from "@nestjs/common";
import { TemperatureUseCase } from "../temperature/temperature-use-case";
import { searchTrackUseCase } from "../track/search-track-use-case";

@Injectable()
export class GeneratePlaylistUseCase implements IGeneratePlaylistInterface {
    constructor(private temperatureUseCase: TemperatureUseCase, private spotifyUseCase: searchTrackUseCase) {}

    async generatePlaylist(city: string): Promise<ResponseDTO> {
        const temperature = await this.temperatureUseCase.getTemperature(city);
        let genre: GenreEnum;
        let playlist: TrackDTO[];

        if (temperature > 25) {
            genre = GenreEnum.POP;
            playlist = await this.spotifyUseCase.searchTracksByGenre(genre);
        } else if (temperature >= 10 && temperature <= 25) {
            genre = GenreEnum.ROCK;
            playlist = await this.spotifyUseCase.searchTracksByGenre(genre);
        } else {
            genre = GenreEnum.CLASSICAL;
            playlist = await this.spotifyUseCase.searchTracksByGenre(genre);
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