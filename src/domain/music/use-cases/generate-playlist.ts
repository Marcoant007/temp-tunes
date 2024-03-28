export class GeneratePlaylistUseCase implements IGeneratePlaylistInterface {
   async generatePlaylist(city: string): Promise<string[]> {
        const temperature = await this.getTemperature(city); 
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
    getTemperature(city: string) {
        return 20;
    }

}