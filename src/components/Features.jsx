import React from 'react';

const Features = () => {
  return (
    <section className="py-16 bg-gray-100" id="features">
      <div className="flex justify-center mb-12">
        <h1 className="text-center text-4xl font-bold border-b-4 border-green-500 pb-2 inline-block">
          Our <span className="text-green-500">Features</span>
        </h1>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-lg mx-auto">
        <div className="p-8 bg-white text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src="features1.jpg" alt="Best Food" className="mx-auto mb-6 h-60" />
          <h3 className="text-2xl font-semibold mb-4">Best Food</h3>
          <p className="text-green-500 mb-6">
            Enjoy our meticulously crafted dishes, made with the freshest ingredients, bringing you an unforgettable dining experience. Savor the flavors that tantalize your taste buds and elevate your culinary journey.
          </p>
        </div>

        <div className="p-8 bg-white text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src="freedelivery.png" alt="Free Delivery" className="mx-auto mb-6 h-60" />
          <h3 className="text-2xl font-semibold mb-4">Free Delivery</h3>
          <p className="text-green-500 mb-6">
            We deliver your favorite meals right to your doorstep, ensuring you enjoy the convenience of dining at home without any extra cost. Our quick and reliable delivery service is designed to keep your food fresh and delicious.
          </p>
        </div>

        <div className="p-8 bg-white text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src="payment.png" alt="Easy Payments" className="mx-auto mb-6 h-60" />
          <h3 className="text-2xl font-semibold mb-4">Easy Payments</h3>
          <p className="text-green-500 mb-6">
            Experience hassle-free payments with multiple options tailored to your convenience. Whether it's online payments or cash on delivery, we ensure your transactions are smooth and secure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
