interface ITrackToken {
    generateToken(): Promise<string>;
}