import React from "react";
const PostSummaryListItem = (
  {
         post = {
             "topic": "Web Development",
             "userName": "ReactJS",
             "time": "2h",
             "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
             "image": "../../../images/react-blue.png"
         }
     }
) => {
    return(
            <div className="list-group-item">
                            <div className="row">
                                <div className="col">
                                    <div className="text-muted">{post.topic}</div>
                                    <div className="wd-bold">{post.userName}<span className="fa-stack">
                                        <i className="fas fa-circle fa-stack-1x fa-md"></i>
                                        <i className="fas fa-check fa-stack-1x fa-xs text-black"></i>
                                    </span><span className="text-muted">- {post.time}</span></div>
                                    <div className="wd-bold">{post.title}</div>
                                </div>
                                <div className="col-2 align-self-center">
                                    <img src={post.image} alt="post-image" className="img-fluid rounded-3"/>
                                </div>
                            </div>
                        </div>
    );
}
export default PostSummaryListItem;
