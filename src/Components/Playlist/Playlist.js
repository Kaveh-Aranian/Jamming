import React from "react";
import { TrackList } from "../TrackList/TrackList";
import { App } from "..//App/App";

export class Playlist extends React.Component {
  render() {
    const plylisTrack = this.state.playlistTracks;
    const plylisName = this.state.playlistName;
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} />
        {/* <!-- Add a TrackList component --> */}
        <TrackList />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}
