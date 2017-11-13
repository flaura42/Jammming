import React from 'react';
import './searchBar.css';


// class SearchBar handles the search event
export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.state = { term: ''};
  }


  // 69. Method search passes term state to onSearch props
  search() {
    this.props.onSearch(this.state.term);
  }

  // 71. Method handleTermChange accepts event argument and sets the state of the searchBar's term to the event target's value
  handleTermChange(event) {
    this.setState({term: event.target.value});
  }


  // 69. Says to pass search() to < SearchBar /> as onSearch attribute.  Error says 'unknown event handler' so I changed it to onClick
  render() {
    return (
      <div className="SearchBar">
        <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={this.handleTermChange}
        />
        <a onClick={this.search} >SEARCH</a>
      </div>
    );
  }
}
