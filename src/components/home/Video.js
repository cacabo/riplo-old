import React, { Component } from 'react';
import Image from '../../img/video-image.png';

class Video extends Component {
  componentDidMount() {
    window.addEventListener('scroll', function() {
      const top = document.documentElement.scrollTop;
      document.getElementById('video').style.top = -1.25 * top + "px";
    });
  }

  render() {
    return (
      <div>
        <video
          id="video"
          playsInline
          autoPlay
          muted
          loop
          className="hidden-md-down"
        >
          <source src="https://s3.amazonaws.com/riplo/RiploVideo.mp4" type="video/mp4" />
        </video>
        <div
          id="hero-image"
          className="background-image hidden-lg-up"
          style={{backgroundImage: `url(${Image})`}}
        />
      </div>
    );
  }
}

export default Video;
