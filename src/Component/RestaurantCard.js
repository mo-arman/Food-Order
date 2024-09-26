

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
    } = resData?.data;
    // const {name, cuisines} = resData?.data;
    console.log(props);
    return (
      <div className="card">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="card-img"
        />
        {/* <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}stars</h4>
        <h4>{deliveryTime}minutes</h4>
        <h4>{costForTwo / 100}</h4>
        <h4>{area}</h4> */}
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
      </span>
      </div>
    );
  };

  export default RestaurantCard;