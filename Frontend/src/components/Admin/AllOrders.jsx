import React, { useEffect, useState } from 'react';

const Read = () => {

    const [orders, setOrders] = useState([]);
    const token = localStorage.getItem('token')

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const url = "http://localhost:8000/admin/get-all-order"
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${token}`
                    },
                });
                const data = await response.json()
                setOrders(data.orders);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">View Orders</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto bg-white shadow-lg rounded-md">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="px-4 py-2">Order ID</th>
                            <th className="px-4 py-2">User Name</th>
                            <th className="px-4 py-2">Product</th>
                            <th className="px-4 py-2">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id}>
                                <td className="border px-4 py-2">{order._id}</td>
                                <td className="border px-4 py-2">{order.userName}</td>
                                <td className="border px-4 py-2">{order.product}</td>
                                <td className="border px-4 py-2">${order.price}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Read;
