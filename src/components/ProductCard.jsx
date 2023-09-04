"use client";
import { Fragment, useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductCard({ product }) {
  const [open, setOpen] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(product.quantity[0]);

  const productRating =
    product.reviews.reduce((sum, review) => sum + review.rating, 0) /
    product.reviews.length;

  return (
    <>
      <div
        key={product.id}
        className="group relative border-r border-b border-t border-gray-200 p-4 sm:p-6"
      >
        <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
          <img
            src={product.coverImage}
            alt={product.name}
            width={600}
            height={600}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="pt-10 pb-4 text-center">
          <h3 className="text-sm font-medium text-gray-900">
            <button onClick={() => setOpen(true)}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </button>
          </h3>
          <div className="mt-3 flex flex-col items-center">
            <p className="sr-only">
              {productRating}
              out of 5 stars
            </p>
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating, i) => (
                <StarIcon
                  key={i}
                  className={classNames(
                    productRating > rating
                      ? "text-yellow-400"
                      : "text-gray-200",
                    "flex-shrink-0 h-5 w-5"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="mt-1 text-sm text-gray-500">
              {product.reviews.length} reviews
            </p>
          </div>
          <p className="mt-4 text-base font-medium text-gray-900">
            {product.price.toLocaleString("en-US", {
              style: "currency",
              currency: "INR",
            })}
          </p>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="hidden md:inline-block md:h-screen md:align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                enterTo="opacity-100 translate-y-0 md:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              >
                <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                  <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <button
                      type="button"
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:items-center lg:gap-x-8">
                      <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                        <img
                          src={product.coverImage}
                          alt={product.name}
                          width={600}
                          height={600}
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="sm:col-span-8 lg:col-span-7">
                        <h2 className="text-xl font-medium text-gray-900 sm:pr-12">
                          {product.name}
                        </h2>

                        <section
                          aria-labelledby="information-heading"
                          className="mt-1"
                        >
                          <h3 id="information-heading" className="sr-only">
                            Product information
                          </h3>

                          <p className="font-medium text-gray-900">
                            {product.price.toLocaleString("en-US", {
                              style: "currency",
                              currency: "INR",
                            })}
                          </p>

                          {/* Reviews */}
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
                                    key={rating}
                                    className={classNames(
                                      productRating > rating
                                        ? "text-yellow-400"
                                        : "text-gray-200",
                                      "h-5 w-5 flex-shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </section>

                        <section aria-labelledby="information" className="mt-8">
                          <h3 id="information" className="sr-only">
                            Description
                          </h3>
                          <p className="text-base text-gray-700">
                            {product.description.slice(0, 200)}...
                          </p>
                        </section>

                        <section
                          aria-labelledby="options-heading"
                          className="mt-8"
                        >
                          <h3 id="options-heading" className="sr-only">
                            Product options
                          </h3>

                          <form>
                            <div className="mt-8">
                              <div className="flex items-center justify-between">
                                <h4 className="text-sm font-medium text-gray-900">
                                  Quantity
                                </h4>
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
                                <div className="grid grid-cols-7 gap-2">
                                  {product.quantity.map((q) => (
                                    <RadioGroup.Option
                                      key={q.name}
                                      value={q}
                                      className={({ active, checked }) =>
                                        classNames(
                                          q.inStock
                                            ? "cursor-pointer focus:outline-none"
                                            : "opacity-25 cursor-not-allowed",
                                          active
                                            ? "ring-2 ring-offset-2 ring-blue-500"
                                            : "",
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
                            <button
                              type="submit"
                              className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 py-3 px-8 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                              Add to cart
                            </button>

                            <p className="absolute top-4 left-4 text-center sm:static sm:mt-8">
                              <Link
                                to={`/product/${product.id}`}
                                className="font-medium text-blue-600 hover:text-blue-500"
                              >
                                View full details
                              </Link>
                            </p>
                          </form>
                        </section>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
