import React, { useState, useEffect } from "react";
import { getBannerList } from "../../Services/services";
import images from "../../server/banners/index.get.json";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./Carousel.css";

const ImageCarousel = () => {
  //const API_URL=process.env.API_URL || 'http://localhost:5000';
  const [bannerList, setBannerList] = useState([]);
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);
  const getBanners = async () => {
    const result = await getBannerList();
    setBannerList(result);
  };

  useEffect(() => {
    getBanners();
  }, []);

  return (
    <section className="carousel-section custom-shadow">
      <div
        className="carousel-holder"
        style={{ transform: `translateX(${current}%)` }}
      >
        {bannerList?.map((item, index) => {
          return (
            <div
              key={item.id}
              className={index === current ? "slide active" : "slide"}
            >
              {index === current && (
                <img src={item.bannerImageUrl} alt={item.bannerImageAlt} />
              )}
            </div>
          );
        })}
      </div>
      <div className="arrow">
        <FaArrowAltCircleLeft className="left__arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right__arrow" onClick={nextSlide} />
      </div>
      <div className="carousel-dots">
        {bannerList.map((item, index) => (
          <button
            key={item.id}
            className={
              index === current
                ? "carousel-dots-slider dots-active"
                : "carousel-dots-slider"
            }
          ></button>
        ))}
      </div>
    </section>
  );
};

export default ImageCarousel;
