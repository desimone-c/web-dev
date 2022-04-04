import React from "react";
import Image from "./image";
import Video from "./video";
const Attachments = ({attachments}) => {
  return(
    <div className="">
        {'video' in attachments && <Video video={attachments.video}/>}
        {'image' in attachments && <Image image={attachments.image}/>}
    </div>

  );
}
export default Attachments;