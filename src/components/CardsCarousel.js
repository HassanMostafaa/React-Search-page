import React from "react";

import Slider from "react-slick";

// CAROUSEL css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardsCarousel = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 440,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data = [
    { img: "./images/react.png", title: "React" },
    { img: "./images/angular.png", title: "Angular" },
    { img: "./images/html.png", title: "HTML5" },
    { img: "./images/css.png", title: "CSS3" },
    { img: "./images/ruby.png", title: "Ruby" },
    { img: "./images/c++.png", title: "C++" },
  ];

  return (
    <div className="cards">
      <p>
        FIND MORE ABOUT YOUR FAVOURITE PROGRAMMING/MARK UP LANGUAGE ON{" "}
        <a
          href="https://www.youtube.com"
          style={{ color: "#DB516F", textDecoration: "underline" }}
        >
          YOUTUBE
        </a>{" "}
        JUST <strong>DOUBLE CLICK</strong> ANY CARD
      </p>
      <br />

      <Slider {...settings}>
        {data.map((card, index) => (
          <div
            className="card"
            key={index}
            onDoubleClick={() => {
              window.open(
                `https://www.youtube.com/results?search_query=${card.title}`
              );
            }}
          >
            <img src={card.img} alt={`${card.title} Pic`} width="40px" />
            <h3>{card.title}</h3>
            <p>Courses and Teachers</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardsCarousel;
