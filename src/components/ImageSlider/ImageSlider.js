import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {SliderItem} from './SliderItem/SliderItem'
import { Carousel } from './ImageSlider.style';

export const ImageSlider = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <Carousel {...settings} >
            <SliderItem src="/images/slider-badag.jpg" />
            <SliderItem src="/images/slider-badging.jpg" />
            <SliderItem src="/images/slider-scale.jpg" />
            <SliderItem src="/images/slider-scales.jpg" />
        </Carousel>
    )
}