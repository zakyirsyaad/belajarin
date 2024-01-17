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
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        const loadMaterialData = async () => {
            try {
                const response = await axios.get(`https://belajarin-app.vercel.app/material/${mentor_name}/${submenuItemUid}`);
                setData(response.data); // Access the entire response
                console.log(response.data);

                console.log("verhasil");
            } catch (err) {
                setError(err.message);
            }
        };

        loadMaterialData();
    }, [submenuItemUid, mentor_name]);

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
        if (selectedDate && selectedTime && data && data.material.length > 0 && data.mentorData.length > 0) {
            const material = data.material[0];
            const mentor = data.mentorData[0];

            // Navigating to OrderSummary with the required data
            navigate('/OrderSummary', {
                state: {
                    title: material.title,
                    price: material.price,
                    mentorNama: mentor.nama,
                    mentorPhotoUrl: mentor.photoURL,
                    mentorEmail: mentor.email,
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
                    {data ? (
                        <div>
                            {/* Menampilkan data material */}
                            {data.material.map((material) => (
                                <div key={material.materi_id}>
                                    <h2>{material.title}</h2>
                                    <img src={material.image} alt={material.title} />
                                    <p>Category: {material.category}</p>
                                    <p>Learning Path: {material.learningPath}</p>
                                    <p>Price: {material.price}</p>
                                </div>
                            ))}

                            {/* Menampilkan data mentor */}
                            {data.mentorData.map((mentor) => (
                                <div key={mentor.mentor_id}>
                                    <h2>Mentor: {mentor.nama}</h2>
                                    <img src={mentor.photoURL} alt={mentor.displayName} />
                                    <p>Location: {mentor.location}</p>
                                    <p>Email: {mentor.email}</p>
                                    <p>Description: {mentor.desc_mentor}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
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
