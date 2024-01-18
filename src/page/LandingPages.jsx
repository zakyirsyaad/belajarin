import React from 'react'
import CarouselSlide from '../component/Elements/Carousel/CarouselSlide'
import CarouselTestimoni from '../component/Elements/Carousel/CarouselTestimoni'
import Footer from '../component/Fragments/Footer'
import Navbar from '../component/Fragments/Navbar'
import { Card } from 'antd'
import { NavLink } from 'react-router-dom'
import imgCard1 from '../Assets/img-card-1-web.webp'
import imgCard2 from '../Assets/img-card-2-web.webp'
import imgCard3 from '../Assets/img-card-3-web.webp'
import imgCard4 from '../Assets/img-card-4-web.webp'
import imgCard5 from '../Assets/img-card-5-web.webp'
import imgCard6 from '../Assets/img-card-6-web.webp'
import imgCard7 from '../Assets/img-card-7-web.webp'
import imgCard8 from '../Assets/img-card-8-webp.webp'



export default function LandingPages() {
    const gridStyle = {
        width: '25%',
        textAlign: 'center',
        backgroundColor: '#FFF',
    };
    return (
        <div className='home'>
            <Navbar />
            <CarouselSlide />
            <Card className='card-home' title={<p className='header-card-home'>You need it, we've got it</p>}>

                <Card.Grid style={gridStyle}>
                    <NavLink to='/ProgrammingTech' className='link-card-home'>
                        <img src={imgCard1} alt="" />
                        Programming & Tech
                    </NavLink>
                </Card.Grid>

                <Card.Grid style={gridStyle}>
                    <NavLink to='/Data' className='link-card-home'>
                        <img src={imgCard2} alt="" />
                        Data
                    </NavLink>
                </Card.Grid>

                <Card.Grid style={gridStyle}>
                    <NavLink to='/Business' className='link-card-home'>
                        <img src={imgCard3} alt="" />
                        Business
                    </NavLink>
                </Card.Grid>

                <Card.Grid style={gridStyle}>
                    <NavLink to='/GraphicDesign' className='link-card-home'>
                        <img src={imgCard4} alt="" />
                        Graphic Design
                    </NavLink>
                </Card.Grid>

                <Card.Grid style={gridStyle}>
                    <NavLink to='/DigitalMarketing' className='link-card-home'>
                        <img src={imgCard5} alt="" />
                        Digital Marketing
                    </NavLink>
                </Card.Grid>

                <Card.Grid style={gridStyle}>
                    <NavLink to='/WritingTranslation' className='link-card-home'>
                        <img src={imgCard6} alt="" />
                        Writing Translation
                    </NavLink>
                </Card.Grid>

                <Card.Grid style={gridStyle}>
                    <NavLink to='/VideoAnimation' className='link-card-home'>
                        <img src={imgCard7} alt="" />
                        Video & Animation
                    </NavLink>
                </Card.Grid>

                <Card.Grid style={gridStyle}>
                    <NavLink to='/MusicAudio' className='link-card-home'>
                        <img src={imgCard8} alt="" />
                        Music & Audio
                    </NavLink>
                </Card.Grid>
            </Card>
            <CarouselTestimoni />
            <Footer />
        </div >
    )
}
