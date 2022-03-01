const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action    p-1">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
            <!-- continue the rest of the list -->
            <a href="home.html" class="list-group-item list-group-item-action p-1">
                <i class="fa-solid fa-house-chimney"></i><span class="d-xl-inline d-none">Home</span>
            </a>
                        <a href="explore.html" class="list-group-item list-group-item-action active p-1" aria-current="true">
                            <i class="fa-solid fa-hashtag"></i> <span class="d-xl-inline d-none">Explore</span>
                        </a>
                        <a href="notifications.html" class="list-group-item list-group-item-action p-1">
                            <i class="fa-solid fa-bell"></i> <span class="d-xl-inline d-none">Notifications</span>
                        </a>
                        <a href="messages.html" class="list-group-item list-group-item-action p-1">
                            <i class="fa-solid fa-envelope"></i> <span class="d-xl-inline d-none">Messages</span>
                        </a>
                        <a href="bookmarks.html" class="list-group-item list-group-item-action p-1">
                            <i class="fa-solid fa-bookmark"></i> <span class="d-xl-inline d-none">Bookmarks</span>
                        </a>
                        <a href="lists.html" class="list-group-item list-group-item-action p-1">
                            <i class="fa-solid fa-list-ul"></i> <span class="d-xl-inline d-none">Lists</span>
                        </a>
                        <a href="profile.html" class="list-group-item list-group-item-action p-1">
                            <i class="fa-solid fa-user"></i> <span class="d-xl-inline d-none">Profile</span>
                        </a>
                        <a href="more.html" class="list-group-item list-group-item-action p-1">
                            <span class="fa-stack fa-2x wd-stack">
                                <i class="fa-solid fa-circle fa-stack-2x fa-2x"></i>
                                <i class="fa-solid fa-ellipsis-h fa-stack-2x text-black wd-hover-text-blue"></i>
                            </span> <span class="d-xl-inline d-none">More</span>
                        </a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
