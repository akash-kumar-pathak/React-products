import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Error from "./Components/Error";
import Products from "./Components/Products";
import Product from "./Components/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
