// src/App.js
import "./App.css";
import React, { useState, useEffect } from 'react';
import { fetchData } from './data/data';

const App = () => {
  const [data, setData] = useState({});
  const [products, setProducts] = useState([]);
  // const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const sortedProducts = await fetchData();
        setData(sortedProducts);
        setProducts(Object.values(data.products));
      } catch (error) {
        // Handle error if needed
        console.log("Error fetching values");
      }
    };

    fetchProducts();
  }, [data, products]);

  console.log(data);

  return (
    <div>
      <h1>Product List</h1>
      <table id="customers">
        <tr>
          <th>Subcategory</th>
          <th>Title</th>
          <th>Price</th>
          <th>Popularity</th>
        </tr>
        {products.map(product =>
          <tr>
            <td>{product.subcategory}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.popularity}</td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default App;