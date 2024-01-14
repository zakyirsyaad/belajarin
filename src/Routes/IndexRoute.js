import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ResumeWriting from '../page/Class/WritingTranslation/ResumeWriting';
import Writing from '../page/Class/WritingTranslation/Writing';
import ProgrammingTech from '../page/Class/ProgrammerTech/ProgrammingTech';
import DetailClass from '../page/Class/DetailClass';
import Register from '../component/Auth/Register';
import Login from '../component/Auth/Login';
import SignMail from '../page/SignMail';
import LandingPages from '../page/LandingPages';
import Home from '../page/Home';
import { initializeAuthState } from '../Redux/authSlice';
import SignMentor from '../page/SignComMentor';
import MentorComLogin from '../component/Auth/MentorComLogin';
import MentorComRegister from '../component/Auth/MentorComRegister';

function IndexRoute() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.accessToken !== '');


    useEffect(() => {
        const initialize = async () => {
            await dispatch(initializeAuthState());
        };

        initialize();
    }, [dispatch]);

    return (
        <Routes>
            <Route
                path='/'
                element={isLoggedIn ? <Home /> : <LandingPages />}
            />

            <Route path='SignWithMail' element={<SignMail />}>
                <Route path='RegisterMember'
                    element={<Register />}
                />
                <Route
                    path='LoginMember'
                    element={isLoggedIn ? <Navigate to='/' /> : <Login />}
                />
            </Route>

            <Route path='SignCommunityMentor' element={<SignMentor />}>
                <Route
                    path='RegisterCommunityMentor'
                    element={<MentorComRegister />}
                />
                <Route
                    path='LogincommunityMentor'
                    element={isLoggedIn ? <Navigate to='/' /> : <MentorComLogin />}
                />
            </Route>

            <Route
                path='ProgrammingTech'
                element={isLoggedIn ? <ProgrammingTech /> : <Navigate to='/SignWithMail/LoginMember' />}
            />
            <Route
                path='WritingTranslation'
                element={isLoggedIn ? <Writing /> : <Navigate to='/SignWithMail/LoginMember' />}
            />
            <Route
                path='WritingTranslation/ResumeWriting'
                element={isLoggedIn ? <ResumeWriting /> : <Navigate to='/SignWithMail/LoginMember' />}
            />
            <Route path='WritingTranslation/ResumeWriting/:id' element={<DetailClass />} />
            <Route path=':id' element={<DetailClass />} />

        </Routes>
    );
}

export default IndexRoute;
