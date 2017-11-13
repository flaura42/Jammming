import React from 'react';
import './trackList.css';
import { Track } from '../track/track.js';


// class TrackList renders an array of tracks. Can be for playlist or search results
export class TrackList extends React.Component {
  // 34. Use map() to render each track in the tracks list
  //  35. Says to use property calls for name, artist, and album.  Works without it
  render() {
    return (
      <div className="TrackList">
      {
        this.props.tracks.map(track => {
          return <Track
          key = {track.id}
          track = {track}
          onAdd={this.props.onAdd}
          onRemove={this.props.onRemove}
         />
       })
      }
      </div>
    );
  }
}
