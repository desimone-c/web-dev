import React, {useState} from "react";
import {useDispatch}
       from "react-redux";
const WhatsHappening = () => {
 let [whatsHappening, setWhatsHappening]
     = useState('');
 const dispatch = useDispatch();
 const tuitClickHandler = () => {
   dispatch({type: 'create-tuit',
     tuit: whatsHappening
   });
 }

  return (
    <div className="d-flex flex-row justify-content-between">
        <div className="m-2">
            <img src="/images/starship.png" alt="avatar" width="50px" height="50px" className="rounded-circle"/>
        </div>
        <div className="d-flex flex-column m-2 w-100">

      <textarea className="form-control wd-tuit-input" placeholder="What's happening?" value={whatsHappening}
               onChange={(event) =>
        setWhatsHappening(event.target.value)}>
      </textarea>
      <hr/>
      <div className="d-flex flex-row justify-content-between">
      <span className="wd-blue">
      <i className="far fa-image m-1"></i>
      <i className="far fa-chart-bar m-1"></i>
      <i className="far fa-smile m-1"></i>
      <i className="far fa-calendar m-1"></i>
      </span>
      <button className="btn btn-primary btn-block rounded-pill m-2 " onClick={tuitClickHandler}>
        Tweet
      </button>
      </div>
      </div>
    </div>
  );
}
export default WhatsHappening;