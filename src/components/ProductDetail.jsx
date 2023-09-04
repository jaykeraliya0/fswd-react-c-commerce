import { StarIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetail({ product }) {
  const productRating =
    product.reviews.reduce((sum, review) => sum + review.rating, 0) /
    product.reviews.length;

  return (
    <div className="xl:col-span-2 border p-3">
      <h1 className="text-2xl font-medium xl:w-3/4">{product.name}</h1>
      <div className="mt-4">
        <h4 className="sr-only">Reviews</h4>
        <div className="flex items-center">
          <p className="text-sm text-gray-700">
            {productRating}
            <span className="sr-only"> out of 5 stars</span>
          </p>
          <div className="ml-1 flex items-center">
            {[0, 1, 2, 3, 4].map((rating, i) => (
              <StarIcon
                key={i}
                className={classNames(
                  productRating > rating ? "text-yellow-400" : "text-gray-200",
                  "h-5 w-5 flex-shrink-0"
                )}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
      <h3 className="text-4xl font-bold mt-3">
        {product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "INR",
          maximumFractionDigits: 0,
        })}
      </h3>

      <hr className="mt-4" />
      <div className="mt-4">
        <table>
          <tbody>
            {Object.keys(product.details).map((key) => (
              <tr key={key}>
                <td className="text-sm font-medium text-gray-900 pr-4 capitalize">
                  {key}
                </td>
                <td className="text-sm text-gray-500">
                  {product.details[key]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr className="mt-4" />
      <div className="mt-4">
        <h4 className="text-sm font-bold text-gray-900">About</h4>
        <div className="mt-1">
          <ul className="ml-5 list-disc">
            {product.about.map((about) => (
              <li key={about}>{about}</li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="mt-4 max-w-2xl">
        <h4 className="text-sm font-bold text-gray-900">Description</h4>
        <div className="mt-1 prose prose-sm text-gray-800">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
