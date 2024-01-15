// MaterialDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../component/Fragments/Navbar';
import FotoBadge from '../component/Elements/FotoBadge/FotoBadge';
import badge from '../Assets/GDG-Bevy-ChapterThumbnail 1.png'
import { Avatar } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import ButtonStyled from '../component/Elements/Button/Button';
import AppointmentBooking from '../component/Elements/AppointmentBooking';
import Footer from '../component/Fragments/Footer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Select } from 'antd';

export default function MaterialDetail() {
    const { submenuItemUid, mentor_name } = useParams();
    const [material, setMaterial] = useState({});
    const [error, setError] = useState('');
    const navigate = useNavigate();


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

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        // Reset pilihan waktu saat tanggal diubah
        setSelectedTime(null);
    };

    const generateTimeOptions = () => {
        const options = [];
        for (let hour = 0; hour < 24; hour++) {
            const startTime = `${hour.toString().padStart(2, '0')}:00`;
            const endTime = `${(hour + 1).toString().padStart(2, '0')}:00`;
            options.push({ startTime, endTime, value: startTime, label: `${startTime} - ${endTime}` });
        }
        return options;
    };

    const availableTimeOptions = generateTimeOptions();

    const handleTimeChange = (value) => {
        const timeOption = availableTimeOptions.find((option) => option.value === value);
        setSelectedTime(timeOption);
    };

    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    const handleBooking = () => {
        if (selectedDate && selectedTime) {
            // Menavigasi ke halaman OrderSummary dengan membawa data yang diperlukan
            navigate('/OrderSummary', {
                state: {
                    material,
                    selectedDate,
                    selectedTime,
                },
            });
        } else {
            console.error('Please select both date and time.');
        }
    };

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
                    <div>
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            dateFormat="dd/MM/yyyy"
                            inline
                            className='date'
                        />
                    </div>
                    <div>
                        <Select
                            placeholder="Select Time"
                            optionFilterProp="children"
                            onChange={handleTimeChange}
                            filterOption={filterOption}
                            style={{
                                width: 250
                            }}
                        >
                            <Select.Option value="" disabled>
                                Select Time
                            </Select.Option>
                            {availableTimeOptions.map((timeOption, index) => (
                                <Select.Option key={index} value={timeOption.value}>
                                    {timeOption.label}
                                </Select.Option>
                            ))}
                        </Select>
                    </div>
                    <ButtonStyled onClick={handleBooking}>BOOK CLASS</ButtonStyled>
                </div>
            </div>

            <Footer />
        </div>
    )
}
