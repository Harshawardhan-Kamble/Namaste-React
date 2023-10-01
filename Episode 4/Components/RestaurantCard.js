const RestuarantCard = (props) => {
  return (
    <div className="res-card">
      <img className="res-logo" src={props.img} alt="curry" />
      <h3>{props.name}</h3>
      <p>{props.cuisine}</p>
      <p>{props.rating}</p>
      <p>{props.delivery}</p>
    </div>
  );
};
export default RestuarantCard;
