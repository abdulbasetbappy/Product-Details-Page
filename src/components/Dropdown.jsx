import React, { useState } from "react";
import Slider from "react-slick";
import Review from "./Review";
import { FaChevronDown } from "react-icons/fa";


const reviewsData = [
  { name: "Helena", rating: 4.5, text: "Great shoes! Very comfortable and stylish.he sections will be displayed in a single row with space between them (logo on the left, links in the middle, and icons on the right)." },
  { name: "Plmbas Harper", rating: 5, text: "Amazing quality! Love the color and fit. you can easily add a smooth rotation transition. " },
  { name: "Saluman Tip", rating: 4, text: "Good overall, but the sizing is slightly off.Discover the best practices and techniques for mastering data fetching in Nuxt.js. Learn how to optimize performance and enhance user experience with efficient data handling" },
  { name: "Chakula Dim", rating: 3.5, text: "Decent product but can improve on durability.This implementation ensures that the card appears after 5000ms when the feedback is successful, and can also be manually closed by the user." }
];
// Shipping methods can be static or fetched from an API
const shippingMethods = [
  { method: "Local Delivery", details: '5 to 7 working days', cost: "$4.50", icon: "/bike-delivery.png" },
  { method: "Express Shipping", details: '2-3 business days', cost: "$15.00", icon: "/delivery-truck.png" },
  { method: "Curbside Pickup", details: "San Francisco, California, 94158, United States", cost: "Free", icon: "/free-shipping.png" }
];

const Dropdown = () => {
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);

  const reviewSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="my-2 mt-4 flex flex-col gap-4">
      {/* Reviews */}
      <div className="">
        <button
          className="w-full px-4 text-gray-700 py-2 border-b-2 border-gray-300"
          onClick={() => setIsReviewOpen(!isReviewOpen)}
        >
          <div className="flex justify-between items-center">
            <span className="font-semibold text-xl">Reviews</span>
            <FaChevronDown
              className={`text-gray-600 transform transition-transform duration-300 ${isReviewOpen ? "rotate-180" : "rotate-0"
                }`}
            />
          </div>

          {/* Dropdown Content */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${isReviewOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <div className="pt-3">
              <Slider {...reviewSettings}>
                {reviewsData.map((review, index) => (
                  <div key={index}>
                    <div className="flex flex-row">
                      <img
                        className="w-12 h-12 rounded-full"
                        src="https://via.placeholder.com/50"
                        alt=""
                      />
                      <div className="ml-3">
                        <h2>{review.name}</h2>
                        <Review rating={review.rating} reviewCount="" />
                      </div>
                    </div>
                    <p className="text-gray-600 mt-2 text-left">{review.text}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </button>
      </div>

      {/* Shipping  */}
      <div>
        <button
          className="w-full px-4 text-gray-600 py-2 border-b-2 border-gray-300"
          onClick={() => setIsShippingOpen(!isShippingOpen)}
        >
          <div className="flex justify-between items-center">
            <span className="font-semibold text-xl">Shipping Methods</span>
            <FaChevronDown
              className={`transform transition-transform duration-300 ${isShippingOpen ? "rotate-180" : "rotate-0"
                }`}
            />
          </div>
          {/* Shipping Content */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${isShippingOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <div className="mt-3 md:mt-4">
              {shippingMethods.map((method, index) => (
                <div key={index} className="mb-2">
                  <label className="flex items-center justify-normal p-2 border rounded cursor-pointer hover:bg-gray-100">
                    <input type="radio" name="shipping" className="mr-3 accent-gray-600" checked={method.checked} />
                    <img src={method.icon} alt=" pic" className=" h-6 w-6 md:h-8 md:w-8  mr-2 rounded-lg" />
                    <div className="flex-1">
                      <h2 className="text-base text-start md:text-lg text-gray-600 font-semibold ">{method.method}</h2>
                      <p className="text-xs text-start md:text-sm text-gray-500 font-medium -mt-1">{method.details}</p>
                    </div>
                    <div className="font-medium text-gray-800">{method.cost}</div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </button>

      </div>
    </div>
  );
};

export default Dropdown;