interface ISearchTrackInterface {
    searchTracksByGenre(genre: string): Promise<TrackDTO[]>;
    getToken(): Promise<string>;
}