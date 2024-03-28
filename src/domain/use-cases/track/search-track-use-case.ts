import { GenreEnum } from '@/core/enum/genre-enum';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import axios from 'axios';
import 'dotenv/config';

@Injectable()
export class searchTrackUseCase implements ISearchTrackInterface {

  async searchTracksByGenre(genre: GenreEnum): Promise<TrackDTO[]> {
    const authToken = await this.getToken();
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

  async getToken(): Promise<string> {
    try {
      const data = new URLSearchParams();
      const oauthUrl = process.env.SPOTIFY_TOKEN_URL || '';
      data.append('grant_type', 'client_credentials');
      data.append('client_id', process.env.SPOTIFY_ID_CLIENT || '');
      data.append('client_secret', process.env.SPOTIFY_SECRET || '');

      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${process.env.SPOTIFY_ID_CLIENT}:${process.env.SPOTIFY_SECRET}`).toString('base64')}`
      };

      const response = await axios.post(oauthUrl, data, { headers });
      return response.data.access_token;
    } catch (error) {
      console.error('Erro ao obter token de acesso:', error);
      throw error;
    }
  }
}