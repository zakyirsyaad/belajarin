import React from 'react'
import { NavLink } from 'react-router-dom'

function FormMentor() {
    return (
        <div className='btn-sign-main'>
            <NavLink to='SignCommunityMentor'>
                <button className='btn-sign'>
                    Community Mentor
                </button>
            </NavLink>

            <NavLink to=''>
                <button className='btn-sign'>
                    Mentor
                </button>
            </NavLink>
            <p className='note-mentor'>
                Community mentors are mentors who come from communities affiliated with Belajarin. If you are from an affiliated community, you must provide proof in the form of a community account ID.
            </p>
        </div>
    )
}

export default FormMentor
