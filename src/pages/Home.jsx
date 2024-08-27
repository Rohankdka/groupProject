import React from 'react';
import Features from '../components/Features'; // Adjust the path as necessary

const Home = () => {
  return (
    <div className="p-8">
      <div 
        className="flex items-center justify-center h-[70vh] bg-cover bg-center bg-no-repeat rounded-lg"
        style={{ backgroundImage: `url('/Home.jpg')` }} // Ensure the path to your image is correct
      >
        <div className="p-8 rounded-lg text-center max-w-lg bg-white bg-opacity-80">
          <h1 className="text-3xl font-extrabold mb-4 text-gray-800 drop-shadow-md">
            Order Your Favourite Food Here
          </h1>
          <p className="text-md mb-4 text-gray-700 drop-shadow-sm">
            Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise, one delicious meal at a time.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-full shadow-lg">
            view More
          </button>
        </div>
      </div>

      {/* Features section */}
      <Features />
    </div>
  );
};

export default Home;
