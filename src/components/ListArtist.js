import React from 'react';
import Img from './ImgBox';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 992,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      speed: 500
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      speed: 500
    }
  }, {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      speed: 500
    }
  }]
};


const List = ({data}) => (
  <div>
      <Slider {...settings}>
        {data.list.map((ele, i) => (
          <div className="col">
            <Img
              key={i} {...ele} 
            />
          </div>
        ))}
      </Slider>
  </div>
);

export default List;