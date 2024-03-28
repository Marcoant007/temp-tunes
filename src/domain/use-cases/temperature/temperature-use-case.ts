import { Injectable, NotFoundException } from "@nestjs/common";
import axios from "axios";
import 'dotenv/config';

@Injectable()
export class TemperatureUseCase implements ITemperatureInterface {
  async getTemperature(city: string): Promise<number> {
    const apiKey = process.env.WEATHERMAP_KEY;
    const encodedCity = encodeURIComponent(city);
    console.log('Buscando a temperatura em', encodedCity);
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      console.log(response.data)
      if (response.data.cod === '404') {
        throw new NotFoundException('Cidade não encontrada');
      }
      return response.data.main.temp;
    } catch (error) {
      console.error('Erro ao buscar a temperatura:', error);
      throw new Error('Erro ao buscar a temperatura');
    }
  }
}