import React, { useEffect, useState } from 'react';
import { Table, Pagination } from 'antd';
import axios from 'axios';

const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        sorter: (a, b) => a.title.localeCompare(b.title),
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
        sorter: (a, b) => a.price - b.price,
    },
];

const DataMentorClass = () => {
    const [data, setData] = useState([]);
    const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 0 });

    const user = localStorage.getItem('user')
    const uid = localStorage.getItem('uid')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://belajarin-tau.vercel.app/HomeMentor/${user}/${uid}`);
                const sortedData = response.data.materiData.sort((a, b) => a.title.localeCompare(b.title));
                setPagination({ ...pagination, total: sortedData.length });
                setData(sortedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleTableChange = (pagination, filters, sorter) => {
        console.log('Table change:', pagination, filters, sorter);
        // Update current page
        setPagination({ ...pagination, current: pagination.current });
    };

    const handlePaginationChange = (page, pageSize) => {
        console.log('Pagination change:', page, pageSize);
        // Update current page
        setPagination({ ...pagination, current: page });
    };

    return (
        <>
            <Table
                columns={columns}
                dataSource={data}
                pagination={pagination}
                onChange={handleTableChange}
            />
        </>
    );
};

export default DataMentorClass;
