import React from "react";
const Image = ({image}) => {
  return(
    <div className="wd-image-embed">
        <img src={image.slice(2)} alt={image.slice(2)} className="img-fluid"/>
    </div>

  );
}
export default Image;