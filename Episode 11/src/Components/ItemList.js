import {CDN_IMAGE} from "../utils/constant"
const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div >
      {items.map((item) => (
        <div
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          key={item?.card?.info?.id}
        >
          <div className="w-9/12">
          <p>{item?.card?.info?.name}</p>
          <p>₹{Math.round(item.card.info.price / 100)||(item.card.info.defaultPrice / 100)}</p>
          <p>{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4"><img src={CDN_IMAGE+item?.card?.info?.imageId} className="w-full"/></div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
