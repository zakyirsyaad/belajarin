import React from 'react'
import Navbar from '../../../component/Fragments/Navbar'
import Footer from '../../../component/Fragments/Footer'
import HeaderClass from '../../../component/Fragments/HeaderClass'
import ClassCategoryWriting from './ClassCategoryWriting'

export default function Writing() {
    return (
        <div className='writing'>
            <Navbar />
            <HeaderClass>Writing & Translation</HeaderClass>
            <ClassCategoryWriting />
            <Footer />
        </div>
    )
}
