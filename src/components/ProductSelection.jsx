import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const sizeCharts = {
    US: ['6.5', '7.0', '7.5', '8.0', '8.5', '9.0', '9.5', '10.0', '10.5', '11.0', '11.5', '12.0', '12.5', '13.0', '14.0'],
    EU: ['39', '40', '40.5', '41', '42', '43', '44', '44.5', '45', '46', '46.5', '47', '48', '49'],
    CM: ['24.5', '25.0', '25.5', '26.0', '26.5', '27.0', '27.5', '28.0', '28.5', '29.0', '29.5', '30.0', '30.5', '31.0'],
};

const ProductComponent = () => {
    const [selectedCountry, setSelectedCountry] = useState('US');
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const price = '1400,00';
    const discountInfo = "Every SPEAKOUT Custonmer can get 15% Discount for Membership with minimum $1000 shopping.";

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        setSelectedSize(null); // Reset size when country changes
    };

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const handleQuantityChange = (type) => {
        if (type === 'increment') {
            setQuantity((prev) => prev + 1);
        } else if (type === 'decrement' && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const handleSubmit = (type) => {
        const productData = {
            selectedCountry,
            selectedSize,
            quantity,
            price,
            action: type, // "buy" or "cart"
        };

        console.log(productData);
        // You can send productData to your API here
    };

    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold">Size Chart</h3>

            {/* Country Selection */}
            <div className='bg-gray-200 inline-block mb-4 mt-2 p-1 rounded-full'>
                <div className="flex gap-2">
                    {['US', 'EU', 'CM'].map((country) => (
                        <button
                            key={country}
                            className={`px-4 py-2 rounded-full font-semibold
          ${selectedCountry === country ? 'bg-white text-black shadow-md' : 'text-gray-800 '}
          transition-colors duration-300 ease-in-out
        `}
                            onClick={() => handleCountryChange(country)}
                        >
                            {country}
                        </button>
                    ))}
                </div>
            </div>


            {/* Size Selection */}
            <div className="flex flex-wrap gap-2 mb-4">
                {sizeCharts[selectedCountry].map((size) => (
                    <button
                        key={size}
                        className={`w-16 h-10 flex items-center justify-center rounded-full border 
              ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-300 bg-white text-black'}
            `}
                        onClick={() => handleSizeClick(size)}
                    >
                        {size}
                    </button>
                ))}
            </div>

            {/* Quantity Selection */}
            <h4 className="text-lg font-semibold mb-2">Item Quantity</h4>
            <div className='mb-4 inline-block bg-gray-200 rounded-full px-1 py-1'>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => handleQuantityChange('decrement')}
                        disabled={quantity === 1}
                        className="px-5 shadow-md py-3 rounded-full border border-white bg-white hover:bg-black hover:text-white hover:border-black transition-colors duration-500 ease-in-out"
                    >
                              <AiOutlineMinus size={16} />
                    </button>
                    <span className="px-3 py-1">{quantity}</span>
                    <button
                        onClick={() => handleQuantityChange('increment')}
                        className="px-5 shadow-md py-3 rounded-full border border-white bg-white hover:bg-black hover:text-white hover:border-black transition-colors duration-500 ease-in-out"
                    >
                        <AiOutlinePlus size={16} />
                    </button>
                </div>
            </div>

            {/* Price */}
            <h3 className="text-xl font-semibold mb-4">IDR. {price}</h3>

            {/* Discount Info */}
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <strong className="block text-gray-700 font-semibold mb-1">15% Discount For Membership</strong>
                <p className="text-sm font-medium text-gray-500">{discountInfo}</p>
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
                <button
                    className="flex-1 py-3 bg-black text-white hover:bg-white hover:text-black border border-black font-semibold rounded-md transition-colors duration-500 ease-in-out"
                    onClick={() => handleSubmit('buy')}
                >
                    Buy Now
                </button>
                <button
                    className="flex-1 py-3 border border-black text-black font-semibold rounded-md hover:bg-black hover:text-white transition-colors duration-500 ease-in-out"
                    onClick={() => handleSubmit('cart')}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductComponent;
