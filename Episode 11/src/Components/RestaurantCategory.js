
import ItemList from "./ItemList";

const RestaurantCategory = ({ data ,showItems}) => {
  const handleClick=()=>{
    showItems=true
  }
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 text-lightBlack shadow-lg p-4 cursor-pointer " onClick={handleClick}>
        <div className="flex justify-between">
          <span className="font-bold text-lg text-lightBlack">
            {data.title} ({data.itemCards.length})
          </span>
          <span>&darr;</span>
        </div>{
        showItems&&<ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
