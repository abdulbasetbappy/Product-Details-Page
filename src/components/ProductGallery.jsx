import React, { useState } from "react";

const ProductGallery = () => {
  // List of product images
  const productImages = [
    "/NIKE01.png",
    "/NIKE02.png",
    "/NIKE03.png",
    "/NIKE04.png",
  ];

  // State for the main image
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  return (
    <div className="p-3 md:p-6 md:pr-0">
      {/* Main Image */}
      <div className="mb-4">
        <img
          src={selectedImage}
          alt="Selected Product"
          className="w-full rounded-xl h-auto md:h-[450px] object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-1 md:gap-4 justify-center">
        {productImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedImage(image)}
            className={`w-full rounded-md h-auto object-cover cursor-pointer ${
              selectedImage === image ? "border-2 border-gray-800" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
