import ProductCard from "./ProductCard";
import data from "../data/products.json";

export default function FeaturedProducts() {
  const products = data.slice(0, 4);

  return (
    <div className="bg-white my-10">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 px-8">
        <h1 className="text-3xl font-bold mb-7 transition-all duration-300 capitalize text-blue-950">
          Bestselling Products
        </h1>
        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
