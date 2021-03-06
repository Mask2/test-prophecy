import React from 'react';
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className='video'>
    <iframe
      width='100%'
      height='400'
      src={videoSrcURL}
      title={videoTitle}
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      frameBorder='0'
      webkitallowfullscreen='true'
      mozallowfullscreen='true'
      allowFullScreen
      {...props}
    />
  </div>
);
export default Video;
