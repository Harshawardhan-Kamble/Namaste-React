import RestuarantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { CDN_IMAGE } from "../utils/constant";

const RestaurantList = ({ showTopRated }) => {
  const filteredRestaurant = showTopRated
    ? restaurantList.filter((data) => data.info.avgRating >= 4.5)
    : restaurantList;
  return (
    <>
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
