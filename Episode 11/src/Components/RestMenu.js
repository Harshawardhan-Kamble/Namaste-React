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
// console.log(resInfo)
  // console.log(
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );
  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // const { itemCard2 } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  //     .itemCards;
  const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category)=>category?.card?.card?.["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
  console.log(categories)

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl text-lightBlack">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(",")}</p>
      <p className="font-bold text-lg">{areaName}</p>
      <p className="font-bold text-lg">{costForTwoMessage}</p>
      <p className="font-bold text-lg">{avgRating}</p>
      <p className="font-bold text-lg">{feeDetails.message}</p>
      <h2>Menu</h2>
      {/* <h4>{itemCards[0].card.info.category}</h4>
      <ul>
        {itemCards.map((item, index) => (
          <li key={index}>
            {item?.card?.info?.name} ₹{" "}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
      <ul>
        {categories.map((category,index)=>(
          <li key={index}>
            <h4>{category?.card?.card?.title}</h4>
            {category?.card?.card?.itemCards.map((item,index)=>(<p key={index}>{item?.card?.info?.name}</p>))}

          </li>
        ))}
      </ul>

    </div>
  );
};
export default RestMenu;
