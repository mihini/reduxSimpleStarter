import React from 'react';

//{video} is same thing as
//const video = props.video; and const VideoListItem = (props) =>
//{video, onVideoSelect} samething as
// const video = props.video; const onVideoSelect= props.onVideoSelect

const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video;
  const imgUrl = video.snippet.thumbnails.default.url;
  return(
    <li onClick={()=>onVideoSelect(video)} className="list-group-item">    {/*video here is video from const VideoListItem*/}
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imgUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>

    </li>
  );
};

export default VideoListItem;
