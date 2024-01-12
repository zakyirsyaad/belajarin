import React from 'react'
import Navbar from '../../../component/Fragments/Navbar'
import Footer from '../../../component/Fragments/Footer'
import HeaderMaterial from '../../../component/Fragments/HeaderMaterial'
import Breadcrumbs from '../../../component/Elements/Breadcrumbs'
import ListClassWriting from './ListClassWriting'
import CardClass from '../../../component/Elements/Card/CardClass'

export default function ResumeWriting() {
    return (
        <div className='material'>
            <Navbar />
            <HeaderMaterial>Resume Writing</HeaderMaterial>
            <Breadcrumbs />
            <div className='material-list'>
                <ListClassWriting />
                <CardClass />
            </div>
            <Footer />
        </div>
    )
}
