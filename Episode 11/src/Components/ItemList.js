const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-gray-200 border-b-2 text-left "
          key={item?.card?.info?.id}
        >
          <p>{item?.card?.info?.name}</p>
          <p>₹{Math.round(item.card.info.price / 100)}</p>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
