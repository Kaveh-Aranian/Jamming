import React from "react";
import { TrackList } from "../TrackList/TrackList";
import "./SearchResults.css";
import { App } from "../App/App";

export class SearchResults extends React.Component {
  render() {
    const searchResults = this.state.searchResults;
    
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        {/* <!-- Add a TrackList component --> */}
        <TrackList onAdd={this.props.onAdd} />
      </div>
    );
  }
}
