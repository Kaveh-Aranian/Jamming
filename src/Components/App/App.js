import React from "react";
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";
import { TrackList } from "../TrackList/TrackList";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{ name: "", artist: "", album: "", id: "" }],
      playlistName: "Gloomy",
      playlistTracks: [{ name: "", artist: "", album: "", id: "" }],
    };
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    if (!this.state.playlistTracks.includes(track.id)) {
      this.state.playlistTracks.push(track);
    }
    return this.state.playlistTracks;
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          {/* <!-- Add a SearchBar component --> */}
          <SearchBar />
          <div class="App-playlist">
            {/* <!-- Add a SearchResults component --> */}
            <SearchResults />
            {/* <!-- Add a Playlist component --> */}
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
