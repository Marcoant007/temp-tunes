// import { SpotifyWebApi } from '@spotify/web-api-ts-sdk';

// // Substitua 'YOUR_SPOTIFY_CLIENT_ID' e 'YOUR_SPOTIFY_CLIENT_SECRET' pelos seus valores reais
// const spotifyApi = new SpotifyWebApi({
//  clientId: 'YOUR_SPOTIFY_CLIENT_ID',
//  clientSecret: 'YOUR_SPOTIFY_CLIENT_SECRET',
// });

// export async function authenticateSpotifyApi(): Promise<void> {
//  await spotifyApi.clientCredentialsGrant().then(
//     function (data) {
//       spotifyApi.setAccessToken(data.body['access_token']);
//     },
//     function (err) {
//       console.log('Something went wrong when retrieving an access token', err);
//     }
//  );
// }

// export async function getSpotifyPlaylist(playlistId: string): Promise<string[]> {
//  const playlist = await spotifyApi.getPlaylist(playlistId);
//  // Aqui você pode processar a playlist conforme necessário
//  // Por exemplo, retornar os nomes das músicas
//  return playlist.body.tracks.items.map(item => item.track.name);
// }