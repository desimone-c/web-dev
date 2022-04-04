import React from "react";
import {useDispatch} from "react-redux";
import Attachments from "./attachments";
import TuitStats from "./tuit-stats";
const TuitListItem = ({tuit}) => {
  const dispatch = useDispatch();
  const deleteTuit = (tuit) => {
    dispatch({type: 'delete-tuit', tuit})
  };
  return(
    <div className="list-group-item p-2">
                            <div className="col">
                                <div className="row">
                                    <div className="col-2">
                                        <img src={tuit['avatar-image']} alt="avatar" width="50px" height="50px" className="rounded-circle"/>
                                    </div>
                                    <div className="col row">
                                        <div className="col">
                                            <div><span className="wd-bold">{tuit.postedBy.username}</span> <span className="text-muted">@{tuit.handle}</span></div>
                                            <div className="">{tuit.tuit}</div>
                                        {'attachments' in tuit && <Attachments attachments={tuit.attachments}/>}
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <i onClick={() =>
                                               deleteTuit(tuit)}
                                               className="fas fa-times fa-pull-right"></i>
                                    </div>

                                </div>
                                <TuitStats tuit={tuit}/>
                            </div>
    </div>

  );
}
export default TuitListItem;