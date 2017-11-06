import React from 'react';
import './playlist.css';
import TrackList from '../trackList/trackList.js';


class Playlist extends React.Component {


  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        < TrackList
        tracks={this.props.playlistTracks}  // {this.props.tracks} ?
        onRemove={this.props.onRemove}  // add: isRemoval={true} ?
        />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
