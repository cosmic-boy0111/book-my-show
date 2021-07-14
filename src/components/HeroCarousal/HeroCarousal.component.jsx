import React from "react";
import HeroSlider from "react-slick";

// Compoenent
import { NextArrow, PrevArrow } from "./Arrows.component";

const HeroCarousal = () => {
  const settingsLG = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "300px",
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  
  const images = [
    "https://in.bmscdn.com/promotions/cms/creatives/1625077257492_dearishqafestivalofkisseykahaniyaanpoetry_webshowcase_1280x500.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1625685026902_joboltahaiwohihotahaifeatharshgujral_webshowcase_1280x500.jpg",
    "https://1.bp.blogspot.com/-I1c3zRA9yms/XZJplbAJ0pI/AAAAAAAAAKQ/byrn2IrrWYoZZy06r9V5BI2Yrd8XKQPHACLcBGAsYHQ/s1600/October201911-20.jpg",
    "https://www.fabpromocodes.in/uploads/alltagimage/Bookmyshow%20offers.jpg",
    "https://pbmobi.payback.in/content/dam/payback/home/Responsive/partner/BookMyShow_767x412_ICICI_Feb20.jpg/jcr:content/renditions/original",
  ];


  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-56 md:h-80 py-3 ">
              <img src={image} alt="testing" className="w-full h-full" />
            </div>
          ))}
        </HeroSlider>
      </div>

      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((image) => (
            <div className="w-full h-96 px-2 py-3">
              <img
                src={image}
                alt="testing"
                className="w-full h-full rounded-md"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousal;

  















