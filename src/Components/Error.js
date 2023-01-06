import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      Error 404! Page Not Found
      <Link to="/">Home Page</Link>
    </div>
  );
}

export default Error;
