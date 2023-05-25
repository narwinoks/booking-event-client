import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const TestingPage = () => {
  const navigate = useNavigate();
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const activeIndexParam = searchParams.get("swiper");
    if (activeIndexParam) {
      setActiveIndex(parseInt(activeIndexParam));
    }
  }, [searchParams]);

  const handleSlideChange = () => {
    if (swiper !== null) {
      const newIndex = swiper.activeIndex;
      setActiveIndex(newIndex);
      searchParams.set("swiper", newIndex);
      navigate(`?${searchParams.toString()}`);
    }
  };

  const handleNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const handlePrevious = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <div>
      <Swiper onSwiper={setSwiper} onSlideChange={handleSlideChange} navigation>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>

      <div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>

      <div>Active Index: {activeIndex}</div>
    </div>
  );
};

export default TestingPage;
