import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
const { Meta } = Card;

const CardClass = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(' https://api.escuelajs.co/api/v1/products?offset=0&limit=4')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, []);

    return (
        <div className='popular-card'>
            {data.map((item) => (
                <NavLink to={`${item.id}`} id='card-link'>
                    <Card
                        key={item.id}  // Add a unique key for each Card
                        style={{
                            width: 300,
                            marginRight: 49,
                            marginBottom: 50,
                            fontFamily: "inter"
                        }}
                        hoverable
                        cover={<img className='class-img' alt="example" src={item.images} />}
                        headerFontSize={20}
                    >
                        <>
                            <p className='class-desc'>{item.description}</p>
                            <p className='class-title'>{item.title}</p>
                        </>
                        <div className='class-text'>
                            <StarFilled />
                            <p>4.9</p>
                        </div>
                        <p className='class-harga'>${item.price}</p>
                    </Card>
                </NavLink>

            ))}
        </div>
    );
};

export default CardClass;
