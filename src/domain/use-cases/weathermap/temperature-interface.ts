interface ITemperatureInterface {
    getTemperature(city: string): Promise<number>;
}