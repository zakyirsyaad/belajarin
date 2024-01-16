import React from 'react'
import iconEarn from '../../Assets/Icon Frame.png'

export default function EarningDashboard() {
    return (
        <div className='earn-main'>
            <img src={iconEarn} />
            <div className='text-earn'>
                <p className='label-total'>Your Total Earnings</p>
                <p className='total-earn'>Rp. XXX.XXX,-</p>
            </div>
        </div>
    )
}
