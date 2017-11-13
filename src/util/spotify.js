const clientId = 'b1ab6e8b6c03422480f5afb971df7a42';
const redirectURI = 'http://localhost:3000/';
let accessToken;


// Spotify handles all the Spotification
export const Spotify = {
  // 78. method checks for access token. Gets access token and expiration from Spotify and save them in accessToken and expiresIn.  Set timeout for accessToken.
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    const accessMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessMatch && expiresMatch) {
      accessToken = accessMatch[1];
      const expiresIn = Number(expiresMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
    }
  },

  // 85. Search Spotify using term entered by user.  Fetch data from Spotify and display it.
  search(term) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` }
      }).then(response => {
        return response.json();}).then(jsonResponse => {
          if (!jsonResponse.tracks) {
            return [];
          }
          return jsonResponse.tracks.items.map(track => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
          }));
        }
      )
  },

  // 90. Save newly created playlist to Spotify
  savePlaylist(playlistName, trackURIs) {
    if (!playlistName || !trackURIs) {
      return;
    }
    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userID;
    // 92. Get user's ID and save it as userID
    return fetch('https://api.spotify.com/v1/me', {
      headers: headers
    }).then(response => response.json()).then(jsonResponse => {
        if (!jsonResponse.id) {
          return;
        }
        userID = jsonResponse.id;
        // 93. Post new playlistName to user's Spotify account. Receive playlistID back
        return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({name: playlistName})
      }).then(response => response.json()).then(jsonResponse => {
            if (!jsonResponse.id) {
              return;
            }
            let playlistID = jsonResponse.id;
            // 94. Post trackURIs to new playlist, referencing userID and new playlistID
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify({uris: trackURIs})
          });
        });
      });
  }
}
