import { useEffect } from "react";
import { useState } from "react";

import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  async function getRestaurants() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0260688&lng=76.3124753&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    setAllRestaurants(data?.data?.cards[2]?.data?.data?.cards);
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  if (!allRestaurants) {
    return;
  }
  return allRestaurants.length === 0 ? (
    <h1>Shimmer</h1>
  ) : (
    <div className="section show-menu">
      <div>
        <input
          type="text"
          className="search-bar"
          placeholder="Restaurant name"
        />
        <button>Search</button>
      </div>
      <section className="card-container">
        {allRestaurants.map((restaurant) => {
          return <RestaurantCard key={restaurant.data.id} {...restaurant} />;
        })}
      </section>
    </div>
  );
};

export default Body;
