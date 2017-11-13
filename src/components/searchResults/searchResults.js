import React from 'react';
import './searchResults.css';
import { TrackList } from '../trackList/trackList.js';


// class SearchResults renders the < TrackList /> of searchResults tracks
export class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Search Results</h2>
         < TrackList
         tracks={this.props.searchResults}
         onAdd={this.props.onAdd}
         />
      </div>
    );
  }
}
