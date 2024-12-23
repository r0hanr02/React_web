import { useState, useEffect } from "react";

const Carousel = () => {
  const carouselItems = [
    { id: 1, title: "Agent Batman", image: "https://i.pinimg.com/1200x/e0/3d/84/e03d849ef1359fa4f8cca713c6da213d.jpg" },
    { id: 2, title: "Agent Tangiro", image: "https://i.pinimg.com/1200x/ed/e2/07/ede207095a48f0b2ccc60fe9916fbb4e.jpg" },
    { id: 3, title: "Agent Thorfinn", image: "https://i.pinimg.com/1200x/25/f5/0b/25f50b6306707e7ac7d0814267529117.jpg" },
    { id: 4, title: "Agent Colossal Titan", image: "https://i.pinimg.com/1200x/a6/73/b0/a673b08450d3fa4330b1f9489475d3a9.jpg" },
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
