import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      Oops, there's nothing here. Let's go back home. <Link to="/">Home</Link>{" "}
    </div>
  );
};

export default NotFound;
