/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
const makecarousel = () => {
  const slides = [
    {
      url: 'https://static.vecteezy.com/system/resources/thumbnails/001/447/041/large/cloud-computing-service-isometric-landing-page-vector.jpg',
    },
    {
      url: 'https://static.vecteezy.com/system/resources/previews/000/083/352/non_2x/free-vector-polygonal-cloud-computing-concept.jpg',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full h-full relative group ">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-300"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-black cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={10} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-black cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={10} />
      </div>
    </div>
  );
};

export default makecarousel;
