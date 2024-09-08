import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Filter products based on the filter value
    if (filter === '') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(product =>
          product.name.toLowerCase().includes(filter.toLowerCase())
        )
      );
    }
  }, [filter, products]);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <input
          type="text"
          placeholder="Search products..."
          value={filter}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length ? (
            filteredProducts.map(product => (
              <div key={product.id} className="bg-white p-4 rounded shadow-md">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-blue-500 font-bold">${product.price}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
