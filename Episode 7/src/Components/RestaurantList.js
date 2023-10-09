import RestuarantCard from "./RestaurantCard";
import { CDN_IMAGE } from "../utils/constant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantList = () => {
  const [resList, setResList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showTopRated, setShowTopRated] = useState(false);
  const topRated = () => {
    setShowTopRated(true);
  };
  const handlerOnClick = () => {
    console.log(searchText);
    const filteredText = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterList(filteredText);
  };

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setResList(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterList(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filteredRating = showTopRated
      ? resList.filter((data) => data.info.avgRating >= 4)
      : resList;
    setFilterList(filteredRating);
  }, [showTopRated, resList]);

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="filter">
        <div className="search">
          <input
            className="search-input"
            type="text"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="search-button" onClick={handlerOnClick}>
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={topRated}>
          Rating 4.0+
        </button>
      </div>
      <div className="res-container">
        {filterList.map((restaurant) => (
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
      </div>
    </>
  );
};
export default RestaurantList;
