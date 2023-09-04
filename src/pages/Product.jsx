import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import ProductImages from "../components/ProductImages";
import data from "../data/products.json";
import ReviewSection from "../components/ReviewSection";

export default function Product() {
  const { id } = useParams();
  const product = data.find((product) => product.id === id);

  return (
    <main>
      <div className="relative min-h-screen max-w-7xl grid md:grid-cols-2 xl:grid-cols-3 xl:mx-auto gap-5 my-16 mx-7">
        <ProductImages images={[product.coverImage, ...product.images]} />
        <ProductDetail product={product} />
      </div>
      <ReviewSection featured={product.reviews} />
    </main>
  );
}
