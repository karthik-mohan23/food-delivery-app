const RestaurantCard = (props) => {
  return (
    <div className="card">
      <img
        className="rest-img"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          props.data.cloudinaryImageId
        }
        alt="restaurants"
      />
      <h2 className="rest-name">{props.data.name}</h2>
      <p className="rest-cuisine">{props.data.cuisines.join(", ")}</p>
      <p>{props.data.avgRating} ★</p>
    </div>
  );
};
export default RestaurantCard;
