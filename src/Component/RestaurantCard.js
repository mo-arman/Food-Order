

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
      <div className="res-card">
        <img
          className="card"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="card-img"
        />
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}stars</h4>
        <h4>{deliveryTime}minutes</h4>
        <h4>{costForTwo / 100}</h4>
        <h4>{area}</h4>
      </div>
    );
  };

  export default RestaurantCard;