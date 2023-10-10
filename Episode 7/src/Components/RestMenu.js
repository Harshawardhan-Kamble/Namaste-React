import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  console.log(id);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + 23719);
    const jsonData = await data.json();
    console.log(jsonData);
    setResInfo(jsonData.data);
  };

  if (resInfo === null) return <Shimmer />;
  console.log(resInfo);
  const { name, areaName, costForTwoMessage, cuisines, avgRating, feeDetails } =
    resInfo?.cards[0]?.card?.card?.info;

  console.log(
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  );
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
        {itemCards.map((item) => (
          <li>
            {item?.card?.info?.name} ₹ {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestMenu;
