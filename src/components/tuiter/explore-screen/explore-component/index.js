import PostSummaryList from "../../post-summary-list";

const ExploreComponent = () => {
    return(
        <>
            <div className="d-flex pe-2 justify-content-between align-items-center">
                       <label className="wd-search-bar w-100 d-flex align-items-center ps-3 flex-grow-1 pe-3 pt-1 pb-1 w-100" htmlFor="wd_search_bar">
                                       <i className="fas fa-search"></i>
                                       <input id="wd_search_bar" type="text" placeholder="Search Tuiter" className="ps-3 text-black border-0 flex-grow-1 d-inline-block wd-search-field w-100"/></label>
                                   <a href="explore-settings.html" className="ps-3 pt-1 pb-1"><i className="fas fa-cog fa-2x"></i></a>
           </div>
           <ul className="nav mb-2 mt-2 nav-tabs">
                      <li className="nav-item"><a className="" href="explore-for-you.html"><span className="nav-link active">For You</span></a></li>
                                  <li className="nav-item"><a className="nav-link" href="explore-trending.html"><span className="wd-link-inactive">Trending</span></a></li>
                                  <li className="nav-item"><a className="nav-link" href="explore-news.html"><span className="wd-link-inactive">News</span></a></li>
                                  <li className="nav-item"><a className="nav-link" href="explore-sports.html"><span className="wd-link-inactive">Sports</span></a></li>
                                  <li className="nav-item"><a className="nav-link d-none d-md-block" href="explore-entertainment.html"><span className="wd-link-inactive">Entertainment</span></a></li>
           </ul>
           <div className="card mt-2">
                       <img className="card-img" alt="starship" src="../../../images/starship.jpg"/>
                       <div className="card-img-overlay d-flex align-items-end p-0 pb-1 m-1">
                           <h5 className="card-title text-white wd-card-title wd-strong m-0 p-0 ps-1">SpaceX's Starship</h5>
                       </div>
                   </div>
           <PostSummaryList/>
           </>
    );
}
export default ExploreComponent;
