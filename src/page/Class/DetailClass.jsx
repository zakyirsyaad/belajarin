import React, { useEffect, useState } from 'react'
import Navbar from '../../component/Fragments/Navbar'
import Footer from '../../component/Fragments/Footer'
import Breadcrumbs from '../../component/Elements/Breadcrumbs'
import ButtonStyled from '../../component/Elements/Button/Button'
import FotoBadge from '../../component/Elements/FotoBadge/FotoBadge'
import badge from '../../Assets/GDG-Bevy-ChapterThumbnail 1.png'
import { HomeFilled } from '@ant-design/icons'
import { Avatar } from 'antd'
import AppointmentBooking from '../../component/Elements/AppointmentBooking'
import { useParams } from 'react-router-dom'


export default function DetailClass() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
                const result = await response.json();
                setData(result); // Assuming the result is an object, not an array
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]); // Include 'id' in the dependency array to fetch data when 'id' changes

    if (loading) {
        return <div className="center-container">
            <div className="cube-loader">
                <div className="cube-top"></div>
                <div className="cube-wrapper">
                    <span style={{ "--i": 0 }} className="cube-span"></span>
                    <span style={{ "--i": 1 }} className="cube-span"></span>
                    <span style={{ "--i": 2 }} className="cube-span"></span>
                    <span style={{ "--i": 3 }} className="cube-span"></span>
                </div>
            </div>
        </div>
    }

    if (!data) {
        return <p>Error loading data</p>;
    }

    // Now, 'data' is assumed to be an object, not an array
    const { images, title, description, price } = data;


    return (
        <div className='material'>
            <Navbar />
            <Breadcrumbs />
            <div className='detail-class'>
                <div className='detail-left'>
                    <p className='detail-desc'>{title}</p>
                    <div className='data-mentor'>
                        <FotoBadge
                            src={images}
                            alt="Foto Profil"
                            badgeImg={badge}
                        />
                        <div className='detail-mentor'>
                            <p className='nama-mentor'>
                                $ {price}  <Avatar style={{ marginLeft: 15 }} src={badge} alt="badge" />
                                <div className='class-text lokasi'>
                                    <HomeFilled style={{ paddingRight: 10, fontSize: 20 }} />
                                    <p className='lokasi-mentor'>Yogyakarta</p>
                                    <p className='lokasi-mentor'>32 Sessions</p>
                                </div>
                            </p>
                            <ButtonStyled>Contact Me</ButtonStyled>
                        </div>
                    </div>
                    <p className='desc-mentor'>{description}</p>
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
