import React, { useEffect, useState } from 'react';
import Navbar from '../../../component/Fragments/Navbar';
import Footer from '../../../component/Fragments/Footer';
import HeaderClass from '../../../component/Fragments/HeaderClass';
import { Card, Space, Spin } from 'antd';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default function MusicAudio() {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://belajarin-app.vercel.app/music-audio")
            .then((res) => {
                setData(res.data.subcategories)
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
            });
    }, []);

    return (
        <div className='writing'>
            <Navbar />
            <HeaderClass>Music &Audio</HeaderClass>
            <div className='get-list-category'>
                {loading && <Spin size="large" fullscreen={true} />}
                {error && <p className="text-danger">{error}</p>}
                <Space direction="horizontal" size={16} wrap={true}>
                    {data.map((item) => (
                        <Card
                            key={item.id}
                            title={<p className='get-list-category-title'>{item.title}</p>}
                            style={{ width: 300, height: 300, margin: 20 }}
                        >
                            {item.subMenu.map((submenuItem) => (
                                <NavLink
                                    key={submenuItem.uid}
                                    to={`/MusicAudio/${submenuItem.uid}`}
                                    className="class-submenu"
                                >
                                    <p>{submenuItem.title}</p>
                                </NavLink>
                            ))}
                        </Card>
                    ))}
                </Space>
            </div>
            <Footer />
        </div>
    );
}
