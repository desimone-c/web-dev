import React from "react";
import {Link} from "react-router-dom";
import {Outlet} from "react-router-dom";
import NavigationSidebar from "./navigation-sidebar";
import './index.css';
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import activeReducer from "./reducers/active-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import WhoToFollowList
       from "./who-to-follow-list";

const reducer = combineReducers({
  tuits: tuitsReducer, who: whoReducer, active: activeReducer
});
const store = createStore(reducer);




const Tuiter = () => {
  return (
  <Provider store={store}>
    <div className="row mt-2">
      <div className="col-2 col-lg-1 col-xl-2">
        <NavigationSidebar/>
      </div>
      <div className="col-10 col-lg-7 col-xl-6">
        <Outlet/>
      </div>
      <div className="d-none d-lg-block col-lg-4 col-xl-4">
        <WhoToFollowList/>
      </div>
    </div>
    <Link to="/labs">Labs</Link>
    </Provider>
  );
};
export default Tuiter;

