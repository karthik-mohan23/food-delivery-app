const RestaurantCard = ({ strMeal, strMealThumb, strCategory, strArea }) => {
  return (
    <div className="card">
      <img src={strMealThumb} alt="restaurants" className="rest-img" />
      <h2 className="rest-name">{strMeal}</h2>
      <h4 className="rest-cuisine">{strArea}</h4>
      <p>{strCategory}</p>
    </div>
  );
};
export default RestaurantCard;
