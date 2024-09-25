import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCarousel = () => {
  const products = [
    { name: 'Nike Air Force 107 LV8', imgSrc: '/product01.jpg'  },
    { name: 'Oil Green and Olive Aura', imgSrc: '/product02.png'},
    { name: 'Nike Metcon 9 By You', imgSrc: '/product03.png' },
    { name: 'Nike Blazer Mid Pro Club', imgSrc: '/product04.png' },
    // Add more products as needed
  ];

  const settings = {
    dots: false, // Hide dots
    infinite: true, // Loop infinitely
    speed: 500, // Transition speed
    slidesToShow: 4, // Show 4 products at a time
    slidesToScroll: 1, // Scroll 1 product at a time
    autoplay: true, // Enable auto-play
    autoplaySpeed: 3000, // Auto-play every 3 seconds
    pauseOnHover: true, // Pause on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto my-8">
      <h2 className="text-xl font-bold md:mb-4 mb-2">You May Also Like</h2>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="p-4">
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src={product.imgSrc}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{product.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
