import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.0260688&lng=76.3124753&restaurantId=480622&submitAction=ENTER"
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
      <div>
        {itemCards.map((item) => {
          return (
            <div key={item.card.info.id}>
              <h4>{item.card.info.name}</h4>
              {/* <img
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                  imageId
                }
                alt=""
              /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantMenu;
