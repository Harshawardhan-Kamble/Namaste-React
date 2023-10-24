import useRestaurantMenu from "../utils/useRestuarantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestMenu = () => {
  const { id } = useParams();
  // Used useRestaurantMenu custom hook
  const resInfo = useRestaurantMenu(id);
  if (resInfo === null) return <Shimmer />;
  const {
    name,
    areaName,
    costForTwoMessage,
    cuisines,
    avgRating,
    feeDetails,
    sla,
    totalRatingsString,
  } = resInfo?.cards[0]?.card?.card?.info;
  console.log(resInfo);
  // console.log(
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );
  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // const { itemCard2 } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  //     .itemCards;
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <>
      <div className=" flex justify-center items-center">
      <div className="w-full flex justify-between max-w-screen-sm">
        <div >
          <h1 className="font-bold my-6 text-2xl text-lightBlack">{name}</h1>
          <p className=" text-sm text-gray-500">{cuisines.join(",")}</p>
          <p className=" text-sm  text-gray-500">{areaName}</p>
          <p className="text-sm  text-gray-500 m-3">{feeDetails.message}</p>
          <span className="font-bold my-6 text-2lg text-lightBlack">
            {sla.deliveryTime}MINS
          </span>
          <span className="font-bold my-6 text-2lg text-lightBlack m-5">
            {costForTwoMessage}
          </span>
        </div>
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
        {/* <ul> */}
        <div >
          <p className="font-bold  text-lg text-green-500">
            &#9733; {avgRating}
          </p>
          <p className="text-gray-400">{totalRatingsString}</p>
        </div>
      </div>
      </div>
      <div>
        {categories.map((category, index) => (
          // <li key={index}>
          //   <h4>{category?.card?.card?.title}</h4>
          //   {category?.card?.card?.itemCards.map((item,index)=>(<p key={index}>{item?.card?.info?.name}</p>))}
          <RestaurantCategory data={category?.card?.card} />
          //   </li>
        ))}
        {/* // </ul> */}
      </div>
    </>
  );
};
export default RestMenu;
