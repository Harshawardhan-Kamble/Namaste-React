import useRestaurantMenu from "../utils/useRestuarantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestMenu = () => {
  const { id } = useParams();
  // Used useRestaurantMenu custom hook
  const resInfo = useRestaurantMenu(id);
  if (resInfo === null) return <Shimmer />;
  const { name, areaName, costForTwoMessage, cuisines, avgRating, feeDetails } =
    resInfo?.cards[0]?.card?.card?.info;

  // console.log(
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  // );
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // const { itemCard2 } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  //     .itemCards;

  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(",")}</p>
      <p>{areaName}</p>
      <p>{costForTwoMessage}</p>
      <p>{avgRating}</p>
      <p>{feeDetails.message}</p>
      <h2>Menu</h2>
      <h4>{itemCards[0].card.info.category}</h4>
      <ul>
        {itemCards.map((item, index) => (
          <li key={index}>
            {item?.card?.info?.name} ₹{" "}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestMenu;
