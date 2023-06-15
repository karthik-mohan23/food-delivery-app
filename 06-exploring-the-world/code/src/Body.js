import { useState } from "react";

import RestaurantCard from "./RestaurantCard";

import { RestaurantData } from "../config";

function filterData(searchText, restaurants) {
  const searchedRestaurant = restaurants.filter((restaurant) => {
    return restaurant?.name?.includes(searchText);
  });
  return searchedRestaurant;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(RestaurantData);
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
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant} key={restaurant.resId} />;
        })}
      </section>
    </div>
  );
};
export default Body;
