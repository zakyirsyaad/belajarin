import React from 'react'
import CardClass from '../Elements/Card/CardClass'

export default function Recomendation() {
    return (
        <div className='recommendation' data-aos="zoom-in-up" data-aos-duration="300">
            <p className='popular-head'>Classes you may like</p>
            <div className='popular-card'>
                <CardClass />
            </div>
        </div>
    )
}
