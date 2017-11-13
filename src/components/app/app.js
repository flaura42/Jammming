import React, { Component } from 'react';
import './app.css';
import { SearchBar } from '../searchBar/searchBar.js';
import { SearchResults } from '../searchResults/searchResults.js';
import { Playlist } from '../playlist/playlist.js';
import { Spotify } from '../../util/spotify.js';


// class App handles and renders all the things
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: []
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }


  // 41. Method addTrack adds a song to the playlist state. Chose concat() because not supposed to mutate this.state directly.
  addTrack(track) {
    if (!this.state.playlistTracks.includes(track)) {
    let updateTracks = this.state.playlistTracks.concat(track);
    this.setState({playlistTracks: updateTracks});
    } else {
      return;
    }
  }

  // 49. Method removeTrack filters out track by track.id and updates playlist state
  removeTrack(track) {
    let updateTracks = this.state.playlistTracks.filter(checkTrack =>
      checkTrack.id !== track.id)
    this.setState({playlistTracks: updateTracks});
  }

  // 57. Method updatePlaylistName sets the state of playlistName to new name
  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  // 63. Method savePlaylist generates array of trackURIs from the playlistTracks property.
  // 95. Pass trackURIs array and playlistName to Spotify.  Reset state. Unable to find solution for updating playlistName.  Even tried calling updatePlaylistName.
  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({
        searchResults:[],
        playlistName: 'New Playlist',
        playlistTracks: []
      });
    });
  }

  // 67. Method search accepts search term and sends it to Spotify.search()
  // 88. Reset state of searchResults
  search(term) {
    Spotify.search(term).then(results => {
      this.setState({searchResults: results});
    })
  }


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          < SearchBar
          onSearch={this.search}
          />
          <div className="App-playlist">
            < SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            < Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}
