import React, { useEffect, useState } from 'react';
import Join from '../Elements/Popup/Join';
import Category from './Category'; // Pastikan path menuju Category sesuai dengan struktur proyek Anda
import logo from '../../Assets/logo-belajarin.png'
import { Link } from 'react-router-dom';
import Profile from '../Auth/Profile';

function Navbarlog() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <navbar className={scrolled ? 'scrolled' : ''}>
            <nav>
                <Link to='/'><img src={logo} alt="Logo" /></Link>
                <input className='search' type="search" name="" id="" placeholder='Search Bar' />
                <p>BelajarinAI</p>
                <p>Bootcamp</p>
                <Profile />
            </nav>
            <Category className={scrolled ? 'scrolledCategory' : ''} />
        </navbar>
    );
}

export default Navbarlog;
