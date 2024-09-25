import React from 'react'
import ProductGallery from './ProductGallery'
import Review from "./Review";
import ProductSelection from './ProductSelection';
import Dropdown from './Dropdown';

function Hero() {
  const productName = "Nike Air Force 1 '07";
  const categories = ["Running Shoes", "Casual Sneakers", "Limited Edition"];
  const productDescription =
    "Classic and comfortable, you'll want to wear these AF-1s time after time. Smooth suede and a plush collar give these kicks a premium feel, while the gum sole adds a retro look.";
  const rating = 4.5; // Example rating
  const reviewCount = "2.5K"; // Example review count
  return (
    <div className='pb-6 max-w-6xl m-auto'>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-6'>
        {/* Product Gallery */}
        <div className='col-span-1'>
          <ProductGallery />
        </div>
        {/* Product Details */}
        <div className='col-span-1 p-6 pl-0'>
          <div className="">
            {/* Breadcrumb */}
            <div className="text-sm font-medium text-gray-500">Nike / Running Shoes</div>

            {/* Product Name */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-1">{productName}</h1>

            {/* Rating and Reviews */}
            <Review rating={rating} reviewCount={reviewCount} />

            {/* Categories */}
            <div className="flex gap-1 md:gap-3 mt-2">
              {categories.map((category, index) => (
                <span
                  key={index}
                  className="px-2 md:px-3 py-1 border border-gray-300 rounded-xl md:rounded-full text-xs mad:text-sm text-gray-600"
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Product Description */}
            <div className="mt-4">
              <h2 className="text-lg font-semibold">Product Description</h2>
              <p className="text-gray-600 mt-1">{productDescription}</p>
            </div>
          </div>
          <div>
            <ProductSelection />
          </div>
          <div>
            <Dropdown />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero