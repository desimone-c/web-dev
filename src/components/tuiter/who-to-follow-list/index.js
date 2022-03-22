import WhoToFollowListItem from "./who-to-follow-list-item";
import who from "./who.json"
const WhoToFollowList = () => {
    return (
            <ul className="list-group">
            <li className="list-group-item wd-bold">
                Who to follow
            </li>
            {who.map(who => {return(<WhoToFollowListItem key={who.handle} who={who}/>);})}
            </ul>
); }
export default WhoToFollowList;