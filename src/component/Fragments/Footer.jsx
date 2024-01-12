import React from 'react'
import logo from '../../Assets/logo-belajarin.png'
import AOS from 'aos'
AOS.init()

function Footer() {
    return (
        <div className='footer-main'>
            <div className='footer-text'>
                <div data-aos="fade-up">
                    <h5>Categories</h5>
                    <p>Programming & Tech</p>
                    <p>Data</p>
                    <p>Bussiness</p>
                    <p>Graphic & Design</p>
                    <p>Digital Marketing</p>
                    <p>Writing & Translation</p>
                    <p>Video & Animation</p>
                    <p>Music & Audio</p>
                </div>
                <div data-aos="fade-up">
                    <h5>About</h5>
                    <p>Programming & Tech</p>
                    <p>Data</p>
                    <p>Bussiness</p>
                </div>
                <div data-aos="fade-up">
                    <h5>Support</h5>
                    <p>Programming & Tech</p>
                    <p>Data</p>
                    <p>Bussiness</p>
                </div>
            </div>
            <div className='footer-contact'>
                <img className='footer-img' src={logo} alt="" data-aos="fade-left" />
                <div>
                    <p>Follow Us</p>
                    <div className='follow-main'>
                        <a href="https://www.instagram.com/halobelajarin/" target='_blank'>
                            <div data-aos="flip-up" id='ig' alt="instagram" />
                        </a>
                        <a href="https://www.tiktok.com/@belajarin?is_from_webapp=1&sender_device=pc" target='_blank'>
                            <div data-aos="flip-up" id='tiktok' alt="tiktok" />
                        </a>
                        <a href="https://www.tiktok.com/@belajarin?is_from_webapp=1&sender_device=pc" target='_blank'>
                            <div data-aos="flip-up" id='x' alt="x" />
                        </a>
                        <a href="https://www.tiktok.com/@belajarin?is_from_webapp=1&sender_device=pc" target='_blank'>
                            <div data-aos="flip-up" id='yt' alt="yt" />
                        </a>
                        <a href="https://www.tiktok.com/@belajarin?is_from_webapp=1&sender_device=pc" target='_blank'>
                            <div data-aos="flip-up" id='linkedin' alt="linkedin" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer
