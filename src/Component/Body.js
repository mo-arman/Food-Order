import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="search-container">
      <div className="search-input">
        <input
          className="search-bar"
          type="text"
          placeholder="Search a restaurant you want..."
        />
        <button className="search-btn">Search</button>
      </div>
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
