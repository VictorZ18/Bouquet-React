import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../CateresList.css";

  function Card(props) {
    const { image, title, text, money, review, udustars } = props;
    return (
        <div className="slide_card">
          <div className="Slide_card_img">
            <img src={image} alt="Music image"/> 
          </div>
          <h2>{title}</h2>
          <p className="card_description">
            <span>{text}</span>
            <span>{money}</span>
          </p>
          <p>{review}</p>
          <img src={udustars} alt="Music image"/> 
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
          <Card image={require('../suplierimg/chef.png')} title={'Mexican'} text = {"Mexican"} money = {"20$"} review = {"Review"} udustars={require('../suplierimg/groupstars.png')}/>
          <Card image={require('../suplierimg/chef.png')} title={'La Taqueria'} text = {"Mexican-Colombianqueria"} money = {"20$"} review = {"Review"} udustars={require('../suplierimg/groupstars.png')}/>
          <Card image={require('../suplierimg/chef.png')} title={'La Taqueria'} text = {"Mexico-Tex-Mex "} money = {"20$"} review = {"Review"} udustars={require('../suplierimg/groupstars.png')}/>
          <Card image={require('../suplierimg/chef.png')} title={'La Taqueria'} text = {"Tex-Max Plaza"} money = {"20$"} review = {"Review"} udustars={require('../suplierimg/groupstars.png')}/>
          <Card image={require('../suplierimg/chef.png')} title={'La Taqueria'} text = {"Mexican "} money = {"20$"} review = {"Review"} udustars={require('../suplierimg/groupstars.png')}/>
        </Slider>
        <p className="info">Other suppliers:</p>
        <Slider {...settings}>
        <Card image={require('../suplierimg/chef.png')} title={'Mexican'} text = {"Mexican"} money = {"20$"} review = {"Review"} udustars={require('../suplierimg/groupstars.png')}/>
          <Card image={require('../suplierimg/chef.png')} title={'La Taqueria'} text = {"Mexican-Colombianqueria"} money = {"20$"} review = {"Review"} udustars={require('../suplierimg/groupstars.png')}/>
          <Card image={require('../suplierimg/chef.png')} title={'La Taqueria'} text = {"Mexico-Tex-Mex "} money = {"20$"} review = {"Review"} udustars={require('../suplierimg/groupstars.png')}/>
          <Card image={require('../suplierimg/chef.png')} title={'La Taqueria'} text = {"Tex-Max Plaza"} money = {"20$"} review = {"Review"} udustars={require('../suplierimg/groupstars.png')}/>
          <Card image={require('../suplierimg/chef.png')} title={'La Taqueria'} text = {"Mexican "} money = {"20$"} review = {"Review"} udustars={require('../suplierimg/groupstars.png')}/>
          
          </Slider>      
      </div>
    );
}

export default CustomSlides;
