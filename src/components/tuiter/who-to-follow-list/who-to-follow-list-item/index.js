import React from "react";
const WhoToFollowListItem = (
 {
        who = {
            avatarIcon: '../../../images/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }

) => {
    return(
<li className="list-group-item">
                <div className="row align-items-center justify-content-around">

                    <div className="col-6">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <img className="img-fluid rounded-circle" width="50px" alt="profile" src={who.avatarIcon}/>
                            </div>

                            <div className="col-xxl-5 col-xl-4 col-lg-2 text-nowrap">
                                <div className="wd-bold">
                                    {who.userName}<span className="fa-stack">
                            <i className="fas fa-circle fa-stack-1x fa-md"></i>
                            <i className="fas fa-check fa-stack-1x fa-xs text-black"></i>
                        </span>
                                </div>
                                <div className="">
                                    @{who.handle}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-auto">
                            <button className="btn btn-primary btn-block rounded-pill" type="button">Follow</button>
                    </div>
                </div>
            </li>
    );
}
export default WhoToFollowListItem;
