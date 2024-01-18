import React, { useState, useEffect } from 'react';
import { Input, Modal, Select, Spin } from 'antd';
import ButtonStyled from '../../component/Elements/Button/Button';
import DataMentorClass from '../../component/Elements/DataMentorClass';
import categoryData from '../../category.json';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addMateri } from '../../Redux/authSlice';

const { Option } = Select;

export default function MentorClass() {
    const [open, setOpen] = useState(false);

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

    const [title, setTitle] = useState('');
    const [learningPath, setLearningPath] = useState('');
    const [price, setPrice] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    const [selectedSubMenu, setSelectedSubMenu] = useState(null);
    const [file, setFile] = useState([]);

    const uid = localStorage.getItem("uid")



    const { loading, error } = useSelector((state) => state.auth);

    const dispatch = useDispatch()

    const addHandle = () => {
        // Kumpulkan data formulir
        const formData = {
            title,
            learningPath,
            price, // Tambahkan data formulir lainnya
            selectedCategory,
            selectedSubCategory,
            selectedSubMenu,
            file,
            uid
        };

        // Kirim data registrasi pengguna
        dispatch(addMateri(formData))
            .then(() => {
                setOpen(false); // Close the modal on success
            })
            .catch((err) => {
                toast.error('Error adding course');
                console.error('Error adding course:', err.message);
            });

        // Reset form fields after submission
        setTitle('');
        setLearningPath('');
        setPrice('');
        setSelectedCategory(null);
        setSelectedSubCategory(null);
        setSelectedSubMenu(null);
        setFile(null);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };





    return (
        <div>
            <div className='header-class'>
                <p>Courses</p>
                {error && <p>Error: {error}</p>}
                <ButtonStyled onClick={() => setOpen(true)}>+ Course</ButtonStyled>
                <Modal
                    title='Add Your Class'
                    centered
                    visible={open}
                    onOk={addHandle}
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
                            <input type="file" onChange={handleFileChange} />
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
