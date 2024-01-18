import React from 'react';
import Footer from '../component/Fragments/Footer';
import { useSelector } from 'react-redux';
import CarouselHome from '../component/Elements/Carousel/CarouselHome';
import { TypeAnimation } from 'react-type-animation';
import Navbar from '../component/Fragments/Navbar';
import GetAllClass from '../component/Elements/GetAllClass';


export default function Home() {
    const auth = useSelector(state => state.auth);

    const nama = localStorage.getItem("nama");


    let greetingMessage = "";

    if (auth.user) {
        greetingMessage = `How's it going, ${auth.user}?`;
    } else if (nama) {
        greetingMessage = `How's it going, ${nama}?`;
    } else {
        greetingMessage = "";
    }

    return (
        <div className='home'>
            <Navbar />
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed once, initially
                    greetingMessage,
                    1000,
                    `How's it going,`,
                    1000,
                ]}
                speed={50}
                repeat={Infinity}
                className='log-name'
            />
            <GetAllClass />
            <CarouselHome />
            <Footer />
        </div>
    );
}
