import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../views/CaterersList.scss";

function Card(props) {
  const { image, title, text, money, review, udustars } = props;
  return (
    <div className="slide_card">
      <div className="slide_card_img">
        <img src={image} alt="caterer" />
      </div>
      <div className="slide_card_info">
        <h2>{title}</h2>
        <p className="card_description">
          <span>{text}</span>
          <span>{money}</span>
        </p>
        <p>{review}</p>
        <img src={udustars} alt="Music image" />
      </div>
    </div>
  );
}

function CustomSlides() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    swipeToSlide: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <Card image={require('../media/chef.png')} title={'Mexican'} text={"Mexican"} money={"20$"} review={"Review"} udustars={require('../media/groupstars.png')} />
        <Card image={require('../media/chef.png')} title={'La Taqueria'} text={"Mexican-Colombianqueria"} money={"20$"} review={"Review"} udustars={require('../media/groupstars.png')} />
        <Card image={require('../media/chef.png')} title={'La Taqueria'} text={"Mexico-Tex-Mex "} money={"20$"} review={"Review"} udustars={require('../media/groupstars.png')} />
        <Card image={require('../media/chef.png')} title={'La Taqueria'} text={"Tex-Max Plaza"} money={"20$"} review={"Review"} udustars={require('../media/groupstars.png')} />
        <Card image={require('../media/chef.png')} title={'La Taqueria'} text={"Mexican "} money={"20$"} review={"Review"} udustars={require('../media/groupstars.png')} />
      </Slider>
      <p className="others">Other suppliers:</p>
      <Slider {...settings}>
        <Card image={require('../media/chef.png')} title={'Mexican'} text={"Mexican"} money={"20$"} review={"Review"} udustars={require('../media/groupstars.png')} />
        <Card image={require('../media/chef.png')} title={'La Taqueria'} text={"Mexican-Colombianqueria"} money={"20$"} review={"Review"} udustars={require('../media/groupstars.png')} />
        <Card image={require('../media/chef.png')} title={'La Taqueria'} text={"Mexico-Tex-Mex "} money={"20$"} review={"Review"} udustars={require('../media/groupstars.png')} />
        <Card image={require('../media/chef.png')} title={'La Taqueria'} text={"Tex-Max Plaza"} money={"20$"} review={"Review"} udustars={require('../media/groupstars.png')} />
        <Card image={require('../media/chef.png')} title={'La Taqueria'} text={"Mexican "} money={"20$"} review={"Review"} udustars={require('../media/groupstars.png')} />

      </Slider>
    </div>
  );
}

export default CustomSlides;
