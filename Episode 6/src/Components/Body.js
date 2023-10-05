import RestaurantList from "./RestaurantList";
import { useState } from "react";
const Body = () => {
  const [showTopRated, setShowTopRated] = useState(false);
  const topRated = () => {
    setShowTopRated(true);
  };
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button className="filter-btn" onClick={topRated}>
          Rating 4.0+
        </button>
      </div>
      <div className="res-container">
        <RestaurantList showTopRated={showTopRated} />
      </div>
    </div>
  );
};
export default Body;
