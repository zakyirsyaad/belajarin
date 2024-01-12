import React from 'react'
import AOS from 'aos';
import CardClass from '../Elements/Card/CardClass';
AOS.init();

export default function Popular() {
    return (
        <div className='popular' data-aos="zoom-in-up" data-aos-duration="300">
            <p className='popular-head'>Most popular classes in <span>Resume Writing</span></p>
            <div>
                <CardClass />
            </div>

        </div>
    )
}
