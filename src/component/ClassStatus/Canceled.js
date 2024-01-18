import React from 'react'
import { Avatar } from 'antd';
import { Tab } from '@headlessui/react';
import ButtonStyled from '../Elements/Button/Button';

export default function Canceled() {
    return (
        <>
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
        </>
    )
}
