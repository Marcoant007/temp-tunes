import { Injectable, NotFoundException } from "@nestjs/common";
import axios from "axios";
import 'dotenv/config';
import { TemperatureUseCase } from "./weathermap/temperature-use-case";

@Injectable()
export class GeneratePlaylistUseCase implements IGeneratePlaylistInterface {
    constructor(private temperatureUseCase: TemperatureUseCase) {}

    async generatePlaylist(city: string): Promise<string[]> {
        const temperature = await this.temperatureUseCase.getTemperature(city);
        console.log('Temperatura', temperature);
        let playlist: string[];

        if (temperature > 25) {
            playlist = ['Música Pop 1', 'Música Pop 2'];
        } else if (temperature >= 10 && temperature <= 25) {
            playlist = ['Música Rock 1', 'Música Rock 2'];
        } else {
            playlist = ['Música Clássica 1', 'Música Clássica 2'];
        }

        return playlist;
    }
}