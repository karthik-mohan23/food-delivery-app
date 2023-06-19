import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.0260688&lng=76.3124753&restaurantId=480622&submitAction=ENTER"
    );
    const json = await response.json();
    console.log(json);
  };
  return (
    <div className="section">
      <h1>Restaurant name</h1>
      <p>Menu</p>
      <ul>
        <li>Indian</li>
        <li>Chinese</li>
        <li>Arabian</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
