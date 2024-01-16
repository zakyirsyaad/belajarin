import React from 'react'
import DisplayNameMentor from '../../component/Elements/DisplayNameMentor';
import EarningDashboard from '../../component/Elements/EarningDashboard';
import GraphicEarningMentor from '../../component/Elements/GraphicEarningMentor';

export default function Dashboard() {
    return (
        <div className='display-1'>
            <div>
                <DisplayNameMentor />
                <EarningDashboard />
            </div>
            <div>
                <GraphicEarningMentor />
            </div>
        </div>
    )
}
