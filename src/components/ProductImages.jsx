import { useState } from "react";

export default function ProductImages({ product }) {
  const images = [product.coverImage, ...product.images];
  const [activeImage, setActiveImage] = useState(0);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      productInCart.quantity++;
    }
    if (!productInCart) {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div className="md:sticky md:top-0 h-fit">
      <div className="h-[32rem] p-3 border flex gap-4">
        <div className="flex-col h-full w-24 py-0 gap-2">
          {images.map((image, index) => (
            <img
              key={index + image}
              src={image}
              alt="product"
              height={100}
              width={100}
              onMouseEnter={() => setActiveImage(index)}
              className={`w-20 h-24 object-cover cursor-pointer p-1 rounded-lg ${
                activeImage === index ? "border-2" : ""
              }`}
            />
          ))}
        </div>
        <div className="h-full w-full object-cover rounded-lg">
          <img
            src={images[activeImage]}
            alt="product"
            height={500}
            width={500}
            className="w-full h-full transition-all rounded-lg duration-300 object-cover cursor-pointer"
          />
        </div>
      </div>
      <div className="mt-4 w-full flex justify-start space-x-3">
        <button
          type="button"
          onClick={addToCart}
          className="w-1/2 bg-blue-600 border border-transparent rounded-md py-3 px-5 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700"
        >
          Add to cart
        </button>
        <button className="w-1/2 border border-gray-300 rounded-md py-3 px-5 flex items-center justify-center text-base font-medium text-gray-700 hover:bg-gray-50">
          Buy now
        </button>
      </div>
    </div>
  );
}
