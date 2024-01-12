import React from 'react'
import Navbar from '../../../component/Fragments/Navbar'
import Footer from '../../../component/Fragments/Footer'
import HeaderClass from '../../../component/Fragments/HeaderClass'
import ClassCategoryProgramming from './ClassCategoryProgramming'

export default function ProgrammingTech() {
    return (
        <div className='writing'>
            <Navbar />
            <HeaderClass>Programmer & Tech</HeaderClass>
            <ClassCategoryProgramming />
            <Footer />
        </div>
    )
}
