import React from 'react'
import logo from '../Assets/logo-belajarin.png'
import { Link, NavLink, Outlet } from 'react-router-dom'
import signMember from '../Assets/sign-member.png'

export default function SignMail() {
    return (
        <div className='sign'>
            <div>
                <Link to='/'><img className='logo-sign' src={logo} alt="Logo" /></Link>
                <p className='welcome-sign'>Welcome,<br /> members!👋🏻</p>
                <div>
                    <NavLink id='outlet-sign' to='RegisterMember'>Register</NavLink>
                    <NavLink id='outlet-sign' to='LoginMember'> Login</NavLink>
                </div>
                <main>
                    <Outlet />
                </main>
            </div>
            <div>
                <img className='img-mentor' src={signMember} alt="FOTO MENTOR" srcset="" />
            </div>
        </div>
    )
}
