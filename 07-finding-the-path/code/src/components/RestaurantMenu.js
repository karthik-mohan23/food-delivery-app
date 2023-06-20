import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.0260688&lng=76.3124753&restaurantId=" +
        resId
    );
    const json = await response.json();
    setRestaurantInfo(json.data);
  };

  if (restaurantInfo === null) return <Shimmer />;

  const {
    name,
    avgRatingString,
    costForTwoMessage,
    cuisines,
    totalRatingsString,
  } = restaurantInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log(
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards[0]
  );
  return (
    <div className="section">
      <h1>{name}</h1>
      <p>{avgRatingString}</p>
      <p>{costForTwoMessage}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{totalRatingsString}</p>
      <h2>Menu Items</h2>
      <h3>Recommended</h3>
      <div>
        {itemCards.map((item) => (
          <p>{item.card.info.name}</p>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
