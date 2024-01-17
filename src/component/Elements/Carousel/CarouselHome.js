import React from 'react'
import { Carousel } from 'antd';
import bannerHome from '../../../Assets/banner-home.png'

function CarouselHome() {
    const contentStyle = {
        width: '100%',
        height: 'auto',
        color: '#fff',
        lineHeight: '160px',
        padding: '0px 150px',
    };
    const carouselSettings = {
        autoplay: true,
        dots: { className: 'home-dot' }
    };

    return (
        <Carousel {...carouselSettings}>
            <div>
                <img style={contentStyle} src={bannerHome} />
            </div>
            <div>
                <img style={contentStyle} src={bannerHome} />
            </div>
            <div>
                <img style={contentStyle} src={bannerHome} />
            </div>
            <div>
                <img style={contentStyle} src={bannerHome} />
            </div>
        </Carousel>
    )
}

export default CarouselHome
