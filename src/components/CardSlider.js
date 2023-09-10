import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './../assets/styles/cardslider.css';

const CardSlider = ({cards}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.7,
    slidesToScroll: 1,
    arrow: false
  };

  return (
    <div className='slider-container'>
      <h2>Guest</h2>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className='card'>
            <img src={card.imgUrl} className='image' alt='guest'/>
            <p>{card.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}


export default CardSlider
