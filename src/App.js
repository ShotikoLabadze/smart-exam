import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import "./App.css";

function App() {
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories").then(function (res) {
      setCategory(res.data);
    });
  }, []);

  const submitHandler = () => {
    axios
      .get(`https://dummyjson.com/products/category/${data}`)
      .then(function (response) {
        setProduct(response.data.products);
      });
  };

  return (
    <div className="App">
      <div className="select">
        <select onChange={(e) => setData(e.target.value)}>
          {category.map((post) => (
            <option key={post} value={post}>
              {post}
            </option>
          ))}
        </select>
        <Button click={submitHandler} />
      </div>

      <div className="main">
        <br />
        {product.map((e, index) => (
          <Card
            key={index}
            price={e.price}
            img={e.images[1]}
            brand={e.brand}
          ></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
