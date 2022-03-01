import PostSummaryListItem from "./PostSummaryListItem.js";
import posts from "./posts.js"
const PostSummaryList = () => {
    return (`
            <ul class="list-group">
            <!-- continue here -->
            ${posts.map(PostSummaryListItem).join("")}
            </ul>
`); }
export default PostSummaryList;