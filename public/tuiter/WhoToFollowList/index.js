import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
            <!-- continue here -->
            <li class="list-group-item wd-bold">
                Who to follow
            </li>
            ${who.map(WhoToFollowListItem).join("")}
            </ul>
`); }
export default WhoToFollowList;