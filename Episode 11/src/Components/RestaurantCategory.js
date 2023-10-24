import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [toggle,setToggle]=useState(false)
  const handleClick=()=>{
  setToggle(true)
  }
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 text-lightBlack shadow-lg p-4 " onClick={handleClick}>
        <div className="flex justify-between">
          <span className="font-bold text-lg text-lightBlack">
            {data.title} ({data.itemCards.length})
          </span>
          <span>&darr;</span>
        </div>{
        {setToggle}?<ItemList items={data.itemCards} />:null}
      </div>
    </div>
  );
};
export default RestaurantCategory;
