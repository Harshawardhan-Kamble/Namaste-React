import RestaurantList from "./RestaurantList";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantList />
      </div>
    </div>
  );
};
export default Body;
