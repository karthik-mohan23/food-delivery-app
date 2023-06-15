const RestaurantCard = ({ name, image, rating, cuisine }) => {
  return (
    <div className="card">
      <img src={image} alt="restaurants" className="rest-img" />
      <h2 className="rest-name">{name}</h2>
      <h4 className="rest-cuisine">{cuisine.join(", ")}</h4>
      <p>{rating}</p>
    </div>
  );
};
export default RestaurantCard;
