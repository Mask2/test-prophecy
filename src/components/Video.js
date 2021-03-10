import React from 'react';
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div style={{ position: 'relative', paddingTop: '56.25%', maxWidth: '960px', maxHeight: '540px' }}>
    <iframe
      width='100%'
      height='100%'
      src={videoSrcURL}
      title={videoTitle}
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      frameBorder='0'
      webkitallowfullscreen='true'
      mozallowfullscreen='true'
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0 }}
      {...props}
    />
  </div>
);
export default Video;
