import React from "react";
import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({type: 'like-tuit', tuit});
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

    <div className="" onClick={likeTuit}>
    {
      tuit.liked &&
      <i className="fas fa-heart me-1"
         style={{color: 'red'}}></i>
    }
    {
      !tuit.liked &&
      <i className="far fa-heart me-1"></i>
    }
    {tuit.stats && tuit.stats.likes}
    </div>

    <div className="">
        <i className="fas fa-external-link-alt"></i>
    </div>
    </div>
  );
}
export default TuitStats;