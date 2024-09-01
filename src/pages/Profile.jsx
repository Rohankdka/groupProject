import React, { useState, useEffect } from 'react';
import OrderHistory from './OrderHistory';

function Profile() {
  const [user, setUser] = useState({
    name: 'John Doe',
    profilePicture: 'https://example.com/profile-picture.jpg',
    reactions: [
      { id: 1, type: 'like', count: 10 },
      { id: 2, type: 'love', count: 5 },
      { id: 3, type: 'wow', count: 2 },
    ],
  });

  const [orders, setOrders] = useState([
    { id: 1, date: '2022-01-01', total: 100.00, status: 'delivered' },
    { id: 2, date: '2022-01-15', total: 50.00, status: 'shipped' },
    { id: 3, date: '2022-02-01', total: 200.00, status: 'pending' },
  ]);

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img src={user.profilePicture} alt={user.name} className="w-24 h-24 rounded-full mr-4" />
        <h2 className="text-2xl font-bold">{user.name}</h2>
      </div>
      <div className="flex justify-between mb-4">
        {user.reactions.map((reaction) => (
          <div key={reaction.id} className="flex items-center mr-4">
            <span className={`text-2xl ${reaction.type === 'like' ? 'text-blue-500' : reaction.type === 'love' ? 'text-red-500' : 'text-yellow-500'}`}>
              {reaction.type === 'like' && <i className="fas fa-thumbs-up" />}
              {reaction.type === 'love' && <i className="fas fa-heart" />}
              {reaction.type === 'wow' && <i className="fas fa-surprised" />}
            </span>
            <span className="text-lg ml-2">{reaction.count}</span>
          </div>
        ))}
      </div>
      <h3 className="text-xl font-bold mb-4">Order History</h3>
      <OrderHistory orders={orders} />
    </div>
  );
}

export default Profile;