import React, { Component } from "react";
import src_video from "./assets/video.mp4";
import "./Bg.css";

export default class BackgroundVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVideoPlaying: false,
    };
    this.BackgroundVideo = React.createRef();
  }
  componentDidMount() {
    this.startStopVideo();
  }
  startStopVideo = () => {
    if (this.state.isVideoPlaying === false) {
      this.BackgroundVideo.current.play();
    } else {
      this.BackgroundVideo.current.pause();
    }
    this.setState({
      isVideoPlaying: !this.state.isVideoPlaying,
    });
  };
  render() {
    return (
      <div className="BackgroundVideo">
        <video
          className="background-video"
          loop
          muted
          ref={this.BackgroundVideo}
          onClick={() => this.startStopVideo()}
        >
          <source src={src_video} type="video/mp4" />
        </video>
      </div>
    );
  }
}
