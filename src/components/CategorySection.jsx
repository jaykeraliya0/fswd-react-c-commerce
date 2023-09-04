import CategoryCard from "./CategoryCard";

const categories = [
  {
    id: "1",
    title: "Hand Wash",
    description: "Foam, Gel, Liquid, Refill & more",
    image: "/images/category/hand-wash.jpg",
  },
  {
    id: "2",
    title: "Surface Cleaner",
    description: "Disinfectant, Spray, Wipes & more",
    image: "/images/category/super-clean.jpg",
  },
  {
    id: "3",
    title: "Laundry Detergent",
    description: "Powder, Liquid, Pods, Refill & more",
    image: "/images/category/power-fresh.webp",
  },
  {
    id: "4",
    title: "Mosquito Repellent",
    description: "Coil, Liquid, Spray, Refill & more",
    image: "/images/category/spray.jpg",
  },
];

export default function CategorySection() {
  return (
    <div className="bg-white my-20">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 px-8">
        <h1 className="text-3xl font-bold mb-7 transition-all duration-300 capitalize text-blue-950">
          Shop by Category
        </h1>
        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category, i) => (
            <CategoryCard
              key={i}
              id={category.id}
              title={category.title}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
