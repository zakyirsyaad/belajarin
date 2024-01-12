import React from 'react'
import { NavLink } from 'react-router-dom'


function ClassCategoryProgramming() {

    return (
        <div className='class-main'>
            <div className='class-box'>
                <img src='' alt="Website Development Foto" />
                <p>Website Development</p>
                <NavLink id='class-link'>Bussines Websites</NavLink>
                <NavLink id='class-link'>E-Commerce Development</NavLink>
                <NavLink id='class-link'>Landing Pages</NavLink>
                <NavLink id='class-link'>Dropshipping Websites</NavLink>
                <NavLink id='class-link'>Build a Complete Website with Website Platforms</NavLink>
            </div>
            <div className='class-box'>
                <img src='' alt="foto class" />
                <p>Website Maintenance</p>
                <NavLink id='class-link'>Bug Fixes</NavLink>
                <NavLink id='class-link'>Backup & Migration</NavLink>
                <NavLink id='class-link'>Speed Optimization </NavLink>
            </div>
            <div className='class-box'>
                <img src='' alt="foto class" />
                <p>Software Development</p>
                <NavLink id='class-link'>Web Applications</NavLink>
                <NavLink id='class-link'>Desktop Applications</NavLink>
                <NavLink id='class-link'>APIs & Integration</NavLink>
                <NavLink id='class-link'>Browser Extensions</NavLink>
            </div>
            <div className='class-box'>
                <img src='' alt="foto class" />
                <p>Software Developers</p>
                <NavLink id='class-link'>Python Developers</NavLink>
                <NavLink id='class-link'>HTML & CSS Developers</NavLink>
                <NavLink id='class-link'>Javascript Developers</NavLink>
                <NavLink id='class-link'>PHP Developers</NavLink>
            </div>
        </div>
    )
}

export default ClassCategoryProgramming
