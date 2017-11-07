import React, { Component } from 'react';
import './app.css';
import { SearchBar } from '../searchBar/searchBar.js';
import { SearchResults } from '../searchResults/searchResults.js';
import { Playlist } from '../playlist/playlist.js';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
      {
        name: 'Matilda',
        artist: 'alt-J',
        album: 'An Awesome Wave'
      },
      {
        name: 'We Sing In Time',
        artist: 'The Lonely Forest',
        album: 'Arrows'
      },
      {
        name: 'Calamity Song',
        artist: 'The Decemberists',
        album: 'The King Is Dead'
      }
    ],
    playlistName: 'All Things to All People',
    playlistTracks: [
      {
        name: 'Left Hand Free',
        artist: 'alt-J',
        album: 'This Is All Yours'
      },
      {
        name: 'Nuclear Winter',
        artist: 'The Lonely Forest',
        album: 'Nuclear Winter'
      },
      {
        name: 'The Mariners Revenge Song',
        artist: 'The Decemberists',
        album: 'Picaresque'
      }
    ]};
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    if (!this.state.playlistTracks.includes(track)) {
    let updateTracks = this.state.playlistTracks.concat(track);
    this.setState({playlistTracks: updateTracks});
    } else {
      return;
    }
  }

  removeTrack(track) {
    let updateTracks = this.state.playlistTracks.filter(checkTrack =>
      checkTrack !== track)
    this.setState({playlistTracks: updateTracks});
  }


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          < SearchBar />
          <div className="App-playlist">
            < SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            < Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}

            />
          </div>
        </div>
      </div>
    );
  }
}
