import React from 'react';
import './playlist.css';
import { TrackList } from '../trackList/trackList.js';


// class Playlist handles the playlist name change and renders playlist < TrackList />
export class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }


  // 59. Method handleNameChange accepts event that is triggered by input onChange
  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }


  render() {
    return (
      <div className="Playlist">
        <input
        defaultValue={'New Playlist'}
        onChange={this.handleNameChange}
        />
        < TrackList
        tracks={this.props.playlistTracks}
        onRemove={this.props.onRemove}
        />
        <a className="Playlist-save"
        onClick={this.props.onSave}

        >SAVE TO SPOTIFY</a>
      </div>
    );
  }
}
