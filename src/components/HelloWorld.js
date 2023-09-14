import React, { Component } from "react";
import "./style.css";
import { mockFetch } from "../utils/mock-fetch";
import VideoPlayer from "./VideoPlayer";

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: null,
      loading: false,
      otp: "",
      playbackInfo: ""
    };
  }

  async loadVideo(id) {
    // cancel ongoing fetch if any

    this.setState({
      loading: true,
      currentVideo: id
    });
    const result = await mockFetch(id);

    this.setState({
      otp: result.otp,
      playbackInfo: result.playbackInfo,
      loading: false
    });
  }

  hide() {
    // cancel ongoing fetch if any
    this.setState({
      currentVideo: null
    });
  }
  render() {
    const { msg } = this.props;
    const { loading, currentVideo, otp, playbackInfo } = this.state;
    return (
      <div className="hello">
        <h1>{msg}</h1>
        <h3>List of videos</h3>
        <ul>
          <li>
            <button onClick={() => this.loadVideo(1)}>One video</button>
          </li>
          <li>
            <button onClick={() => this.loadVideo(2)}>Another video</button>
          </li>
          <li>
            <button onClick={() => this.hide()}>No video</button>
          </li>
        </ul>
        {loading && currentVideo && <span>Loading...</span>}
        {!loading && currentVideo && (
          <VideoPlayer otp={otp} playbackInfo={playbackInfo} />
        )}
      </div>
    );
  }
}

export default HelloWorld;
