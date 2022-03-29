import TuitList
       from "../tuit-list";
import WhatsHappening
       from "../whats-happening";
import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";


const HomeScreen = () => {
const dispatch = useDispatch();
  const updateNav = () => {
    dispatch({type: 'nav-change', value:'home'});
  };
useEffect(() => {
    updateNav();
    console.log("Home");
  });
  return(
    <div>
      <WhatsHappening/>
      <TuitList/>
    </div>
  )
}
export default HomeScreen;