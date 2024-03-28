interface IGeneratePlaylistInterface {
    generatePlaylist(city: string): Promise<string[]>;
}