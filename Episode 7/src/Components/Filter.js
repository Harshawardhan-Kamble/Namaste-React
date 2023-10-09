import { useState } from "react";
const Filter = ({ resList, setResList }) => {
  const [showTopRated, setShowTopRated] = useState();
  const topRated = () => {
    setShowTopRated(true);
  };
  const filteredRating = showTopRated
    ? resList.filter((data) => data.info.avgRating >= 4)
    : resList;
  setResList(filteredRating);
  console.log(resList);
  console.log(filteredRating);
  return (
    <>
      <button className="filter-btn" onClick={topRated}>
        Rating 4.0+
      </button>
    </>
  );
};
export default Filter;
