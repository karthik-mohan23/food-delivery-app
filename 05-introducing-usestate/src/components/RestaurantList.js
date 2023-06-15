import { useState } from "react";

import RestaurantCard from "./RestaurantCard";
import RestaurantData from "../Constant";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState(RestaurantData);
  // to store search text
  const [searchText, setSearchText] = useState("");

  const filterData = (searchData, restaurants) => {
    const searchedRestaurant = restaurants.filter((data) => {
      return data.name.includes(searchData);
    });
    return searchedRestaurant;
  };

  return (
    <div className="section">
      <div>
        <input
          className="search-bar"
          placeholder="Restaurant name"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}>
          Search
        </button>
      </div>
      <section className="card-container">
        {restaurants.map((data) => {
          return <RestaurantCard {...data} key={data.resId} />;
        })}
      </section>
    </div>
  );
};
export default RestaurantList;
