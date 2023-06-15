const RestaurantCard = ({ name, image, cuisine, rating }) => {
  return (
    <div className="card">
      <img src={image} alt="restaurants" className="rest-img" />
      <h3 className="rest-name">{name}</h3>
      <h4 className="rest-cuisine">{cuisine.join(", ")}</h4>
      {<p>{rating} ⭐</p>}
    </div>
  );
};
export default RestaurantCard;
