const WhoToFollowListItem = (who) => {
    return(`
<li class="list-group-item">
                <div class="row align-items-center justify-content-around">

                    <div class="col-6">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <img class="img-fluid rounded-circle" width="50px"  src="${who.avatarIcon}"/>
                            </div>

                            <div class="col-xxl-5 col-xl-4 col-lg-2 text-nowrap">
                                <div class="wd-bold">
                                    ${who.userName}<span class="fa-stack">
                            <i class="fa-solid fa-circle fa-stack-1x fa-md"></i>
                            <i class="fa-solid fa-check fa-stack-1x fa-xs text-black"></i>
                        </span>
                                </div>
                                <div class="">
                                    @${who.handle}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-auto">
                            <button class="btn btn-primary btn-block rounded-pill" type="button">Follow</button>
                    </div>
                </div>
            </li>
    `);
}
export default WhoToFollowListItem;
