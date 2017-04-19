import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
//loop through videos with builtin function  map() for arrays.
  const videoItems = props.videos.map((video) =>{
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />

    );
  });
  // console.log(props);
  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );

};

export default VideoList;
