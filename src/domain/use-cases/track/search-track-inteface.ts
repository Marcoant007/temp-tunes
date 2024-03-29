interface ISearchTrackInteface {
    searchTracksByGenre(genre: string): Promise<TrackDTO[]>;
}