import React, { useEffect, useState } from 'react';
import Navbar from '../../../component/Fragments/Navbar';
import Footer from '../../../component/Fragments/Footer';
import HeaderClass from '../../../component/Fragments/HeaderClass';
import { Card, Space } from 'antd';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default function DigitalMarketing() {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios
            .get("https://belajarin-app.vercel.app/digital-marketing")
            .then((res) => setData(res.data.subcategories))
            .catch(err => {
                setError(err.message);
            });
    }, []);

    return (
        <div className='writing'>
            <Navbar />
            <HeaderClass>Digital Marketing</HeaderClass>
            {error && <p className="text-danger">{error}</p>}
            <NavLink to=''>
                <Space direction="horzontal" size={16} wrap={true}>
                    {data.map((item) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            style={{ width: 300, height: 300 }}
                        >
                            {item.subMenu.map((submenuItem) => (
                                <p key={submenuItem.uid}>{submenuItem.title}</p>
                            ))}
                        </Card>
                    ))}
                </Space>
            </NavLink>
            <Footer />
        </div>
    );
}
