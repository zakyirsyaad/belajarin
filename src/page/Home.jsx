import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/authSlice';
import Footer from '../component/Fragments/Footer';
import { useSelector } from 'react-redux';
import Popular from '../component/Fragments/Popular';
import Recomendation from '../component/Fragments/Recomendation';
import ClassWeek from '../component/Fragments/ClassWeek';
import CarouselHome from '../component/Elements/Carousel/CarouselHome';
import { TypeAnimation } from 'react-type-animation';
import Navbar from '../component/Fragments/Navbar';


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
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className='log-name'
                style={{
                    marginTop: '100px'
                }}
            />
            <Popular />
            <Recomendation />
            <ClassWeek />
            <CarouselHome />
            <Footer />
        </div>
    );
}
