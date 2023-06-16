import { useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";

// import { RestaurantData } from "../config";

function filterData(searchText, restaurants) {
  const searchedRestaurant = restaurants.filter((restaurant) => {
    return restaurant?.strMeal?.includes(searchText);
  });
  console.log(searchedRestaurant);
  return searchedRestaurant;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
    );
    const json = await data.json();
    setAllRestaurants(json?.meals);
    setFilterRestaurants(json?.meals);
  }

  useEffect(() => {
    getRestaurants();
  }, []);

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
            const data = filterData(searchText, allRestaurants);
            setFilterRestaurants(data);
          }}>
          Search
        </button>
      </div>
      <section className="card-container">
        {filterRestaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant} key={restaurant.idMeal} />;
        })}
      </section>
    </div>
  );
};
export default Body;
