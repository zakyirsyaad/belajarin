import { Avatar } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { TypeAnimation } from 'react-type-animation';

export default function DisplayNameMentor() {
    const auth = useSelector(state => state.auth);

    let greetingMessage = "";

    if (auth) {
        greetingMessage = `Hello, ${auth.user}`;
    } else {
        greetingMessage = `Hello, ${auth.user}`;
    }



    return (
        <div className='display-name-mentor'>
            <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                src={''}
            />
            <div className='text-name-mentor'>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        greetingMessage,
                        1000,
                        `Hello,`,
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    style={{
                        color: 'white',
                        fontSize: '30px',
                        fontWeight: '600'
                    }}
                />
                <p className='text-community'>GDSC UII</p>
            </div>
        </div>
    )
}
