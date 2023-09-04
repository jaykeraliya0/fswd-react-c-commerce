import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetail({ product }) {
  const [selectedQuantity, setSelectedQuantity] = useState(product.quantity[0]);

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
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={productRating}
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
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold text-gray-900">Quantity</h4>
        </div>

        <RadioGroup
          value={selectedQuantity}
          onChange={setSelectedQuantity}
          className="mt-2"
        >
          <RadioGroup.Label className="sr-only">
            {" "}
            Choose a quantity{" "}
          </RadioGroup.Label>
          <div className="grid grid-cols-5 gap-2 max-w-lg">
            {product.quantity.map((q) => (
              <RadioGroup.Option
                key={q.name}
                value={q}
                className={({ active, checked }) =>
                  classNames(
                    q.inStock
                      ? "cursor-pointer focus:outline-none"
                      : "opacity-25 cursor-not-allowed",
                    active ? "ring-2 ring-offset-2 ring-blue-500" : "",
                    checked
                      ? "bg-blue-600 border-transparent text-white hover:bg-blue-700"
                      : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                    "border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1"
                  )
                }
                disabled={!q.inStock}
              >
                <RadioGroup.Label as="span">
                  {q.name < 1 ? q.name * 1000 : q.name}
                  &nbsp;
                  {q.name < 1 ? "mL" : "L"}
                </RadioGroup.Label>
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
      <hr className="mt-4" />
      <div className="mt-4">
        <table>
          <tbody>
            {Object.keys(product.details).map((key) => (
              <tr key={key}>
                <td className="text-sm font-medium text-gray-900 pr-4">
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
