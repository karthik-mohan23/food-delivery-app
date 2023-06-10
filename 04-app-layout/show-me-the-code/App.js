import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <header>
    <nav>
      <a href="/" className="logo">
        <h2>BiteWise</h2>
      </a>
      <div>
        <input
          className="search-bar"
          placeholder="Restaurant name"
          type="text"
        />
      </div>
      <ul className="nav-list">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </nav>
  </header>
);

const RestaurantData = [
  {
    resId: 20291162,
    name: "Eden Gardens Restaurant",
    image:
      "https://b.zmtcdn.com/data/pictures/2/20291162/4ecaf67421890d4c737e98b6df454cb1_o2_featured_v2.jpg",
    cuisine: ["Indian", "Chinese"],
    rating: "3.5",
  },
  {
    resId: 20040087,
    name: "Domino's Pizza",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/7/20040087/8318a0d945c57c8a40cc2b77bd4b0225_o2_featured_v2.jpg",
    cuisine: ["Italian", "Desserts"],
    rating: "4.0",
  },
  {
    resId: 19947643,
    name: "Kubaba Kuzhimanthi",
    image:
      "https://b.zmtcdn.com/data/pictures/3/19947643/915980c373b81fb75ab725d0d0c688e4_o2_featured_v2.jpg",
    cuisine: ["Arabian", "Lebanese"],
    rating: "4.1",
  },
  {
    resId: 18937067,
    name: "Oru Dosa Company",
    image:
      "https://b.zmtcdn.com/data/pictures/7/18937067/949aac7f48004503d95743e50d2e7b82_o2_featured_v2.jpg",
    cuisine: ["Kerala", "South Indian"],
    rating: "4.1",
  },
  {
    resId: 20234803,
    name: "Chicking",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/3/20234803/4e7ea47a8a66ca4648939e523ef76207_o2_featured_v2.jpg",
    cuisine: ["Fast Food"],
    rating: "3.6",
  },
  {
    resId: 19864171,
    name: "Karthika Hotel",
    image:
      "https://b.zmtcdn.com/data/pictures/1/19864171/9b521402849b8ad5371ee9898878a8a6_o2_featured_v2.jpg",
    cuisine: ["Kerala", "Chinese", "Biriyani"],
    rating: "3.7",
  },
];

const RestaurantCard = ({ name, image, cuisine, rating }) => {
  return (
    <div className="card">
      <img src={image} alt="restaurants" className="rest-img" />
      <h3 className="rest-name">{name}</h3>
      <h4 className="rest-cuisine">{cuisine.join()}</h4>
      {<p>{rating}</p>}
    </div>
  );
};

const RestaurantList = () =>
  RestaurantData.map((data) => {
    return <RestaurantCard {...data} key={data.resId} />;
  });

const Body = () => (
  <section className="section card-container">
    <RestaurantList />
  </section>
);
const Footer = () => (
  <footer>
    <div className="section footer">
      <h3>&copy; 2023 BiteWise. All Rights Reserved.</h3>
    </div>
  </footer>
);

const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
