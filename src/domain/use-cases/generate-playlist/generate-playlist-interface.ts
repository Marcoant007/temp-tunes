interface IGeneratePlaylistInterface {
    generatePlaylist(city: string): Promise<ResponseDTO>;
}