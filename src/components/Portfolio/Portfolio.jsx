import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Meal from "../../img/Meal.png";
import Expenditure from "../../img/Expenditure.png";
import store from "../../img/store.jpg";
import storeapi from "../../img/store-api.png";
import demoStore from "../../img/demoStore.webp";
import ContextShopping from "../../img/shoppingCart.webp";
import productItem from "../../img/product-item.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
        <a href="https://abhayrai8299.github.io/meal_order/">  <img src={Meal} alt="" height={220} /></a>
        </SwiperSlide>
        <SwiperSlide>
         <a href="https://abhayrai8299.github.io/Expendituretracker/"> <img src={Expenditure} alt="" height={220}  /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://github.com/abhayrai8299/product_item">  <img src={productItem} alt="" height={220} /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://github.com/abhayrai8299/Shopping-cart">  <img src={store} alt="" height={220} /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://github.com/abhayrai8299/Store-api">  <img src={storeapi} alt="" height={220} /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://github.com/abhayrai8299/Shopping-Cart-Context">  <img src={ContextShopping} alt="" height={220} /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://github.com/abhayrai8299/Shopping-cart">  <img src={demoStore} alt="" height={220} /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
