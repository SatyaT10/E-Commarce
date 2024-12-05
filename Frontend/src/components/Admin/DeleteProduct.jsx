import React from 'react';
// import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteProduct = () => {
    const navigate=useNavigate()
    const { id } = useParams();
    const token=localStorage.getItem('token')
    const handleDelete = async () => {
        try {
            const url = "http://localhost:8000/admin/delete-product"
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `${token}`
                        },
                        body: JSON.stringify({ id: id })
                    });
            alert('Product deleted successfully!');
                    
            setTimeout(() => {
                navigate('/admin')
            }, 2000);
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="create-product-container">
            <h2>Are you sure you want to delete this product?</h2>
            <button onClick={handleDelete} >Delete</button>
        </div>
    );
};

export default DeleteProduct;
