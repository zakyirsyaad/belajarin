import React, { useEffect, useState } from 'react';
import Navbar from '../../../component/Fragments/Navbar';
import Footer from '../../../component/Fragments/Footer';
import HeaderClass from '../../../component/Fragments/HeaderClass';
import { Card, Space } from 'antd';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default function Business() {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios
            .get("https://belajarin-app.vercel.app/business")
            .then((res) => setData(res.data.subcategories))
            .catch(err => {
                setError(err.message);
            });
    }, []);

    return (
        <div className='writing'>
            <Navbar />
            <HeaderClass>Business</HeaderClass>
            {error && <p className="text-danger">{error}</p>}
            <Space direction="horzontal" size={16} wrap={true}>
                {data.map((item) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        style={{ width: 300, height: 300 }}
                    >
                        {item.subMenu.map((submenuItem) => (
                            <NavLink to='' className='class-submenu'><p key={submenuItem.uid}>{submenuItem.title}</p></NavLink>
                        ))}
                    </Card>
                ))}
            </Space>
            <Footer />
        </div>
    );
}
