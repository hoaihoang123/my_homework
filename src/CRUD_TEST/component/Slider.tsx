import Slider from "react-slick";
import React from "react";

const itemsSlider = [
  {
    title: "Welcome to Dashboard",
    content: "This is the first slide with some introduction content",
    bgColor: "bg-blue-100",
  },
  {
    title: "Key Features",
    content: "Explore our amazing features and functionality",
    bgColor: "bg-green-100",
  },
  {
    title: "Latest Updates",
    content: "Check out our newest features and improvements",
    bgColor: "bg-yellow-100",
  },
];

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
  };

  return (
    <div className="slider-container w-full mb-8">
      <Slider {...settings} className="slider">
        {itemsSlider.map((item, index) => (
          <div
            key={index}
            className={`flex justify-center items-center slide-item ${item.bgColor} p-6 rounded-lg shadow-md h-96 w-full`}
          >
            <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
              <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-700 text-lg">{item.content}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
