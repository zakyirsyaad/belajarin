import React from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
    },
    {
        title: 'Action',
        key: 'action',
        dataIndex: 'action'
    },
];

const data = [
    {
        key: '',
        name: 'as',
        age: '',
        address: '',
        tags: '',
        action: ''
    },
];
const DataMentorClass = () => <Table columns={columns} dataSource={data} />;
export default DataMentorClass;