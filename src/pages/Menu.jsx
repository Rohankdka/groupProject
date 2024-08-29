import React, { useState } from 'react';

const Menu = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'All' },
    { id: 2, name: 'Breakfast' },
    { id: 3, name: 'Lunch' },
    { id: 4, name: 'Dinner' },
  ]);

  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      title: 'Buttermilk Pancakes',
      category: 'Breakfast',
      photo: 'https://example.com/pancakes.jpg',
      description: 'Fluffy buttermilk pancakes served with fresh berries and whipped cream.',
      price: 15.99,
    },
    {
      id: 2,
      title: 'Grilled Chicken Sandwich',
      category: 'Lunch',
      photo: 'https://example.com/chicken-sandwich.jpg',
      description: 'Juicy grilled chicken breast served on a toasted bun with lettuce, tomato, and mayo.',
      price: 12.99,
    },
    {
      id: 3,
      title: 'Steak Frites',
      category: 'Dinner',
      photo: 'https://example.com/steak-frites.jpg',
      description: 'Tender grilled steak served with crispy fries and a side of garlic aioli.',
      price: 25.99,
    },
    // Add more menu items here...
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredMenuItems = menuItems.filter((item) => {
    if (selectedCategory === 'All') {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  });

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-full ${
              selectedCategory === category.name ? 'bg-gray-300' : ''
            }`}
            onClick={() => handleCategoryChange(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMenuItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={item.photo} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-lg font-bold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-lg font-bold">${item.price}</p>
            <button className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-full">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;