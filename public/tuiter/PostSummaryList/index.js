import PostSummaryListItem from "./PostSummaryListItem.js";
import posts from "./posts.js"
const PostSummaryList = () => {
    return (`
            <ul class="list-group mt-2 mb-2">
            <!-- continue here -->
            ${posts.map(PostSummaryListItem).join("")}
            </ul>
`); }
export default PostSummaryList;