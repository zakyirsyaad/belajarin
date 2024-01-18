import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../component/Fragments/Navbar';
import Footer from '../component/Fragments/Footer';
import { Tab } from '@headlessui/react';
import Search from 'antd/es/input/Search';
import { Avatar } from 'antd';
import ButtonStyled from '../component/Elements/Button/Button';

const MemberClass = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const uid = localStorage.getItem('uid');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://belajarin-tau.vercel.app/member/class/${uid}`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [uid]);

    if (loading) {
        // You can customize the loading indicator based on your UI/UX
        return (
            <div className='loader-main'>
                <div class="loader"></div>;
            </div>

        )
    }
    const onSearch = (value, _e, info) => console.log(info?.source, value);

    return (
        <div className="writing">
            <Navbar />
            <div className='tab-container'>
                <Tab.Group>
                    <Tab.List className="tabs-member">
                        {data.map((item) => (
                            <Tab key={item.id} className='tab-test'>
                                {({ selected }) => (
                                    <div className={`tab ${selected ? 'tab-active' : 'tab-inactive'}`}>
                                        {item.status}
                                    </div>
                                )}
                            </Tab>
                        ))}

                    </Tab.List>
                    <input
                        className='tabs-search'
                        placeholder="input search text"
                        onSearch={onSearch}
                    />
                    <hr style={{ color: 'white' }} />
                    <Tab.Panels className='tabs-panels' >
                        {data.map((item) => (
                            <Tab.Panel key={item.id}>
                                <div className='tabs-data'>
                                    <div>
                                        <div className='tabs-data-mentor'>
                                            <Avatar
                                                size={60}
                                                src={item.material[0].photoURL}
                                                className='data-mentor-img'
                                            />
                                            <p>{item.material[0].mentorName}</p>
                                        </div>
                                        <div className='tabs-data-materi'>
                                            <img className='' src={item.material[0].image} alt={item.material[0].title} />
                                            <div className=''>
                                                <p className='data-materi-title'>{item.material[0].title}</p>
                                                <p className='data-materi-price'>Rp. {(parseFloat(item.price) - 5000).toLocaleString()}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='data-right'>
                                        <div className='data-materi-margin'>
                                            <p
                                                className={`data-materi-status ${item.status === 'completed' ? 'green'
                                                    : item.status === 'refund' ? 'red'
                                                        : item.status === 'waiting' ? 'gray'
                                                            : item.status === 'active' ? 'blue'
                                                                : ''
                                                    }`}
                                            >
                                                {item.status}
                                            </p>
                                        </div>
                                        <div>
                                            <ButtonStyled className='data-materi-rate'>Rate</ButtonStyled>
                                            <ButtonStyled className='data-materi-contact'>Contact Mentor</ButtonStyled>
                                        </div>
                                    </div>

                                </div>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>

            </div>

            <Footer />
        </div>
    );
};

export default MemberClass;
