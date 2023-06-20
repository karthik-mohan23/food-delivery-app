import { useEffect } from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";

const handleFilteredRestaurants = (searchText, restaurants) => {
  filterData = restaurants.filter((restaurant) => {
    return restaurant?.data?.name?.includes(searchText);
  });
  return filterData;
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  async function getRestaurants() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0260688&lng=76.3124753&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    setAllRestaurants(data?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(data?.data?.cards[2]?.data?.data?.cards);
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  if (!allRestaurants) {
    return;
  }
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="section show-menu">
      <div>
        <input
          type="text"
          className="search-bar"
          placeholder="Restaurant name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const data = handleFilteredRestaurants(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}>
          Search
        </button>
      </div>
      <section className="card-container">
        {filteredRestaurants.length === 0 ? (
          <h1>No match found.</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"restaurants/" + restaurant.data.id}
                key={restaurant.data.id}>
                <RestaurantCard {...restaurant} />
              </Link>
            );
          })
        )}
      </section>
    </div>
  );
};

export default Body;
