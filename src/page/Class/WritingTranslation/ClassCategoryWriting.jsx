import React from 'react'
import { NavLink } from 'react-router-dom'
import contentWriting from '../../../Assets/content-writing.png'
import careerWriting from '../../../Assets/career-writing.png'
import bussinesMarketing from '../../../Assets/bussinesMarketing.png'
import translation from '../../../Assets/translation.png'

function ClassCategory() {

    return (
        <div className='class-main'>
            <div className='class-box'>
                <img src={careerWriting} alt="" srcset="" />
                <p> Career Writing</p>
                <NavLink id='class-link' to='ResumeWriting'>Resume Writing</NavLink>
                <NavLink id='class-link'>Cover Letter</NavLink>
                <NavLink id='class-link'>Linkedin Profiles</NavLink>
                <NavLink id='class-link'>Job Description</NavLink>
            </div>
        </div>
    )
}

export default ClassCategory
