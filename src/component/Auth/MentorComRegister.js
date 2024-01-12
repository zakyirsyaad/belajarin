import React, { useState } from 'react';
import ButtonStyled from '../Elements/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { signUpMentor, uploadFile } from '../../Redux/authSlice';
import { message, Upload } from 'antd';

export default function MentorComRegister() {
    const [nama, setNama] = useState("")
    const [email, setEmail] = useState("")
    const [residenceAddress, setResidenceAddress] = useState("")
    const [educationalBackground, setEducationalBackground] = useState("")
    const [communityName, setCommunityName] = useState("")
    const [communityAccountSign, setCommunityAccountsign] = useState("")
    const [bankAccountName, setBankAccountName] = useState("")
    const [bankAccountNumber, setBankAccountNumber] = useState("")
    const [bank, setBank] = useState("")

    const dispatch = useDispatch()
    const registerHandle = () => {
        // Kumpulkan data formulir
        const formData = {
            nama,
            email,
            residenceAddress, // Tambahkan data formulir lainnya
            educationalBackground,
            communityName,
            communityAccountSign,
            bankAccountName,
            bankAccountNumber,
            bank,

        };

        // Kirim data registrasi pengguna
        dispatch(signUpMentor(formData))
            .then(() => {
                // Jika registrasi berhasil, kirim file
                if (file1 && file2) {
                    dispatch(uploadFile(file1))
                        .then(() => {
                            console.log('File 1 berhasil di-upload!');
                        })
                        .catch((err) => {
                            console.error('Error saat upload file 1:', err.message);
                        });

                    dispatch(uploadFile(file2))
                        .then(() => {
                            console.log('File 2 berhasil di-upload!');
                        })
                        .catch((err) => {
                            console.error('Error saat upload file 2:', err.message);
                        });
                }
            })
            .catch((err) => {
                // Handle kesalahan registrasi
                console.error('Error saat registrasi pengguna:', err.message);
            });

        // Reset formulir setelah submit
        setNama("");
        setEmail("");
        setBank("")
        setBankAccountName("")
        setBankAccountNumber("")
        setCommunityAccountsign("")
        setCommunityName("")
        setEducationalBackground("")
        setFile1("")
        setFile2("")
        setResidenceAddress("")
        setPage(page - 1)

        // Reset file setelah submit
        setFile1(null);
        setFile2(null);
    };


    const [page, setPage] = useState(0);
    const nextPage = () => {
        setPage(page + 1);
    };

    const previousPage = () => {
        setPage(page - 1);
    };

    const beforeUpload = (file) => {
        const isPDF = file.type === 'application/pdf';
        if (!isPDF) {
            message.error('You can only upload PDF files!');
        }
        return isPDF;
    };

    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
    const { loading, error } = useSelector((state) => state.auth);

    const handleFileChange1 = (e) => {
        setFile1(e.target.files[0]);
    };

    const handleFileChange2 = (e) => {
        setFile2(e.target.files[0]);
    };


    return (
        <>
            <form onSubmit={(e) => { e.preventDefault() }} encType="multipart/form-data">
                <h5>Register Account</h5>
                {
                    page === 0 && (
                        <>
                            <input
                                type="text"
                                name="nama"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                placeholder='Nama'
                            />
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='contoh@belajarin.com'
                            />
                            <input
                                type="text"
                                value={residenceAddress}
                                onChange={(e) => setResidenceAddress(e.target.value)}
                                placeholder='Residence Address'
                            />
                            <input
                                type="text"
                                value={educationalBackground}
                                onChange={(e) => setEducationalBackground(e.target.value)}
                                placeholder='Educational Background'
                            />
                            <input
                                type="text"
                                placeholder='Community Name'
                                value={communityName}
                                onChange={(e) => setCommunityName(e.target.value)}
                            />
                            <input
                                type="text"
                                value={communityAccountSign}
                                onChange={(e) => setCommunityAccountsign(e.target.value)}
                                placeholder='Community Account Sign'
                            />
                            <ButtonStyled type="button" onClick={nextPage}>
                                Next Page
                            </ButtonStyled>
                        </>

                    )
                }
                {
                    page === 1 && (
                        <>

                            <div className='upload-form'>
                                <input type="file" onChange={handleFileChange1} />
                                <input type="file" onChange={handleFileChange2} />
                                {error && <p>Error: {error}</p>}
                            </div>
                            <input
                                type="text"
                                value={bankAccountName}
                                onChange={(e) => setBankAccountName(e.target.value)}
                                placeholder='Bank Account Name'
                            />
                            <div className='bank-form'>
                                <input
                                    type="text"
                                    value={bankAccountNumber}
                                    onChange={(e) => setBankAccountNumber(e.target.value)}
                                    placeholder='Bank Account Number'
                                />
                                <select name="bank" value={bank}
                                    onChange={(e) => setBank(e.target.value)}>
                                    <option value="" disabled selected>Pick an option</option>
                                    <option value="BCA">BCA</option>
                                    <option value="BRI">BRI</option>
                                    <option value="BUKOPIN">Bukopin</option>
                                    <option value="BNI">BNI</option>
                                </select>
                            </div>

                            <div>
                                <ButtonStyled type="button" className='prev-form' onClick={previousPage}>
                                    Previous Page
                                </ButtonStyled>
                                <ButtonStyled type="submit" onClick={registerHandle}>
                                    Submit
                                </ButtonStyled>
                            </div>

                        </>
                    )
                }
            </form>
        </>

    );
}
