import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops. No page found</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};
export default Error;
