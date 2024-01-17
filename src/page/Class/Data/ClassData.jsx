import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../../component/Fragments/Navbar';
import Footer from '../../../component/Fragments/Footer';
import { Card } from 'antd';
import { StarFilled } from '@ant-design/icons';
import Breadcrumbs from '../../../component/Elements/Breadcrumbs';

export default function ClassData() {
    const { submenuItemUid } = useParams();
    const [classData, setClassData] = useState([]);  // Set initial state to an empty array
    const [error, setError] = useState('');

    useEffect(() => {
        const loadClassData = async () => {
            try {
                const response = await axios.get(`https://belajarin-tau.vercel.app/data/${submenuItemUid}`);
                setClassData(response.data.materi);
            } catch (err) {
                setError(err.message);
            }
        };

        loadClassData();
    }, [submenuItemUid]);
    return (
        <div className='writing'>
            <Navbar />
            <Breadcrumbs />
            {error && <p className="text-danger">{error}</p>}
            <div className='popular-card'>
                {classData.map((materi) => (
                    <Link to={`/material/${materi.mentor_name}/${materi.materi_id}`} id='card-link'>
                        <Card key={materi.materi_id}
                            style={{
                                width: 300,
                                height: 375,
                                marginRight: 49,
                                marginBottom: 50,
                                fontFamily: "inter",
                            }}
                            className='class-card'
                            hoverable
                            cover={<img src={materi.image} className='class-img' alt={`Materi ${materi.title}`} />}
                            headerFontSize={20}
                        >
                            <>
                                <p className='class-title'>{materi.title}</p>
                                <p className='class-nama'>{materi.mentor_name}</p>
                            </>
                            <div className='class-text'>
                                <StarFilled />
                                <p>4.9</p>
                            </div>
                            <p className='class-harga'>Rp. {materi.price}</p>
                        </Card>
                    </Link>
                ))}
            </div>
            <Footer />
        </div>
    )
}
