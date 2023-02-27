import React from "react";
import { TrackList } from "../TrackList/TrackList";
import "./Track.css";

export class Track extends React.Component {
  renderAction() {
    return (
      <button className="Track-action" type="button">
        {isRemoval ? "-" : "+"}
      </button>
    );
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          {/* <!-- track name will go here --> */}
          <h3>{this.props.track.name}</h3>
          {/* <!-- track artist will go here--> | <!-- track album will go here --> */}
          <p>
            {this.props.track.artist}
            {this.props.track.album}
          </p>
        </div>
        <button className="Track-action">{this.renderAction}</button>
      </div>
    );
  }
}
