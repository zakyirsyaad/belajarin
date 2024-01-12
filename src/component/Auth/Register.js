import React, { useState } from 'react';
import ButtonStyled from '../Elements/Button/Button';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../Redux/authSlice';

export default function Register() {
    const [nama, setNama] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const registerHandle = () => {
        dispatch(signUpUser({ nama, email, password }))
        setNama("");
        setEmail("");
        setPassword("");

    }

    return (
        <>
            <form onSubmit={(e) => { e.preventDefault() }}>
                <h5>Register Account</h5>
                <input
                    type="text"
                    name="nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    required
                    placeholder='Nama'
                />
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='contoh@belajarin.com'
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} required
                    placeholder='Password'
                />
                <ButtonStyled type="submit" onClick={registerHandle}>
                    Submit
                </ButtonStyled>
            </form>
        </>

    );
}
