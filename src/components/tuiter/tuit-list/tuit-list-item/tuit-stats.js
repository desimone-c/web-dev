import React from "react";
import {useDispatch} from "react-redux";
import {updateTuit} from "../../actions/tuits-actions";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const dislikeTuit = () => {
          updateTuit(dispatch, {
              ...tuit,
              dislikes: (tuit.dislikes || 0) + 1
          })
  }
  const likeTuit = () => {
      updateTuit(dispatch, {
          ...tuit,
          likes: (tuit.likes || 0) + 1
      })
  };
  return (

    <div className="d-flex flex-row justify-content-around m-2">

    <div className="">
            <i className="far fa-comment"></i>
            {tuit.stats && tuit.stats.comments}
        </div>

    <div className="">
        <i className="fas fa-retweet"></i>
        {tuit.stats && tuit.stats.retuits}
    </div>

    <div className="" >
      <i onClick={likeTuit} className="fas fa-thumbs-up me-1"
         style={{color: 'green'}}></i>
    {tuit.likes}
    </div>
        <div className="" >
                <i onClick={dislikeTuit} className="fas fa-thumbs-down me-1"
                   style={{color: 'red'}}></i>
            {tuit.dislikes}
        </div>

    <div className="">
        <i className="fas fa-external-link-alt"></i>
    </div>
    </div>
  );
}
export default TuitStats;