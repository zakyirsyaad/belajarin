// OrderSummary.js
import React from 'react';
import Navbar from '../component/Fragments/Navbar';
import Footer from '../component/Fragments/Footer';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import ButtonStyled from '../component/Elements/Button/Button';

export default function OrderSummary() {
    const location = useLocation();
    const orderData = location.state || {}; // Menggunakan objek kosong jika location.state tidak ada

    const {
        materi_id,
        title,
        price,
        mentorNama,
        mentorPhotoUrl,
        image,
        selectedDate,
        selectedTime,
    } = orderData;

    const uid = localStorage.getItem("uid")
    const totalAmount = parseFloat(price) + 5000;
    const handleConfirmOrder = async () => {
        try {
            toast.success("Silahkan lakukan pembayaran", 3000)
            // Lakukan operasi penyimpanan ke database di sini
            const response = await axios.post('https://belajarin-tau.vercel.app/pay', {
                title,
                materi_id,
                totalAmount,
                selectedDate,
                selectedTime,
                uid
            });
            const responseData = response.data;
            console.log(response)
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
        <div className='writing'>
            <Navbar />
            <div className='order-summary'>
                <p className='order-summary-header'>Your Appointment is ready,
                    <br /> Please complete your payment
                </p>
                <div className='order-summary-info'>
                    <img src={mentorPhotoUrl} alt="" />
                    <div className='order-summary-mentor-data'>
                        <p className='order-summary-nama'>{mentorNama}</p>
                        <p className='order-summary-title'>{title}</p>
                        <p className='order-summary-date'>Date: <span>{selectedDate?.toLocaleDateString()}</span></p>
                        <p className='order-summary-date'>Time: <span>{selectedTime ? `${selectedTime.startTime} - ${selectedTime.endTime}` : 'Not selected'}</span></p>
                        <img src={image} alt="" />
                    </div>
                    <div className='order-summary-total'>
                        <div>
                            <p className='order-summary-total-header'>Order Summary</p>
                            <p className='order-summary-total-list'>Session Class <span>Rp. {(parseFloat(price)).toLocaleString()}</span></p>
                            <p className='order-summary-total-list' > Admin fees <span>Rp. 5,000</span></p>
                        </div>
                        <div>
                            <hr />
                            <p className='order-summary-total-price'>Total Price <span>Rp. {(parseFloat(price) + 5000).toLocaleString()}</span></p>
                            <ButtonStyled onClick={handleConfirmOrder}>Confirm Order</ButtonStyled>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
