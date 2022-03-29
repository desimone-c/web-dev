
import ExploreComponent from "./explore-component";


import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";

const ExploreScreen = () => {
const dispatch = useDispatch();
  const updateNav = () => {
    dispatch({type: 'nav-change', value:'explore'});
  };

useEffect(() => {
    updateNav();
    console.log("Exucute explore");
  });
    return(
            <ExploreComponent/>);
};

export default ExploreScreen;
