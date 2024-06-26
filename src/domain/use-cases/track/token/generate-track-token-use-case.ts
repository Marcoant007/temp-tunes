import { HttpException, Injectable, Logger } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class GenerateTrackTokenUseCase implements IGenerateTrackTokenInterface {
  private readonly logger = new Logger(GenerateTrackTokenUseCase.name);
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
          this.logger.error('Erro ao obter token de acesso:' + error);
          throw new HttpException('OCorreu um erro ao obter o token de acesso', 404);
        }
      }
}


