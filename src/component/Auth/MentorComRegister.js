import React, { useState } from 'react';
import ButtonStyled from '../Elements/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { signUpMentor, uploadFile } from '../../Redux/authSlice';

export default function MentorComRegister() {
    const [nama, setNama] = useState("")
    const [email, setEmail] = useState("")
    const [residenceAddress, setResidenceAddress] = useState("")
    const [educationalBackground, setEducationalBackground] = useState("")
    const [communityName, setCommunityName] = useState("")
    const [bankAccountName, setBankAccountName] = useState("")
    const [bankAccountNumber, setBankAccountNumber] = useState("")
    const [bank, setBank] = useState("")
    const [cv, setCv] = useState([]);
    const [portfolio, setPortfolio] = useState([]);
    const [keanggotaan, setKeanggotaan] = useState([]);

    const dispatch = useDispatch()
    const registerHandle = () => {
        // Kumpulkan data formulir
        const formData = {
            nama,
            email,
            residenceAddress, // Tambahkan data formulir lainnya
            educationalBackground,
            communityName,
            bankAccountName,
            bankAccountNumber,
            bank,
            cv,
            portfolio,
            keanggotaan
        };

        // Kirim data registrasi pengguna
        dispatch(signUpMentor(formData))
            .then(() => {
                // Jika registrasi berhasil, kirim file
                console.log('berhasil')
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
        setCommunityName("")
        setEducationalBackground("")
        setResidenceAddress("")
        setPage(page - 1)

        // Reset file setelah submit
        setCv([]);
        setPortfolio([]);
        setKeanggotaan([]);
    };


    const [page, setPage] = useState(0);
    const nextPage = () => {
        setPage(page + 1);
    };

    const previousPage = () => {
        setPage(page - 1);
    };

    // const beforeUpload = (file) => {
    //     const isPDF = file.type === 'application/pdf';
    //     if (!isPDF) {
    //         message.error('You can only upload PDF files!');
    //     }
    //     return isPDF;
    // };


    const { loading, error } = useSelector((state) => state.auth);

    const handleFileChange1 = (e) => {
        setCv(e.target.files[0]);
    };

    const handleFileChange2 = (e) => {
        setPortfolio(e.target.files[0]);
    };
    const handleFileChange3 = (e) => {
        setKeanggotaan(e.target.files[0]);
    };


    return (
        <>
            <form onSubmit={(e) => { e.preventDefault() }}>
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
                            <label>Bukti Keanggotaan</label>
                            <input type="file" onChange={handleFileChange3} />
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
