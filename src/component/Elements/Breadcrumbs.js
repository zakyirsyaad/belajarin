import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumbs() {
    const location = useLocation()

    let currentLink = ''
    const crumbs = [
        <div className='crumb' key="home">
            <Link to="/">Home</Link>
        </div>,
        ...location.pathname.split('/')
            .filter(crumb => crumb !== '')
            .map(crumb => {
                currentLink += `/${crumb}`

                return (
                    <div className='crumb' key={crumb}>
                        <Link to={currentLink}>{crumb}</Link>
                    </div>
                )
            })
    ]

    return (
        <div className='breadcrumbs'>
            {crumbs}
        </div>
    )
}
