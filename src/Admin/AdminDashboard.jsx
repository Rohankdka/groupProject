import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [newProduct, setNewProduct] = useState({
    productName: '',
    productDescription: '',
    productPrice: 0,
    productStatus: '',
    productStockQty: 0,
    productImage: ''
  });
  const [updatedProduct, setUpdatedProduct] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('http://localhost:3000/api/admin')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleCreateProduct = () => {
    axios.post('http://localhost:3000/api/products', newProduct)
      .then(response => {
        setProducts([...products, response.data]);
        setNewProduct({
          productName: '',
          productDescription: '',
          productPrice: 0,
          productStatus: '',
          productStockQty: 0,
          productImage: ''
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleUpdateProduct = (id) => {
    axios.patch(`http://localhost:3000/api/products/${id}`, updatedProduct)
      .then(response => {
        const updatedProducts = products.map(product => product._id === id ? response.data : product);
        setProducts(updatedProducts);
        setUpdatedProduct({});
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDeleteProduct = (id) => {
    axios.delete(`http://localhost:3000/api/products/${id}`)
      .then(response => {
        const updatedProducts = products.filter(product => product._id !== id);
        setProducts(updatedProducts);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDeleteUser = (id) => {
    axios.delete(`http://localhost:3000/api/users/${id}`)
      .then(response => {
        const updatedUsers = users.filter(user => user._id !== id);
        setUsers(updatedUsers);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <ul className="list-none mb-4">
            {products.map(product => (
              <li key={product._id} className="py-2 border-b border-gray-200">
                <span className="text-lg">{product.productName}</span>
                <button className="ml-4 text-sm text-red-600 hover:text-red-900" onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                <button className="ml-4 text-sm text-blue-600 hover:text-blue-900" onClick={() => setUpdatedProduct(product)}>Edit</button>
              </li>
            ))}
          </ul>
          <form className="mb-4">
            <label className="block mb-2">
              <span className="text-lg">Product Name</span>
              <input type="text" value={newProduct.productName} onChange={(e) => setNewProduct({ ...newProduct, productName: e.target.value })} className="w-full p-2 pl-10 text-sm text-gray-700" />
            </label>
            <label className="block mb-2">
              <span className="text-lg">Product Description</span>
              <input type="text" value={newProduct.productDescription} onChange={(e) => setNewProduct({ ...newProduct, productDescription: e.target.value })} className="w-full p-2 pl-10 text-sm text-gray-700" />
            </label>
            <label className="block mb-2">
              <span className="text-lg">Product Price</span>
              <input type="number" value={newProduct.productPrice} onChange={(e) => setNewProduct({ ...newProduct, productPrice: e.target.value })} className="w-full p-2 pl-10 text-sm text-gray-700" />
            </label>
            <label className="block mb-2">
              <span className="text-lg">Product Status</span>
              <select value={newProduct.productStatus} onChange={(e) => setNewProduct({ ...newProduct, productStatus: e.target.value })} className="w-full p-2 pl-10 text-sm text-gray-700">
                <option value="">Select Status</option>
                <option value="available">Available</option>
                <option value="out_of_stock">Out of Stock</option>
              </select>
            </label>
            <label className="block mb-2">
              <span className="text-lg">Product Stock Qty</span>
              <input type="number" value={newProduct.productStockQty} onChange={(e) => setNewProduct({ ...newProduct, productStockQty: e.target.value })} className="w-full p-2 pl-10 text-sm text-gray-700" />
            </label>
            <label className="block mb-2">
              <span className="text-lg">Product Image</span>
              <input type="text" value={newProduct.productImage} onChange={(e) => setNewProduct({ ...newProduct, productImage: e.target.value })} className="w-full p-2 pl-10 text-sm text-gray-700" />
            </label>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" onClick={handleCreateProduct}>Create Product</button>
          </form>

          {updatedProduct && (
            <form className="mb-4">
              <label className="block mb-2">
                <span className="text-lg">Product Name</span>
                <input type="text" value={updatedProduct.productName} onChange={(e) => setUpdatedProduct({ ...updatedProduct, productName: e.target.value })} className="w-full p-2 pl-10 text-sm text-gray-700" />
              </label>
              <label className="block mb-2">
                <span className="text-lg">Product Description</span>
                <input type="text" value={updatedProduct.productDescription} onChange={(e) => setUpdatedProduct({ ...updatedProduct, productDescription: e.target.value })} className="w-full p-2 pl-10 text-sm text-gray-700" />
              </label>
              <label className="block mb-2">
                <span className="text-lg">Product Price</span>
                <input type="number" value={updatedProduct.productPrice} onChange={(e) => setUpdatedProduct({ ...updatedProduct, productPrice: e.target.value })} className="w-full p-2 pl-10 text-sm text-gray-700" />
              </label>
              <label className="block mb-2">
                <span className="text-lg">Product Status</span>
                <select value={updatedProduct.productStatus} onChange={(e) => setUpdatedProduct({ ...updatedProduct, productStatus: e.target.value })} className="w-full p-2 pl-10 text-sm text-gray-700">
                  <option value="">Select Status</option>
                  <option value="available">Available</option>
                  <option value="out_of_stock">Out of Stock</option>
                </select>
              </label>
              <label className="block mb-2">
                <span className="text-lg">Product Stock Qty</span>
                <input type="number" value={updatedProduct.productStockQty} onChange={(e) => setUpdatedProduct({ ...updatedProduct, productStockQty: e.target.value })} className="w-full p-2 pl-10 text-sm text-gray-700" />
              </label>
              <label className="block mb-2">
                <span className="text-lg">Product Image</span>
                <input type="text" value={updatedProduct.productImage} onChange={(e) => setUpdatedProduct({ ...updatedProduct, productImage: e.target.value })} className="w-full p-2 pl-10 text-sm text-gray-700" />
              </label>
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleUpdateProduct(updatedProduct._id)}>Update Product</button>
            </form>
          )}
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-2xl font-bold mb-4">Users</h2>
          <ul className="list-none mb-4">
            {users.map(user => (
              <li key={user._id} className="py-2 border-b border-gray-200">
                <span className="text-lg">{user.name}</span>
                <button className="ml-4 text-sm text-red-600 hover:text-red-900" onClick={() => handleDeleteUser(user._id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;