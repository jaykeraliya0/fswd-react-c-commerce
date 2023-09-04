import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import {
  ShieldCheckIcon,
  TruckIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const slides = [
  {
    description: "Premium Quality Laptops",
    color: "from-black",
    bg: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1778&q=80",
    image: "/images/mck.png",
  },
  {
    description: "Exclusive Accessories",
    color: "from-rose-950",
    bg: "https://images.unsplash.com/photo-1566793474222-24d8909712af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    image: "/images/mck.png",
  },
  {
    description: "High end Computer Parts",
    color: "from-green-950",
    bg: "https://images.unsplash.com/photo-1601153211050-ae2e1fa428d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    image: "/images/mck.png",
  },
];

export default function Hero() {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        autoplay={{
          delay: 5000,
        }}
        className="relative h-[30rem]"
      >
        <button className="swiper-button-prev w-7 h-7 lg:h-14 lg:w-14 bg-white absolute top-[25%] lg:top-[50%] left-5 lg:left-20 rounded-full z-20 flex group">
          <ArrowLeftIcon className="h-5 w-5 lg:h-10 lg:w-10 text-gray-800 m-auto -mr-1 lg:-mr-2 group-hover:mr-0 transition-all duration-300" />
        </button>
        <button className="swiper-button-next w-7 h-7 lg:h-14 lg:w-14 bg-white absolute top-[25%] lg:top-[50%] right-5 lg:right-20 rounded-full z-20 flex group">
          <ArrowRightIcon className="h-5 w-5 lg:h-10 lg:w-10 text-gray-800 m-auto -ml-1 lg:-ml-2 group-hover:ml-0 transition-all duration-300" />
        </button>
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full flex px-14 md:px-20 lg:px-28 xl:px-48">
              <img
                src={slide.bg}
                alt=""
                className="absolute h-full w-full top-0 left-0 object-cover"
              />
              <div
                className={classNames(
                  slide.color,
                  "absolute h-full w-full top-0 left-0 bg-gradient-to-r to-transparent"
                )}
              />
              <div className="md:w-2/3 lg:w-1/2 z-10 flex mt-12 md:mt-24">
                <h1 className="text-4xl sm:text-5xl xl:text-7xl font-bold text-gray-200 mb-2 transition-all duration-300 capitalize">
                  {slide.description}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute z-10 bottom-0 right-0 rounded-t-3xl xl:rounded-tr-none xl:rounded-tl-[52px] border-t min-h-32 w-full xl:w-10/12 bg-white py-5 px-7 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-fit mx-auto">
          <div className="h-full flex flex-row lg:justify-center space-x-5 items-center px-10">
            <div className="h-14 w-14 bg-blue-400/30 p-3 rounded-xl text-blue-500">
              <TruckIcon className="h-8 w-8" />
            </div>
            <div>
              <h4 className="font-bold">Free Shipping</h4>
              <p className="text-gray-500 text-sm">On purchases over ₹499</p>
            </div>
          </div>
          <div className="h-full flex flex-row lg:justify-center space-x-5 items-center px-10">
            <div className="h-14 w-14 bg-blue-400/30 p-3 rounded-xl text-blue-500">
              <UserIcon className="h-8 w-8" />
            </div>
            <div>
              <h4 className="font-bold">99% Satisfied Customers</h4>
              <p className="text-gray-500 text-sm">
                Our clients&rsquo; opinions speak for themselves
              </p>
            </div>
          </div>
          <div className="h-full flex flex-row lg:justify-center space-x-5 items-center px-10">
            <div className="h-14 w-14 bg-blue-400/30 p-3 rounded-xl text-blue-500">
              <ShieldCheckIcon className="h-8 w-8" />
            </div>
            <div>
              <h4 className="font-bold">Originality Guaranteed</h4>
              <p className="text-gray-500 text-sm">
                07 days warranty for each product from our store
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
