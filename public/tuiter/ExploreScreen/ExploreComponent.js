import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
            <div class="d-flex pe-2 justify-content-between align-items-center">
                       <!-- search field and cog -->
                       <label class="wd-search-bar w-100 d-flex align-items-center ps-3 flex-grow-1 pe-3 pt-1 pb-1 w-100" for="wd_search_bar">
                                       <i class="fa-solid fa-magnifying-glass"></i>
                                       <input id="wd_search_bar" type="text" placeholder="Search Tuiter" class="ps-3 text-black border-0 flex-grow-1 d-inline-block wd-search-field w-100"/></label>
                                   <a href="explore-settings.html" class="ps-3 pt-1 pb-1"><i class="fa-solid fa-gear fa-2x"></i></a>
           </div>
           <ul class="nav mb-2 mt-2 nav-tabs">
                      <!-- tabs -->
                      <li class="nav-item"><a class="" href="#"><span class="nav-link active">For You</span></a></li>
                                  <li class="nav-item"><a class="nav-link" href="#"><span class="wd-link-inactive">Trending</span></a></li>
                                  <li class="nav-item"><a class="nav-link" href="#"><span class="wd-link-inactive">News</span></a></li>
                                  <li class="nav-item"><a class="nav-link" href="#"><span class="wd-link-inactive">Sports</span></a></li>
                                  <li class="nav-item"><a class="nav-link d-none d-md-block" href="#"><span class="wd-link-inactive">Entertainment</span></a></li>
           </ul>
           <!-- image with overlaid text -->
           <div class="card mt-2">
                       <img class="card-img" src="../../images/starship.jpg"/>
                       <div class="card-img-overlay d-flex align-items-end p-0 pb-1 m-1">
                           <h5 class="card-title text-white wd-card-title wd-strong m-0 p-0 ps-1">SpaceX's Starship</h5>
                       </div>
                   </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
