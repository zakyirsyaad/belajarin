import React, { useState, useEffect } from 'react';
import { Input, Modal, Select, Spin, Upload, message } from 'antd';
import ButtonStyled from '../../component/Elements/Button/Button';
import DataMentorClass from '../../component/Elements/DataMentorClass';
import categoryData from '../../category.json';
import toast from 'react-hot-toast';

const { Option } = Select;

export default function MentorClass() {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [learningPath, setLearningPath] = useState('');
    const [price, setPrice] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    const [selectedSubMenu, setSelectedSubMenu] = useState(null);
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Set data from the local JSON file
        setCategories(categoryData);
    }, []);

    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
        setSelectedSubCategory(null);
        setSelectedSubMenu(null);
    };

    const handleSubCategoryChange = (value) => {
        setSelectedSubCategory(value);
        setSelectedSubMenu(null);
    };

    const handleSubMenuChange = (value) => {
        setSelectedSubMenu(value);
    };

    const handleFormSubmit = async () => {
        try {
            setLoading(true);

            // Mendapatkan data dari localStorage
            const user = JSON.parse(localStorage.getItem('user'));
            const uid = JSON.parse(localStorage.getItem('uid'));

            const formData = new FormData();
            formData.append('title', title);
            formData.append('learningPath', learningPath);
            formData.append('price', price);
            formData.append('mentor_id', uid);
            formData.append('mentor_name', user);
            formData.append('category', selectedCategory);
            formData.append('subCategory', selectedSubCategory);
            formData.append('subMenu', selectedSubMenu);
            if (file) {
                formData.append('file', file.originFileObj);
            }

            const response = await fetch(`https://belajarin-tau.vercel.app/HomeMentor/${user}/${uid}/addMateri`, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Materi added successfully');
                // Handle any additional logic after successful submission
                setOpen(false);
                toast.success('berhasil');
            } else {
                console.error('Failed to add Materi:', response.statusText);
                toast.error('eror');
                // Handle error scenario
            }
        } catch (error) {
            console.error('Error submitting Materi:', error);
        } finally {
            setLoading(false);
        }
    };

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        return isJpgOrPng;
    };

    const handleChange = (info) => {
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
            setFile(info.file);
        } else if (info.file.status === 'error') {
            console.error(`${info.file.name} file upload failed.`, info.file.response);
            message.error(`${info.file.name} file upload failed. Please check the console for details.`);
        }
    };

    return (
        <div>
            <div className='header-class'>
                <p>Courses</p>
                <ButtonStyled onClick={() => setOpen(true)}>+ Course</ButtonStyled>
                <Modal
                    title='Add Your Class'
                    centered
                    visible={open}
                    onOk={handleFormSubmit}
                    onCancel={() => setOpen(false)}
                    width={800}
                >
                    <Spin spinning={loading}>
                        <form>
                            <Input
                                type='text'
                                placeholder='Title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <Input.TextArea
                                placeholder='Learning Path'
                                value={learningPath}
                                onChange={(e) => setLearningPath(e.target.value)}
                            />
                            <Input
                                placeholder='Price'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                            <div>
                                <Select
                                    placeholder='Select Category'
                                    onChange={handleCategoryChange}
                                    value={selectedCategory}
                                >
                                    {categories.map((category) => (
                                        <Option key={category.category_id} value={category.category_id}>
                                            {category.category_title}
                                        </Option>
                                    ))}
                                </Select>

                                {selectedCategory && (
                                    <Select
                                        placeholder='Select Subcategory'
                                        onChange={handleSubCategoryChange}
                                        value={selectedSubCategory}
                                    >
                                        {categories
                                            .find((category) => category.category_id === selectedCategory)
                                            .subCategory.map((subCategory) => (
                                                <Option key={subCategory.sub_id} value={subCategory.sub_id}>
                                                    {subCategory.sub_title}
                                                </Option>
                                            ))}
                                    </Select>
                                )}

                                {selectedSubCategory && (
                                    <Select
                                        placeholder='Select Submenu'
                                        onChange={handleSubMenuChange}
                                        value={selectedSubMenu}
                                    >
                                        {categories
                                            .find((category) => category.category_id === selectedCategory)
                                            .subCategory.find((subCategory) => subCategory.sub_id === selectedSubCategory)
                                            .subMenu.map((submenu) => (
                                                <Option key={submenu.id} value={submenu.id}>
                                                    {submenu.title}
                                                </Option>
                                            ))}
                                    </Select>
                                )}
                            </div>
                            <Upload
                                name='file'
                                showUploadList={false}
                                beforeUpload={beforeUpload}
                                onChange={handleChange}
                            />
                        </form>
                    </Spin>
                </Modal>
            </div>

            <div>
                <DataMentorClass />
            </div>
        </div>
    );
}
