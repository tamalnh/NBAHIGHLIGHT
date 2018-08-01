import React from 'react'
import Slider from 'react-slick'; 
// import { baseUrl } from "./config";

//import slider css

const Featured = (props) => {
// console.log('====================================');
// console.log(props);
// console.log('====================================');


const generateSlides = ({slides}) => {
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1300
    }
    if(slides){
        return(
            <Slider {...settings}>
                {slides.map((item) => {
                    // console.log(item.cover)
                    return(
                        <div key={item.id}>
                            <div style={{backgroundImage: `url(/images/covers/${item.cover})`}} className="slider-item">
                                <div className="caption">
                                    <h4 >{item.topic}</h4>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        )
    }
}

    return(
        <div className="slider">
            {generateSlides(props)}
        </div>
    )
}

export default Featured;