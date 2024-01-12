import React, { useState } from 'react';
import { Modal, Radio, Button } from 'antd';
import ButtonStyled from '../Button/Button';
import { NavLink } from 'react-router-dom';
import FormMember from '../form/FormMember';
import FormMentor from '../form/FormMentor';

const Join = () => {
    const [visible, setVisible] = useState(false);
    const [loginType, setLoginType] = useState(null);
    const [user, setUser] = useState('')

    const handleButtonClick = (type) => {
        setLoginType(type);
        setVisible(true);
    };

    const handleModalClose = () => {
        setVisible(false);
        setLoginType(null);
        window.location.pathname = '/'
    };

    return (
        <>
            <ButtonStyled onClick={() => setVisible(true)}>
                Join
            </ButtonStyled>
            <Modal
                title={<div className="modalTitle">Select the role you want to Register</div>}
                centered
                visible={visible}
                onOk={handleModalClose}
                onCancel={handleModalClose}
                width={500}
            >
                <ButtonStyled id='join-option'
                    onClick={() => handleButtonClick('member')}
                >
                    Member
                </ButtonStyled>
                <ButtonStyled id='join-option'
                    onClick={() => handleButtonClick('mentor')}
                >
                    Mentor
                </ButtonStyled>

                {loginType === 'member' && <FormMember />}
                {loginType === 'mentor' && <FormMentor />}
            </Modal >
        </>
    );
};

export default Join;
