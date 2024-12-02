import React from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
function CategoryPage({ name, title, price, rating, images }) {
  const navigate = useNavigate();

  const handleCardClick = (image, title, price, rating) => {
    navigate('/product-details', {
      state: { image, title, price, rating },
    });
  };

  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-center mb-4">{name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 cursor-pointer"
              onClick={() =>
                handleCardClick(image, title, price, rating)
              }
            >
              <img
                src={image}
                alt={`${name} ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-2">{title}</p>
                <p className="text-sm text-gray-600 mb-2">{price}</p>
                <p className="text-sm text-gray-600 mb-2">{rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CategoryPage;

