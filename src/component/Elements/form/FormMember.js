import React, { useEffect, useState } from 'react'
import googleIcon from '../../../Assets/google-logo.png'
import facebookIcon from '../../../Assets/Facebook_Logo_2023 1.png'
import emailIcon from '../../../Assets/email-logo.png'
import { NavLink } from 'react-router-dom';
import { signInWithFacebook, signInWithGoogle } from '../../Auth/FirebaseConfig';

function FormMember() {

    return (
        <div className='btn-sign-main'>
            <button className='btn-sign' onClick={signInWithGoogle}>
                <img src={googleIcon} alt="Google Icon" />
                <p>Continue With Google</p>
            </button>

            <button className='btn-sign' onClick={signInWithFacebook}>
                <img src={facebookIcon} />
                <p>Continue With Facebook</p>
            </button>
            <button className='btn-sign'>
                <img src={emailIcon} />
                <NavLink to='SignWithMail'>Continue With Email</NavLink>
            </button>
        </div>
    )
}

export default FormMember
