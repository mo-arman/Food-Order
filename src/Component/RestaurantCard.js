import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    deliveryTime,
    area,
  } = resData?.info;
  // const {name, cuisines} = resData?.data;
  console.log(props);
  return (
    <div className="card">
      <img src={CDN_URL + cloudinaryImageId} alt="card-img" />

      <h2>{name}</h2>
      <h5>{cuisines.join(", ")}</h5>

      <h6>{area}</h6>
      <span>
        <h4
          style={
            avgRating < 4 ? { backgroundColor: "red" } : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        {/* <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4> */}
        <h4>{costForTwo}</h4>
        {/* <h4>{deliveryTime}minutes</h4> */}
      </span>
    </div>
  );
};

export default RestaurantCard;
