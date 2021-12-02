import React, {useEffect} from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Carousel = ({ data, title }) => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div className="my-container Carouse">
      <p className="fs-32" style={{ fontWeight: 700 }}>
        {title}
      </p>
      <OwlCarousel
        className="slider-items owl-carousel Carouse__item_wrap"
        {...options}
      >
        {data.map((item, i) => (
          <div className="carousel__item" key={i} >
            <img src={item.img} style={{backgroundColor: "#f5f5f5"}}/>
            <div className="item__box">
              <p className="fs-22" style={{ fontWeight: 700 }}>{item.title}</p>   
              <p className="fs-16 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Carousel;
