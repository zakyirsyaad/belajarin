// MaterialDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../component/Fragments/Navbar';
import FotoBadge from '../component/Elements/FotoBadge/FotoBadge';
import badge from '../Assets/GDG-Bevy-ChapterThumbnail 1.png'
import { Avatar } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import ButtonStyled from '../component/Elements/Button/Button';
import AppointmentBooking from '../component/Elements/AppointmentBooking';
import Footer from '../component/Fragments/Footer';

export default function MaterialDetail() {
    const { submenuItemUid, mentor_name } = useParams();
    const [material, setMaterial] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        const loadMaterialData = async () => {
            try {
                const response = await axios.get(`https://belajarin-app.vercel.app/material/${mentor_name}/${submenuItemUid}`);
                setMaterial(response.data); // Access the entire response
                console.log("verhasil");
            } catch (err) {
                setError(err.message);
            }
        };

        loadMaterialData();
    }, [submenuItemUid, mentor_name]);

    const materialTitle = material?.materiData?.title || 'Loading...';

    return (
        <div className='material'>
            <Navbar />
            <div className='detail-class'>
                <div className='detail-left'>
                    <p className='detail-desc'>{materialTitle}</p>
                    <div className='data-mentor'>
                        <FotoBadge
                            src={material.materiData?.image}
                            alt="Foto Profil"
                            badgeImg={badge}
                        />
                        <div className='detail-mentor'>
                            <p className='nama-mentor'>
                                {material.materiData?.mentor_name}  <Avatar style={{ marginLeft: 5 }} src={badge} alt="badge" />
                                <div className='class-text lokasi'>
                                    <HomeFilled style={{ paddingRight: 10, fontSize: 20 }} />
                                    <p className='lokasi-mentor'>Yogyakarta</p>
                                    <p className='lokasi-mentor'>32 Sessions</p>
                                </div>
                            </p>
                            <ButtonStyled>Contact Me</ButtonStyled>
                        </div>
                    </div>
                    <p className='desc-mentor'>{material.mentorData?.length > 0 ? material.mentorData[0].desc_mentor : 'Mentor data not available'}</p>
                    <div className='skill-mentor'>
                        <p>Cover Letters</p>
                        <p>Job Description</p>
                    </div>
                </div>
                <div>
                    <AppointmentBooking />
                </div>
            </div>

            <Footer />
        </div>
    )
}
