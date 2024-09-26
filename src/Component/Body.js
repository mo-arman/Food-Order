import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {/* <RestaurantCard resData={resList[7]} /> */}
          {resList.map((restaurants) => (
            <RestaurantCard key={restaurants?.data?.id} resData={restaurants} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;