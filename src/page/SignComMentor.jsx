import React from 'react'
import logo from '../Assets/logo-belajarin.png'
import { Link, NavLink, Outlet } from 'react-router-dom'
import signMentor from '../Assets/sign-mentor.png'

export default function SignComMentor() {
    return (
        <div className='sign'>
            <div>
                <Link to='/'><img className='logo-sign' src={logo} alt="Logo" /></Link>
                <p className='welcome-sign'>Welcome,<br /> community mentors!👋🏻</p>
                <div>
                    <NavLink id='outlet-sign' to='RegisterCommunityMentor'>Register</NavLink>
                    <NavLink id='outlet-sign' to='LoginCommunityMentor'> Login</NavLink>
                </div>
                <main>
                    <Outlet />
                </main>
            </div>
            <div>
                <img className='img-mentor' src={signMentor} alt="FOTO MENTOR" srcset="" />
            </div>
        </div>
    )
}
