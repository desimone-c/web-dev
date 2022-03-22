import React from "react";
const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return(
        <>
            <div className="list-group">
                <a href="../home.html" className="list-group-item list-group-item-action    p-1">
                                <i className="fab fa-twitter"></i>
                            </a>
            <a href="../home.html" className={`list-group-item list-group-item-action {active === 'home' ? 'active' : ''} p-1`}
                aria-current={active === 'home' ? 'true': 'false'}>
                <i className="fas fa-home"></i><span className="d-xl-inline d-none">Home</span>
            </a>
                        <a href="../explore.html" className={`list-group-item list-group-item-action {active === 'explore' ? 'active' : ''} p-1`}
                                        aria-current={active === 'explore' ? 'true': 'false'}>
                            <i className="fas fa-hashtag"></i> <span className="d-xl-inline d-none">Explore</span>
                        </a>
                        <a href="../notifications.html" className={`list-group-item list-group-item-action {active === 'notifications' ? 'active' : ''} p-1`}
                                        aria-current={active === 'notifications' ? 'true': 'false'}>
                            <i className="fas fa-bell"></i> <span className="d-xl-inline d-none">Notifications</span>
                        </a>
                        <a href="../messages.html" className={`list-group-item list-group-item-action {active === 'messages' ? 'active' : ''} p-1`}
                                        aria-current={active === 'messages' ? 'true': 'false'}>
                            <i className="fas fa-envelope"></i> <span className="d-xl-inline d-none">Messages</span>
                        </a>
                        <a href="../bookmarks.html" className={`list-group-item list-group-item-action {active === 'bookmarks' ? 'active' : ''} p-1`}
                                        aria-current={active === 'bookmarks' ? 'true': 'false'}>
                            <i className="fas fa-bookmark"></i> <span className="d-xl-inline d-none">Bookmarks</span>
                        </a>
                        <a href="../lists.html" className={`list-group-item list-group-item-action {active === 'lists' ? 'active' : ''} p-1`}
                                        aria-current={active === 'lists' ? 'true': 'false'}>
                            <i className="fas fa-list-ul"></i> <span className="d-xl-inline d-none">Lists</span>
                        </a>
                        <a href="../profile.html" className={`list-group-item list-group-item-action {active === 'profile' ? 'active' : ''} p-1`}
                                        aria-current={active === 'profile' ? 'true': 'false'}>
                            <i className="fas fa-user"></i> <span className="d-xl-inline d-none">Profile</span>
                        </a>
                        <a href="../more.html" className={`list-group-item list-group-item-action {active === 'more' ? 'active' : ''} p-1`}
                                        aria-current={active === 'more' ? 'true': 'false'}>
                            <span className="fa-stack fa-2x wd-stack">
                                <i className="fas fa-circle fa-stack-2x fa-2x"></i>
                                <i className="fas fa-ellipsis-h fa-stack-2x text-black wd-hover-text-blue"></i>
                            </span> <span className="d-xl-inline d-none">More</span>
                        </a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );
}
export default NavigationSidebar;
