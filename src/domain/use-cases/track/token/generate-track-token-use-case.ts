import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class GenerateTrackToken implements IGenerateTrackToken {
    async generateToken(): Promise<string> {
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


