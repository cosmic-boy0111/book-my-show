import React from "react";
import Slider from "react-slick";

// components
import Poster from "../Poster/poster.component";

export const Premier = () => {
  const settings = {
    infinity: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    InitialSlide: 0,
    responsive: [
      {
        breakpoints: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoints: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          InitialSlide: 1,
        },
      },
      {
        breakpoints: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const PremierImages = [
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137324-gnxpvdxfdd-portrait.jpg",
      title: "The Courier (2021)",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00302298-xfzdlzgahv-portrait.jpg",
      alt: "zack",
      title: "Four Kids And It",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
      alt: "zack",
      title: "Zack Snyder`s Justice League",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00146001-yyqryxfmzr-portrait.jpg",
      alt: "zack",
      title: "One For All",
      subtitle: "Spanish",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309901-xdtfjggscz-portrait.jpg",
      alt: "zack",
      title: "Superintelligence",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00304964-fpwxfxtzkn-portrait.jpg",
      alt: "zack",
      title: "Rewind",
      subtitle: "Kannada",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00310573-huhqmumlyw-portrait.jpg",
      alt: "zack",
      title: "Justice Society: World War II",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00138775-axluretccm-portrait.jpg",
      alt: "zack",
      title: "Scumbag",
      subtitle: "Slovak",
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {PremierImages.map((image) => (
          <Poster {...image} />
        ))}
      </Slider>
    </>
  );
};

export default Premier;