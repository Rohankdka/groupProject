import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [newProduct, setNewProduct] = useState({
    productName: '',
    productDescription: '',
    productPrice: '',
    productStatus: '',
    productStockQty: '',
    productImage: null,
  });
  const [updatedProduct, setUpdatedProduct] = useState(null);
  const [newUser, setNewUser] = useState({
    userName: '',
    emailAddress: '',
    userPassword: '',
    userRole: '',
  });
  const [updatedUser, setUpdatedUser] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios.get('/api/products');
      console.log(response.data); // Debug response data
      setProducts(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Error fetching products', error);
      setError('Error fetching products');
    }
  }, []);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await axios.get('/api/users');
      console.log(response.data); // Debug response data
      setUsers(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Error fetching users', error);
      setError('Error fetching users');
    }
  }, []);

  useEffect(() => {
    fetchProducts();
    fetchUsers();
  }, [fetchProducts, fetchUsers]);

  const handleFileChange = (e, setter) => {
    const file = e.target.files[0];
    if (file) {
      setter((prevState) => ({ ...prevState, [e.target.name]: file }));
    }
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in newProduct) {
      formData.append(key, newProduct[key]);
    }
    try {
      await axios.post('/api/products', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      fetchProducts();
      setNewProduct({
        productName: '',
        productDescription: '',
        productPrice: '',
        productStatus: '',
        productStockQty: '',
        productImage: null,
      });
    } catch (error) {
      console.error('Error creating product', error);
      setError('Error creating product');
    }
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in updatedProduct) {
      formData.append(key, updatedProduct[key]);
    }
    try {
      await axios.put(`/api/products/${updatedProduct._id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      fetchProducts();
      setUpdatedProduct(null);
    } catch (error) {
      console.error('Error updating product', error);
      setError('Error updating product');
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`/api/products/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product', error);
      setError('Error deleting product');
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/users', newUser);
      fetchUsers();
      setNewUser({
        userName: '',
        emailAddress: '',
        userPassword: '',
        userRole: '',
      });
    } catch (error) {
      console.error('Error creating user', error);
      setError('Error creating user');
    }
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/users/${updatedUser._id}`, updatedUser);
      fetchUsers();
      setUpdatedUser(null);
    } catch (error) {
      console.error('Error updating user', error);
      setError('Error updating user');
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`/api/users/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user', error);
      setError('Error deleting user');
    }
  };

  const handleLogout = () => {
    // Clear user session or token here
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="p-4">
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Logout
      </button>
      <div className="flex mb-4">
        <button
          onClick={() => setActiveTab('products')}
          className={`py-2 px-4 mr-2 ${activeTab === 'products' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Products
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`py-2 px-4 ${activeTab === 'users' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Users
        </button>
      </div>

      {activeTab === 'products' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <ul className="list-none mb-4">
            {products.length > 0 ? (
              products.map((product) => (
                <li key={product._id} className="py-2 border-b border-gray-200">
                  <span className="text-lg">{product.productName}</span>
                  <button
                    className="ml-4 text-sm text-red-600 hover:text-red-900"
                    onClick={() => handleDeleteProduct(product._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="ml-4 text-sm text-blue-600 hover:text-blue-900"
                    onClick={() => setUpdatedProduct(product)}
                  >
                    Edit
                  </button>
                </li>
              ))
            ) : (
              <li>No products available.</li>
            )}
          </ul>

          <ProductForm
            product={newProduct}
            setProduct={setNewProduct}
            onSubmit={handleCreateProduct}
            isUpdating={false}
          />

          {updatedProduct && (
            <ProductForm
              product={updatedProduct}
              setProduct={setUpdatedProduct}
              onSubmit={handleUpdateProduct}
              isUpdating={true}
            />
          )}
        </div>
      )}

      {activeTab === 'users' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Users</h2>
          <ul className="list-none mb-4">
            {users.length > 0 ? (
              users.map((user) => (
                <li key={user._id} className="py-2 border-b border-gray-200">
                  <span className="text-lg">{user.userName}</span>
                  <button
                    className="ml-4 text-sm text-red-600 hover:text-red-900"
                    onClick={() => handleDeleteUser(user._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="ml-4 text-sm text-blue-600 hover:text-blue-900"
                    onClick={() => setUpdatedUser(user)}
                  >
                    Edit
                  </button>
                </li>
              ))
            ) : (
              <li>No users available.</li>
            )}
          </ul>

          <UserForm
            user={newUser}
            setUser={setNewUser}
            onSubmit={handleCreateUser}
            isUpdating={false}
          />

          {updatedUser && (
            <UserForm
              user={updatedUser}
              setUser={setUpdatedUser}
              onSubmit={handleUpdateUser}
              isUpdating={true}
            />
          )}
        </div>
      )}
    </div>
  );
};

// Separate Product Form Component
const ProductForm = ({ product, setProduct, onSubmit, isUpdating }) => (
  <form className="mb-4" onSubmit={onSubmit}>
    <input
      type="text"
      name="productName"
      value={product.productName}
      onChange={(e) => setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
      placeholder="Product Name"
      className="border p-2 mb-2 w-full"
      required
    />
    <textarea
      name="productDescription"
      value={product.productDescription}
      onChange={(e) => setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
      placeholder="Product Description"
      className="border p-2 mb-2 w-full"
      required
    />
    <input
      type="number"
      name="productPrice"
      value={product.productPrice}
      onChange={(e) => setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
      placeholder="Product Price"
      className="border p-2 mb-2 w-full"
      required
    />
    <input
      type="number"
      name="productStockQty"
      value={product.productStockQty}
      onChange={(e) => setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
      placeholder="Product Stock Quantity"
      className="border p-2 mb-2 w-full"
      required
    />
    <input
      type="file"
      name="productImage"
      onChange={(e) => handleFileChange(e, setProduct)}
      className="mb-2"
    />
    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
      {isUpdating ? 'Update Product' : 'Add Product'}
    </button>
  </form>
);

// Separate User Form Component
const UserForm = ({ user, setUser, onSubmit, isUpdating }) => (
  <form className="mb-4" onSubmit={onSubmit}>
    <input
      type="text"
      name="userName"
      value={user.userName}
      onChange={(e) => setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
      placeholder="User Name"
      className="border p-2 mb-2 w-full"
      required
    />
    <input
      type="email"
      name="emailAddress"
      value={user.emailAddress}
      onChange={(e) => setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
      placeholder="Email Address"
      className="border p-2 mb-2 w-full"
      required
    />
    <input
      type="password"
      name="userPassword"
      value={user.userPassword}
      onChange={(e) => setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
      placeholder="Password"
      className="border p-2 mb-2 w-full"
      required
    />
    <select
      name="userRole"
      value={user.userRole}
      onChange={(e) => setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
      className="border p-2 mb-2 w-full"
      required
    >
      <option value="">Select Role</option>
      <option value="admin">Admin</option>
      <option value="editor">Editor</option>
      <option value="viewer">Viewer</option>
    </select>
    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
      {isUpdating ? 'Update User' : 'Add User'}
    </button>
  </form>
);

export default AdminDashboard;
