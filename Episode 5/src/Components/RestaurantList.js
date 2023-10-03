import RestuarantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { CDN_IMAGE } from "../utils/constant";
import { useState } from "react";
const RestaurantList = () => {
  const [showTopRated, setShowTopRated] = useState(false);
  const topRated = () => {
    setShowTopRated(true);
  };
  const filteredRestaurant = showTopRated
    ? restaurantList.filter((data) => data.info.avgRating >= 4.8)
    : restaurantList;
  return (
    <>
      <div className="filter">
        <button className="filter-btn" onClick={topRated}>
          Top Rated Restaurants
        </button>
      </div>
      {filteredRestaurant.map((restaurant) => (
        <RestuarantCard
          key={restaurant.info.id}
          name={restaurant.info.name}
          cuisine={restaurant.info.cuisines}
          rating={restaurant.info.avgRating}
          img={CDN_IMAGE + restaurant.info.cloudinaryImageId}
          price={restaurant.info.costForTwo}
          delivery={restaurant.info.sla.deliveryTime + " min"}
        />
      ))}
    </>
  );
};
export default RestaurantList;
