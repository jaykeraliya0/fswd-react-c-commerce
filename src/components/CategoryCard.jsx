import { Link } from "react-router-dom";

export default function CategoryCard({ id, title, image }) {
  return (
    <div className="group relative border-r border-b border-t border-gray-200 p-4 sm:p-6">
      <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
        <img
          src={image}
          alt={image}
          width={600}
          height={600}
          className="h-52 sm:h-72 w-full object-cover bg-gray-200"
        />
      </div>
      <div className="pt-5 text-center">
        <h3 className="text-sm font-medium text-gray-900">
          <Link to="/products">
            <span aria-hidden="true" className="absolute inset-0" />
            {title}
          </Link>
        </h3>
      </div>
    </div>
  );
}
