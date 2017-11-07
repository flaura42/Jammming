import React from 'react';
import './trackList.css';
import { Track } from '../track/track.js';


export class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
      {
        this.props.tracks.map((track, id) => {
          return <Track
          key = {id}
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
