import { useState, useEffect } from "react";

const Carousel = () => {
  const carouselItems = [
    { id: 1, title: "Gym", image: "https://i.pinimg.com/1200x/76/c7/6a/76c76a7a19d36104ad013fe959f5f8ef.jpg" },
    { id: 2, title: "Leg Section", image: "https://i.pinimg.com/1200x/de/74/2d/de742dcedb698dbbb2584861cd4a5f32.jpg" },
    { id: 3, title: "Cardio Section", image: "https://i.pinimg.com/1200x/3e/32/cc/3e32cc7454f92b29ca3a544dd34c7c42.jpg" },
    { id: 4, title: "Arm Section", image: "https://i.pinimg.com/1200x/56/66/a2/5666a2299c1ca5ae5dfe112982144386.jpg" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === carouselItems.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-change every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-[90%] h-screen overflow-hidden m-3">
      {/* Slides */}
      <div className="relative w-full  h-[90%]">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-8">
              <h2 className="text-4xl font-bold">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <button
        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-4 hover:bg-gray-500 transition duration-300"
        onClick={() =>
          setCurrentSlide((currentSlide - 1 + carouselItems.length) % carouselItems.length)
        }
      >
        &#9664;
      </button>
      <button
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-4 hover:bg-gray-500 transition duration-300"
        onClick={nextSlide}
      >
        &#9654;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
