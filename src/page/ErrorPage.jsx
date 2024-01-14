import React from 'react'
import erorImg from '../Assets/badhuhu.png'
import ButtonStyled from '../component/Elements/Button/Button'
import { NavLink } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <div className='eror'>
            <img src={erorImg} alt="" srcset="" />
            <NavLink to='/'><ButtonStyled>Back to Home</ButtonStyled></NavLink>
        </div>
    )
}
