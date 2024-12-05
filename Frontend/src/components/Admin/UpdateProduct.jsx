import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
    const navigate=useNavigate()
    const { id } = useParams();
    console.log(id);
    const token=localStorage.getItem('token')
    
    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: '',
        image: '',
        sizes: [{ size: '', available_quantity: '' }],
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const url = "http://127.0.0.1:8000/admin/get-product"
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `${token}`
                        },
                        body: JSON.stringify({ id: id })
                    });
                    const data=await response.json()
                    
                setProduct(data.product);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleSizeChange = (index, e) => {
        const { name, value } = e.target;
        const updatedSizes = [...product.sizes];
        updatedSizes[index] = { ...updatedSizes[index], [name]: value };
        setProduct({ ...product, sizes: updatedSizes });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {

            const url = "http://localhost:8000/admin/update-product"
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `${token}`
                        },
                        body: JSON.stringify({
                            id: id,
                            product: product
                        })

                    });
            alert('Product updated successfully!');
            setTimeout(() => {
                navigate('/admin')
            }, 2000);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div className="create-product-container">
            <h2>Edit Product</h2>
            <form onSubmit={handleUpdate} className="create-product-form">
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                    />
                </div>
                <div className="form-group"> 
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                    />
                </div >
                <div className="form-group">
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label>Image URL</label>
                    <input
                        type="text"
                        name="image"
                        value={product.image}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                    />
                </div>
                <div className="sizes-section">
                    <h3>Sizes</h3>
                    {product.sizes.map((size, index) => (
                        <div key={index} className="size-group">
                            <input
                                type="text"
                                name="size"
                                placeholder="Size"
                                value={size.size}
                                onChange={(e) => handleSizeChange(index, e)}
                                className="input-field size-input"
                            />
                            <input
                                type="number"
                                name="available_quantity"
                                placeholder="Available Quantity"
                                value={size.available_quantity}
                                onChange={(e) => handleSizeChange(index, e)}
                                className="input-field size-input"
                            />
                        </div>
                    ))}
                </div>
                <button type="submit" className="submit-button">Update Product</button>
            </form>
        </div>
    );
};

export default EditProduct;
