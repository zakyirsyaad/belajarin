import React, { useEffect, useState } from 'react';
import { Card, Spin } from 'antd';
import axios from 'axios';
import { StarFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import AOS from 'aos';
AOS.init();

const GetAllClass = () => {
    const [materiData, setMateriData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://belajarin-tau.vercel.app/home');
                setMateriData(response.data.materiData);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='get-all-class' data-aos="zoom-in"
            data-aos-duration="1500">
            {loading && <Spin size="large" fullscreen={true} />}
            {materiData.map((materi) => (
                <Link to={`/material/${materi.mentor_name}/${materi.materi_id}`} id='card-link'>
                    <Card
                        key={materi.materi_id}
                        bordered={false}
                        className='get-all-class-card'
                        cover={<img src={materi.image} className='class-img' alt={`Materi ${materi.title}`} style={{ maxWidth: '100%' }} />}
                    >
                        <>
                            <p className='class-title'>{materi.title}</p>
                            <p className='class-nama'>{materi.mentor_name}</p>
                            <div className='class-text'>
                                <StarFilled />
                                <p>4.9</p>
                            </div>
                            <p className='class-harga'>Rp. {(parseFloat(materi.price)).toLocaleString()}</p>
                        </>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export default GetAllClass;
