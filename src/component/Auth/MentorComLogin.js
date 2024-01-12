import React, { useState } from 'react';
import ButtonStyled from '../Elements/Button/Button';
import { useDispatch } from 'react-redux';
import { signInUser } from '../../Redux/authSlice';

export default function MentorComLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const loginHandle = async () => {
        try {
            console.log(email, password);
            await dispatch(signInUser({ email, password }));
            setEmail("");
            setPassword("");
        } catch (error) {
            console.error("Error signing in:", error.message);
        }
    };
    return (
        <>

            <form onSubmit={(e) => { e.preventDefault(); loginHandle(); }}>
                <h5>Login Account</h5>
                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder='contoh@belajarin.com'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder='Password'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <ButtonStyled type="submit">
                    Submit
                </ButtonStyled>
            </form>
        </ >

    );
}
