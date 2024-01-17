import React from 'react';
import { Dropdown, Menu, Space } from 'antd';
import { NavLink } from 'react-router-dom';

const categories = [
    {
        key: 'programming',
        label: (
            <NavLink to='/ProgrammingTech' id='label'>
                Programming & Tech
            </NavLink>
        ),
    },

    {
        key: 'Data',
        label: (
            <NavLink to='/Data' id='label'>
                Data
            </NavLink>
        ),
    },
    {
        key: 'Bussiness',
        label: (
            <NavLink to='/Business' id='label'>
                Bussiness
            </NavLink>
        ),
    },
    {
        key: 'graphic',
        label: (
            <NavLink to='/GraphicDesign' id='label'>
                Graphic & Design
            </NavLink>
        ),
    },
    {
        key: 'marketing',
        label: (
            <NavLink to='/DigitalMarketing' id='label'>
                Digital Marketing
            </NavLink>
        ),
    },
    {
        key: 'writing',
        label: (
            <NavLink to='/WritingTranslation' id='label'>
                Writing & Translation
            </NavLink>
        ),
    },
    {
        key: 'video',
        label: (
            <NavLink to='/VideoAnimation' id='label'>
                Video & Animation
            </NavLink>
        ),
    },
    {
        key: 'music',
        label: (
            <NavLink to='/MusicAudio' id='label'>
                Music & Audio
            </NavLink>
        ),
    },
];

const Category = () => (
    <div className="category">
        {categories.map((category) => (
            <div key={category.key}>
                <span>{category.label}</span>
            </div>
        ))}
    </div>
);

export default Category;
