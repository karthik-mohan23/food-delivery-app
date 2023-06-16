import ShimmerLayout from "./ShimmerLayout";

const Shimmer = () => {
  return (
    <div className="section card-container">
      {Array(10)
        .fill("")
        .map((e, index) => {
          return <ShimmerLayout key={index} />;
        })}
    </div>
  );
};
export default Shimmer;
