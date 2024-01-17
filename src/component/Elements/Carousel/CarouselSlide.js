import React from 'react'
import { Carousel } from 'antd';
import banner1 from '../../../Assets/banner1.png'
import banner2 from '../../../Assets/banner2.png'
import banner3 from '../../../Assets/banner3.png'
import banner4 from '../../../Assets/banner4.png'

function CarouselSlide() {
    const contentStyle = {
        width: '100%',
        height: 'auto',
        color: '#fff',
        lineHeight: '160px',
        margin: '50px 0px 50px 0px',
        padding: '0px 150px'
    };
    const carouselSettings = {
        autoplay: true,
        dots: { className: 'custom-dot' }
    };

    return (
        <Carousel {...carouselSettings}>
            <div>
                <img style={contentStyle} src={banner1} />
            </div>
            <div>
                <img style={contentStyle} src={banner2} />
            </div>
            <div>
                <img style={contentStyle} src={banner3} />
            </div>
            <div>
                <img style={contentStyle} src={banner4} />
            </div>
        </Carousel>
    )
}

export default CarouselSlide
