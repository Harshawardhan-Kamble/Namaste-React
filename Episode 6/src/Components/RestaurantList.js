import RestuarantCard from "./RestaurantCard";
import { CDN_IMAGE } from "../utils/constant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantList = ({ showTopRated }) => {
  const [resList, setResList] = useState([]);
  // const restaurants = showTopRated
  //   ? restaurantList.filter((data) => data.info.avgRating >= 4)
  //   : restaurantList;
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResList(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {/* {showTopRated && <div>&times;</div>} */}
      {resList.map((restaurant) => (
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
