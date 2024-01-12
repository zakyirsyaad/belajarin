import React from 'react'
import { NavLink } from 'react-router-dom'

function ListClassWriting() {
    return (
        <div className='list-main'>
            <p className='header-list'>Career Writing</p>
            <ul>
                <li><NavLink id='list-link' to='/WritingTranslation/ResumeWriting' >Resume Writing</NavLink></li>
                <li><NavLink id='list-link' to=''>Cover Letters</NavLink></li>
                <li><NavLink id='list-link' to=''>Linkedin Profiles</NavLink></li>
                <li><NavLink id='list-link' to=''>Job Description</NavLink></li>
            </ul>
        </div>
    )
}

export default ListClassWriting
