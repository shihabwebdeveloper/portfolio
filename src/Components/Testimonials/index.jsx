import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import "./slick-dots.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/testimonials?populate=*"
        );

        if (response.data.data[0]?.attributes.testimonials) {
          setReviews(response.data.data[0].attributes.testimonials);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    }

    fetchTestimonials();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="bg-background py-20 mt-1">
      <h1 className="font-montserrat font-bold text-4xl uppercase text-center mb-6">
        Our Client Say
      </h1>
      <Slider {...settings} ref={sliderRef}>
        {reviews.map((item, index) => (
          <div key={index} className="testimonial-slide">
            <div className="flex flex-col justify-center items-center relative">
              <div className="">
                <img
                  className="mt-20"
                  src="../../images/Ellipse 14.png"
                  alt={`Client ${index}`}
                />
              </div>
              <button onClick={prevSlide}>
                <BsArrowLeftCircle className="absolute top-2/4 right-3/4 text-3xl bg-secondary text-white rounded-full" />
              </button>
              <button onClick={nextSlide}>
                <BsArrowRightCircle className="absolute top-2/4 left-3/4 text-3xl bg-secondary text-white rounded-full" />
              </button>
              <h2 className="font-poppins font-bold text-lg mt-6">
                {item.Client_name}
              </h2>
              <p className="font-poppins font-normal text-base text-center w-[700px] mt-3">
                {item.Client_review}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
