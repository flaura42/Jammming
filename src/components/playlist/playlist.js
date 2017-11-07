import React from 'react';
import './playlist.css';
import { TrackList } from '../trackList/trackList.js';


export class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        < TrackList
        tracks={this.props.playlistTracks}
        onRemove={this.props.onRemove}
        />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}
