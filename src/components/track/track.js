import React from 'react';
import './track.css';


// class Track renders the name/artist/album of tracks. it also handles the addition and removal of tracks, using renderAction() to determine if add or remove
export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.renderAction = this.renderAction.bind(this);
  }


  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  // 27. Chose to use this.props.onAdd instead of isRemoval since onAdd will never signal a removal
  renderAction() {
    return this.props.onAdd ?
      <a className="Track-action" onClick={this.addTrack} >+</a> :
      <a className="Track-action" onClick={this.removeTrack}>-</a>
  }


  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p> {this.props.track.artist}  |  {this.props.track.album}</p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}
