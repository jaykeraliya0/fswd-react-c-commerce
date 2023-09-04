import CategoryCard from "./CategoryCard";

const categories = [
  {
    id: 1,
    title: "Laptops",
    image:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
  },
  {
    id: 2,
    title: "Accessories",
    image:
      "https://images.unsplash.com/photo-1566793474285-2decf0fc182a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 3,
    title: "Computer Parts",
    image:
      "https://images.unsplash.com/photo-1602837385569-08ac19ec83af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1852&q=80",
  },
  {
    id: 4,
    title: "Peripherals",
    image:
      "https://images.unsplash.com/photo-1656071830624-06aa347f99a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
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
