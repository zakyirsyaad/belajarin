import React from 'react'
import { Button, Carousel } from 'antd';
import testi1 from '../../../Assets/testi-1'

function CarouselTestimoni() {
    const contentStyle = {
        height: '617px',
        color: '#fff',
        margin: '0px 250px',

    };
    const carouselSettings = {
        autoplay: true,
        dots: { className: 'custom-dot' }
    };

    return (
        <Carousel {...carouselSettings} >
            <div>
                <div style={contentStyle} className='bg-testi'>
                    <div>
                        <p className='say-testi'>“The mentor can always be relied on to answer my confusion at any time”</p>
                        <p className='name-testi'>Kirana, 21 year-old</p>
                        <Button className='testi-btn' type='primary'>JOIN NOW</Button>
                    </div>
                    <img src={testi1} alt='foto-testi-1' />
                </div>
            </div>
            <div>
                <div style={contentStyle} className='bg-testi'>
                    <div>
                        <p className='say-testi'>“The mentor can always be relied on to answer my confusion at any time”</p>
                        <p className='name-testi'>Kirana, 21 year-old</p>
                        <Button className='testi-btn' type='primary'>JOIN NOW</Button>
                    </div>
                    <img src={testi1} alt='foto-testi-1' />
                </div>
            </div>
            <div>
                <div style={contentStyle} className='bg-testi'>
                    <div>
                        <p className='say-testi'>“The mentor can always be relied on to answer my confusion at any time”</p>
                        <p className='name-testi'>Kirana, 21 year-old</p>
                        <Button className='testi-btn' type='primary'>JOIN NOW</Button>
                    </div>
                    <img src={testi1} alt='foto-testi-1' />
                </div>
            </div>
            <div>
                <div style={contentStyle} className='bg-testi'>
                    <div>
                        <p className='say-testi'>“The mentor can always be relied on to answer my confusion at any time”</p>
                        <p className='name-testi'>Kirana, 21 year-old</p>
                        <Button className='testi-btn' type='primary'>JOIN NOW</Button>
                    </div>
                    <img src={testi1} alt='foto-testi-1' />
                </div>
            </div>
        </Carousel>
    )
}

export default CarouselTestimoni
