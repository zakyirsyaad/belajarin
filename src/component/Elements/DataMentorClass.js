import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Learning Path',
        dataIndex: 'learningPath',
        key: 'learningPath',
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
    },
    {
        title: 'Sub Category',
        dataIndex: 'subCategory',
        key: 'subCategory',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
];

const DataMentorClass = () => {
    const [data, setData] = useState([]);

    const user = localStorage.getItem('user')
    const uid = localStorage.getItem('uid')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://belajarin-tau.vercel.app/HomeMentor/${user}/${uid}`);
                setData(response.data.materiData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return <Table columns={columns} dataSource={data} />;
};

export default DataMentorClass;
