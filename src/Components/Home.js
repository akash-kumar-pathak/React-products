import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      Welcome to our website.
      <button>
        <Link to="/products">Products Page</Link>
      </button>
    </>
  );
}

export default Home;
