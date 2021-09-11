import React from 'react'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import SliderItem from './SliderItem'

export default function ImageSlider() {

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

const Carousel = styled(Slider)`
    margin-top: 20px;

    &>button{
        opacity: 0;
        height : 100%;
        width: 5vw;
        z-index: 1;
        &:hover {
            opacity: 1;
            transition: opacity .2s ease 0s;
        }
    }

    ul li button{
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before{
        color: white;
    }

    .slick-list{
        overflow: initial;
    }

    .slick-prev{
        left: -75px;
        right: -75px
    }

    .slick-next{
        right: -75px
    }
`
