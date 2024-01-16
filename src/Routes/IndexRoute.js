import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProgrammingTech from '../page/Class/ProgrammerTech/ProgrammingTech';
import Register from '../component/Auth/Register';
import Login from '../component/Auth/Login';
import SignMail from '../page/SignMail';
import LandingPages from '../page/LandingPages';
import Home from '../page/Home';
import { initializeAuthState } from '../Redux/authSlice';
import SignMentor from '../page/SignComMentor';
import MentorComLogin from '../component/Auth/MentorComLogin';
import MentorComRegister from '../component/Auth/MentorComRegister';
import Data from '../page/Class/Data/Data';
import Business from '../page/Class/Bussiness/Business';
import GraphicDesign from '../page/Class/GraphicDesign/GraphicDesign';
import DigitalMarketing from '../page/Class/DigitalMarketing/DigitalMarketing';
import WritingTranslation from '../page/Class/WritingTranslation/WritingTranslation';
import VideoAnimation from '../page/Class/VideoAnimation/VideoAnimation';
import MusicAudio from '../page/Class/MusicAudio/MusicAudio';
import ClassProgramming from '../page/Class/ProgrammerTech/ClassProgramming';
import MaterialDetail from '../page/MaterialDetai';
import ErrorPage from '../page/ErrorPage';
import OrderSummary from '../page/OrderSummary';
import IndexMentor from '../page/Mentor/IndexMentor';
import Dashboard from '../page/Mentor/Dashboard';
import MentorClass from '../page/Mentor/MentorClass';

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

            <Route
                path='*'
                element={<ErrorPage />} />

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

            {/* CATEGORY */}

            <Route
                path='ProgrammingTech'
                element={isLoggedIn ? <ProgrammingTech /> : <Navigate to='/SignWithMail/LoginMember' />}
            />
            <Route
                path="/ProgrammingTech/:submenuItemUid"
                element={isLoggedIn ? <ClassProgramming /> : <Navigate to='/SignWithMail/LoginMember' />}
            />
            <Route
                path="/material/:mentor_name/:submenuItemUid"
                element={isLoggedIn ? <MaterialDetail /> : <Navigate to='/SignWithMail/LoginMember' />}
            />
            <Route
                path="OrderSummary"
                element={isLoggedIn ? <OrderSummary /> : <Navigate to='/SignWithMail/LoginMember' />}
            />


            <Route
                path='Data'
                element={isLoggedIn ? <Data /> : <Navigate to='/SignWithMail/LoginMember' />}
            />
            <Route
                path='Business'
                element={isLoggedIn ? <Business /> : <Navigate to='/SignWithMail/LoginMember' />}
            />
            <Route
                path='GraphicDesign'
                element={isLoggedIn ? <GraphicDesign /> : <Navigate to='/SignWithMail/LoginMember' />}
            />

            <Route
                path='DigitalMarketing'
                element={isLoggedIn ? <DigitalMarketing /> : <Navigate to='/SignWithMail/LoginMember' />}
            />

            <Route
                path='WritingTranslation'
                element={isLoggedIn ? <WritingTranslation /> : <Navigate to='/SignWithMail/LoginMember' />}
            />
            <Route
                path='VideoAnimation'
                element={isLoggedIn ? <VideoAnimation /> : <Navigate to='/SignWithMail/LoginMember' />}
            />
            <Route
                path='MusicAudio'
                element={isLoggedIn ? <MusicAudio /> : <Navigate to='/SignWithMail/LoginMember' />}
            />

            {/* MENTOR */}
            <Route
                path='HomeMentor/:user/:uid'
                element={<IndexMentor />}>

                <Route
                    index
                    element={<Dashboard />} />

                <Route
                    path='addMateri'
                    element={<MentorClass />} />
            </Route>



        </Routes>
    );
}

export default IndexRoute;
