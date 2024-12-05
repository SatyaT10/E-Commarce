import React, { useState } from 'react';
import './NewProduct.css'; // Assuming you'll add the CSS in this file
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
    const token=localStorage.getItem('token')
    const navigate=useNavigate()
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [sizes, setSizes] = useState([{ size: '', available_quantity: '' }]);

    const handleAddSize = () => {
        setSizes([...sizes, { size: '', available_quantity: '' }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const url = "http://localhost:8000/admin/create-product"
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                },
                body: JSON.stringify({
                title,
                description,
                price,
                image,
                sizes,
                })
            });
            alert('Product Created Successfully!');

            setTimeout(() => {
                navigate('/admin')
            }, 2000);

        } catch (error) {
            console.error('Error creating product', error);
        }
    };

    return (
        <div className="create-product-container">
            <h2>Create Product</h2>
            <form onSubmit={handleSubmit} className="create-product-form">
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label>Image URL</label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                        className="input-field"
                    />
                </div>
                <div className="sizes-section">
                    <h3>Sizes</h3>
                    {sizes.map((size, index) => (
                        <div key={index} className="size-group">
                            <input
                                type="text"
                                placeholder="Size"
                                value={size.size}
                                onChange={(e) => {
                                    const updatedSizes = [...sizes];
                                    updatedSizes[index].size = e.target.value;
                                    setSizes(updatedSizes);
                                }}
                                className="input-field size-input"
                            />
                            <input
                                type="number"
                                placeholder="Available Quantity"
                                value={size.available_quantity}
                                onChange={(e) => {
                                    const updatedSizes = [...sizes];
                                    updatedSizes[index].available_quantity = e.target.value;
                                    setSizes(updatedSizes);
                                }}
                                className="input-field size-input"
                            />
                        </div>
                    ))}
                    <button type="button" onClick={handleAddSize} className="add-size-button">
                        Add Size
                    </button>
                </div>
                <button type="submit" className="submit-button">
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;
