import React from "react";
import PostSummaryListItem from "./post-summary-list-item";
import posts from "./posts.json"
const PostSummaryList = () => {
    return (
            <ul className="list-group mt-2 mb-2">
            {posts.map(post => {return(<PostSummaryListItem key={post.title} post={post}/>);})}
            </ul>
); }
export default PostSummaryList;