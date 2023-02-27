import React from "react";
// import {Tracklist} from
import "./TrackList.css";
import { SearchResults } from "../SearchResults/SearchResults";

export class TrackList extends React.Component {
  render() {
    const tracks = this.props.searchResults;
    const plylisTrack = this.props.playlistTracks;
    const plylisName = this.props.playlistName;
    const isRemoval = false;

    const mapping = this.props.tracks.map((track) => {
      <li key={track.id}>{track}</li>;
    });

    return (
      <div className="TrackList" >
        {/* <!-- You will add a map method that renders a set of Track components  --> */}
        <ul>{mapping}</ul>
      </div>
    );
  }
}
