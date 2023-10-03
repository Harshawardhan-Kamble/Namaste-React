import RestaurantList from "./RestaurantList";
import restaurantList from "../utils/mockData";
const Body = () => {
  const topRated = () => {
    const ratedRestaurant = restaurantList.filter((data) => {
      return data.info.avgRating >= 4.3;
    });
  };
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      {/* <div className="filter">
        <button className="filter-btn" onClick={topRated}>
          Top Rated Restaurants
        </button>
      </div> */}
      <div className="res-container">
        <RestaurantList />
      </div>
    </div>
  );
};
export default Body;
