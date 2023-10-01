import RestuarantCard from "./RestaurantCard";

const restaurantList = [
  {
    name: "Belgium Cafe",
    cuisine: "North Indian, Asian",
    rating: "4.5 stars",
    delivery: "35 minutes",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/81a4faaeb179175a895d9a8daec4d6c8",
  },
  {
    name: "Cafe House",
    cuisine: "South Indian, Punjabi",
    rating: "4.5 stars",
    delivery: "35 minutes",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/81a4faaeb179175a895d9a8daec4d6c8",
  },
  {
    name: "Starx Cafe",
    cuisine: "Maharashtrian, Asian",
    rating: "4.5 stars",
    delivery: "35 minutes",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/81a4faaeb179175a895d9a8daec4d6c8",
  },
  {
    name: "Misal House",
    cuisine: "Maharashtrian",
    rating: "4.5 stars",
    delivery: "35 minutes",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/81a4faaeb179175a895d9a8daec4d6c8",
  },
  {
    name: "Chitale",
    cuisine: "Mexican",
    rating: "4.5 stars",
    delivery: "35 minutes",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/81a4faaeb179175a895d9a8daec4d6c8",
  },
];

const RestaurantList = () => {
  return (
    <>
      {restaurantList.map((restaurant, index) => (
        <RestuarantCard
          key={index}
          name={restaurant.name}
          cuisine={restaurant.cuisine}
          rating={restaurant.rating}
          img={restaurant.img}
        />
      ))}
    </>
  );
};
export default RestaurantList;
