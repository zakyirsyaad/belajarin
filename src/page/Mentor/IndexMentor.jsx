import React from 'react'
import NavbarMentor from '../../component/Fragments/NavbarMentor';
import { Outlet } from 'react-router-dom';
import Footer from '../../component/Fragments/Footer';


export default function IndexMentor() {
    return (
        <div className='dashboard-mentor'>
            <NavbarMentor />
            <Outlet />
            <Footer />
        </div>
    )
}
