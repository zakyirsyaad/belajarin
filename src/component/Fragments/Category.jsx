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
        subMenu: [
            {
                key: 'wd',
                label: 'Website Development',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Bussines Website
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    E-Commerce Development
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Landing Pages
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Dropshipping Website
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Build a Complete Website with Website Platforms
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
            {
                key: 'wm',
                label: 'Website Maintenance',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Bug Fixes
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Backup & Migration
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Speed Optimization
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
            {
                key: 'sdm',
                label: 'Software Development',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Web Applications
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Desktop Applications
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    APIs & Integration
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Browser Extensions
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
            {
                key: 'sdr',
                label: 'Software Developer',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Python Developers
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    HTML & CSS Developers
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Javascript Developers
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Java Developers
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    PHP Developers
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
            {
                key: 'qr',
                label: 'QA & Review',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Software Testing
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Code Review
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Design Review
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    User Testing
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
            {
                key: 'ma',
                label: 'Mobile App Development ',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Cross-Platform Development
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Android App Development
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    IOS App Development
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Website to App
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Mobile App Maintenance
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
            {
                key: 'gd',
                label: 'Game Development',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    PC Games
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Mobile Games
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Console Games
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    VR Games
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
            {
                key: 'sd',
                label: 'Support & Cybersecurity',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    DevOps & Cloud
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Support & IT
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Cybersecurity
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Convert Files
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
            {
                key: 'ad',
                label: 'AI Developmetn',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    AI Integrations
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    AI Websites
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    AI Chatbot
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    AI Agents
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
        ],
    },

    {
        key: 'Data',
        label: (
            <NavLink to='/Data' id='label'>
                Data
            </NavLink>
        ),
        subMenu: [
            {
                key: 'dml',
                label: 'Data Science & Machine Learing',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Machine Learning
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Deep Learning
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
            {
                key: 'da',
                label: 'Data Analysis',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Data Analytics
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Data Visualization
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Dashboards
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
            {
                key: 'dm',
                label: 'Data Management',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Data Processing
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Data Engineering
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Databases
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
        ],
    },
    {
        key: 'Bussiness',
        label: (
            <NavLink to='/Business' id='label'>
                Bussiness
            </NavLink>
        ),
        subMenu: [
            {
                key: 'ga',
                label: 'General & Administrative',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Project Management
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    HR Consulting
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Supply Chain Management
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
            {
                key: 'bm',
                label: 'Bussines Management',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Bussiness Plans
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Bussines Consulting
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Market Research
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    ERP Management
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Product Management
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Event Management
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    CRM Management
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
            {
                key: 'flc',
                label: 'Financial & Legal Consulting',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Accounting & Bookkeping
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Tax Consulting
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Financial Consulting
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Application & Registrations
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Legal Documents & Contracts
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Legal Consulting
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    CRM Management
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
        ],
    },
    {
        key: 'graphic',
        label: (
            <NavLink to='/GraphicDesign' id='label'>
                Graphic & Design
            </NavLink>
        ),
        subMenu: [
            {
                key: 'lbi',
                label: 'Logo & Brand Identity',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Logo Design
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Brand Style Guides
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Bussines Cards & Stationery
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Fonts & Typography
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
            {
                key: 'wad',
                label: 'Web & App Design',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Website Design
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    App Design
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    UX Design
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Landing Page Design
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
            {
                key: 'vd',
                label: 'Visual Design',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Image Editing
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Infographic Design
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Vector Editing
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Graphic Design
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
            {
                key: 'md',
                label: 'Marketing Design',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Social Media Design
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Packaging & Label Design
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
            {
                key: 'abd',
                label: 'Architecture & Building Design',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Architecture & Interior Design
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Landscape Design
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Building Engineering
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
            {
                key: '3d',
                label: '3D Design',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    3D Architecture
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    3D Industrial Design
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    3D Fashion & Garment
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    3D Landscape
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    3D Game Assets
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
        ],
    },
    {
        key: 'marketing',
        label: (
            <NavLink to='/DigitalMarketing' id='label'>
                Digital Marketing
            </NavLink>
        ),
        subMenu: [
            {
                key: 's',
                label: 'Social',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Social Media Marketing
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Paid Social Media
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Influencer Marketing
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Community Management
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Public Relations
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
            {
                key: 'as',
                label: 'Analytics & Strategy',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Marketing Strategy
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Marketing Advice
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Web Analytics
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
        ],
    },
    {
        key: 'writing',
        label: (
            <NavLink to='/WritingTranslation' id='label'>
                Writing & Translation
            </NavLink>
        ),
        subMenu: [
            {
                key: 'cw',
                label: 'Content Writing',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Articles & Blog Posts
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Content Strategy
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Website Content
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Website Content
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Scriptwriting
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Creative Writing
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    E-Learning Content Development
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
        ],
    },
    {
        key: 'video',
        label: (
            <NavLink to='/VideoAnimation' id='label'>
                Video & Animation
            </NavLink>
        ),
        subMenu: [
            {
                key: 'epp',
                label: 'Editing & Post Production',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Video Editing
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Visual Effects
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Filmed Video Production
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Video Ads & Commercials
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
            {
                key: 'pv',
                label: 'Product Videos',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    3D Product Animation
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    E-Commerce Product Videos
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    App & Website Reviews
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Game Trailers
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
        ],
    },
    {
        key: 'music',
        label: (
            <NavLink to='/MusicAudio' id='label'>
                Music & Audio
            </NavLink>
        ),
        subMenu: [
            {
                key: 'mpw',
                label: 'Music Production & Writing',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Producers & Composers
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
            {
                key: 'aepp',
                label: 'Audio Engineering & Post Production',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Mixing & Mastering
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Audio Editing
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Vocal Tuning
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
            {
                key: 'dj',
                label: 'DJing',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    DJ Drops & Tags
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    DJ Mixing
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Remixing & Mashups
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
            {
                key: 'sd',
                label: 'Sound Design',
                children: [
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Sound Design
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Synth Presets
                                </NavLink>
                            </p>
                        ),
                    },
                    {
                        label: (
                            <p>
                                <NavLink to='#' id='menu-link'>
                                    Audio Logo & Sonic Branding
                                </NavLink>
                            </p>
                        ),
                    },
                ]
            },
        ],
    },
];

const Category = () => (
    <div className="category">
        {categories.map((category) => (
            <Dropdown key={category.key} overlay={renderSubMenu(category.subMenu)}>
                <Space>
                    {category.label}
                </Space>
            </Dropdown>
        ))}

    </div>
);

const renderSubMenu = (subMenu) => (
    <Menu>
        {subMenu.map((item) => (
            <Menu.SubMenu key={item.key} title={item.label}>
                {item.children && item.children.map((child) => (
                    <Menu.Item key={child.key}>{child.label}</Menu.Item>
                ))}
            </Menu.SubMenu>
        ))}
    </Menu>
);

export default Category;
