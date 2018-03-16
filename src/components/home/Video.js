import React, { Component } from 'react';

class Video extends Component {
  componentDidMount() {
    window.addEventListener('scroll', function() {
      const top = document.documentElement.scrollTop;
      document.getElementById('video').style.top = -1.5 * top + "px";
    });
  }

  render() {
    return (
      <video
        id="video"
        playsInline
        autoPlay
        muted
        loop
      >
        <source src="https://s3.amazonaws.com/riplo/RiploVideo.mp4" type="video/mp4" />
      </video>
    );
  }
}

export default Video;
