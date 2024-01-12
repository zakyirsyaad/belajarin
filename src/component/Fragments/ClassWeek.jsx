import React from 'react'
import CardClass from '../Elements/Card/CardClass'

export default function ClassWeek() {
    return (
        <div className='classweek' data-aos="zoom-in-up" data-aos-duration="300">
            <p className='popular-head'>Popular class in this week</p>
            <div className='popular-card'>
                <CardClass />
            </div>
        </div>
    )
}
