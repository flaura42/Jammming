import React from 'react';
import './trackList.css';
import Track from '../track/track.js';


class TrackList extends React.Component {

  render() {
    return (
      <div className="TrackList">
      {
       this.props.tracks && this.props.tracks.map((track, id) => {
          console.log(track);
          return <Track
          key = {id}
          track = {track}
          onAdd={this.props.onAdd}  // add: isRemoval={this.props.isRemoval} ?
          onRemove={this.props.onRemove}
         />
       })
      }
      </div>
    );
  }
}








export default TrackList;
