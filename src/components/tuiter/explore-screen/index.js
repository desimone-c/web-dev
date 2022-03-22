import NavigationSidebar from "../navigation-sidebar";
import ExploreComponent from "./explore-component";
import WhoToFollowList from "../who-to-follow-list";

const ExploreScreen = () => {
    return(
        <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
            <NavigationSidebar/>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-10">
            <ExploreComponent/>
        </div>
        <div className="d-none d-lg-block col-lg-4 col-xl-4">
            <WhoToFollowList/>
        </div>
        </div>);
};

export default ExploreScreen;
