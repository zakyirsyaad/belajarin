import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Select } from 'antd';

const AppointmentBooking = (className) => {
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
            // Lakukan operasi penyimpanan ke database di sini
            console.log('Booking appointment on', selectedDate, 'at', selectedTime.startTime);
            // Misalnya, Anda dapat menggunakan Axios atau fetch untuk mengirim data ke server
            // atau menyimpannya di state aplikasi, sesuai kebutuhan Anda.
        } else {
            console.error('Please select both date and time.');
        }
    };

    return (
        <div>
            <h1>Appointment Booking</h1>
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
            <div>
                <button onClick={handleBooking}>Book Appointment</button>
            </div>
        </div>
    );
};

export default AppointmentBooking;
