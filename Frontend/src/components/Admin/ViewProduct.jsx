import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ViewProducts = () => {
    const [orders, setProducts] = useState([]);

    const navigate = useNavigate()
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = localStorage.getItem('token')
                console.log(token);
                
                if (!token) {
                    navigate('/login')
                } else {
                    const url = "http://localhost:8000/admin/get-all-products"
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `${token}`
                        },
                    });
                    const data =await response.json()
                    console.log(data.products);
                    setProducts(data.products);
                }
                
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">View Products</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto bg-white shadow-lg rounded-md">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="px-4 py-2">Title</th>
                            <th className="px-4 py-2">Decription</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Edit</th>
                            <th className="px-4 py-2">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id}>
                                <td className="border px-4 py-2">{order.title}</td>
                                <td className="border px-4 py-2">{order.decription}</td>
                                <td className="border px-4 py-2">${order.price}</td>
                                <td className="border px-4 py-2"><Link to={`/update-product/${order._id}`} className="mr-4">Edit</Link></td>
                                <td className="border px-4 py-2"><Link to={`/delete/${order._id}`} className="mr-4">Delete</Link></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewProducts;
