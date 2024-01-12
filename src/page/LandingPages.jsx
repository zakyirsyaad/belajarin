import React from 'react'
import CarouselSlide from '../component/Elements/Carousel/CarouselSlide'
import Popular from '../component/Fragments/Popular'
import CarouselTestimoni from '../component/Elements/Carousel/CarouselTestimoni'
import Footer from '../component/Fragments/Footer'
import Navbar from '../component/Fragments/Navbar'

export default function LandingPages() {
    return (
        <div className='home'>
            <Navbar />
            <CarouselSlide />
            <Popular />
            <CarouselTestimoni />
            <Footer />
        </div>
    )
}
