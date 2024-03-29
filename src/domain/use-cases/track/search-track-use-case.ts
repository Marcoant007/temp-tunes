import { GenreEnum } from '@/core/enum/genre-enum';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import axios from 'axios';
import 'dotenv/config';
import { TrackTokenUseCase } from './token/generate-token-use-case';

@Injectable()
export class SearchTrackUseCase implements ISearchTrackInteface {
  constructor(private trackTokenUseCase: TrackTokenUseCase) {}

  async searchTracksByGenre(genre: GenreEnum): Promise<TrackDTO[]> {
    const authToken = await this.trackTokenUseCase.generateToken();
    const urlSearch = process.env.SPOTIFY_SEARCH_URL || "";
    try {
      const response = await axios.get(urlSearch, {
        params: {
          q: `genre:"${genre}"`,
          type: 'track',
          limit: 10,
          sort: 'popularity',
          market: 'US'
        },
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });

      if (response.data.code === 401) {
        throw new UnauthorizedException('Token inválido');
      }

      const tracks: TrackDTO[] = response.data.tracks.items.map((item: any) => ({
        artist: item.artists[0].name, 
        track: item.name,
        popularity: item.popularity
      }));

      return tracks;
    } catch (error) {
      console.error('Erro ao buscar faixas por gênero:', error);
      return [];
    }
  }
}