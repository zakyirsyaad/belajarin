// OrderSummary.js
import React from 'react';
import Navbar from '../component/Fragments/Navbar';
import Footer from '../component/Fragments/Footer';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function OrderSummary() {
    const { state } = useLocation();
    const { material, selectedDate, selectedTime } = state || {};

    const title = material?.materiData?.title || 'Loading...';
    const price = material?.materiData?.price || 'Loading...';

    const handleConfirmOrder = async () => {
        try {
            // Lakukan operasi penyimpanan ke database di sini
            const response = await axios.post('https://belajarin-tau.vercel.app/pay', {
                title,
                selectedDate,
                selectedTime,
                price
            });
            const responseData = response.data;
            const token = JSON.parse(responseData.dataPayment.response).token;

            // Redirect ke halaman pembayaran Midtrans
            window.snap.pay(token);

            // Outputkan respons atau lakukan operasi lain sesuai kebutuhan
            console.log('Order confirmation response:', response.data);
        } catch (error) {
            console.error('Error confirming order:', error.message);
        }
    };

    return (
        <div className=''>
            <Navbar />
            <div className='order-summary-content'>
                <h1>Order Summary</h1>
                <p>Material: {title}</p>
                <p>Harga: {price}</p>
                <p>Date: {selectedDate?.toLocaleDateString()}</p>
                <p>Time: {selectedTime ? `${selectedTime.startTime} - ${selectedTime.endTime}` : 'Not selected'}</p>
                <button onClick={handleConfirmOrder}>Confirm Order</button>
            </div>
            <Footer />
        </div>
    );
}
