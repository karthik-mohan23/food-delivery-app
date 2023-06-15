import { useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";

import { RestaurantData } from "../config";

function filterData(searchText, restaurants) {
  const searchedRestaurant = restaurants.filter((restaurant) => {
    return restaurant?.strMeal?.includes(searchText);
  });
  return searchedRestaurant;
}

const Body = () => {
  async function getRestaurants() {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
    );
    const json = await data.json();
    console.log(json.meals);
    setRestaurants(json.meals);
  }

  useEffect(() => {
    getRestaurants();
  }, [restaurants]);

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
          return <RestaurantCard {...restaurant} key={restaurant.idMeal} />;
        })}
      </section>
    </div>
  );
};
export default Body;
