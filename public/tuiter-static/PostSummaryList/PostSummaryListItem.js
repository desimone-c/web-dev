const PostSummaryListItem = (post) => {
    return(`
            <div class="list-group-item">
                            <div class="row">
                                <div class="col">
                                    <div class="text-muted">${post.topic}</div>
                                    <div class="wd-bold">${post.userName}<span class="fa-stack">
                                        <i class="fa-solid fa-circle fa-stack-1x fa-md"></i>
                                        <i class="fa-solid fa-check fa-stack-1x fa-xs text-black"></i>
                                    </span><span class="text-muted">- ${post.time}</span></div>
                                    <div class="wd-bold">${post.title}</div>
                                </div>
                                <div class="col-2 align-self-center">
                                    <img src="${post.image}" class="img-fluid rounded-3"/>
                                </div>
                            </div>
                        </div>
    `);
}
export default PostSummaryListItem;
