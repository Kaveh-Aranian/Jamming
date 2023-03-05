import React from "react";
import "./TrackList.css";
import { Track } from "../Track/Track.js";

export class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map((dumb) => {
          return (
            <Track
              track={dumb}
              key={dumb.id}
              onAdd={this.props.onAdd}
              onRemove={this.props.onRemove}
              isRemoval={this.props.isRemoval}
            />
          );
        })}
      </div>
    );
  }
}

export default TrackList;
