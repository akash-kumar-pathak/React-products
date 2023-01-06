import { Link } from "react-router-dom";
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Product() {
  const params = useParams();
  const [product, setProduct] = useState([{ name: "", price: 0 }]);

  const getProductData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts${params.id}`
      );
      const data = await response.json();
      setProduct(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData();
  });

  return (
    <div className="card">
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <button>
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
}

export default Product;
