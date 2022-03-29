import React from "react";
const Video = ({video}) => {
  return(
    <div className="wd-video-embed w-100">
        <iframe
        className="w-100 h-100 wd-video"
        src={"https://www.youtube.com/embed/" + video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
        </iframe>

    </div>

  );
}
export default Video;