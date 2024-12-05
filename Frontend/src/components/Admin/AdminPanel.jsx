import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-gray-800 p-4 text-white">
                <div className="flex justify-between">
                    <h1 className="text-xl font-bold">Admin Panel</h1>
                    <div>
                        <Link to="/" className="mr-4">Home</Link>
                        <Link to="/allorder" className="mr-4">Orders</Link>
                    </div>
                </div>
            </nav>
            <div className="p-6">
                <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white shadow-lg p-4 rounded-md text-center">
                        <h3 className="text-xl">Total Orders</h3>
                        <p className="text-2xl">150</p>
                    </div>
                    <div className="bg-white shadow-lg p-4 rounded-md text-center">
                        <h3 className="text-xl">Total Products</h3>
                        <p className="text-2xl">300</p>
                    </div>
                    <div className="bg-white shadow-lg p-4 rounded-md text-center">
                        <h3 className="text-xl">Total Users</h3>
                        <p className="text-2xl">500</p>
                    </div>
                </div>

                {/* CRUD Operation Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <Link to="/newproduct" className="bg-green-500 text-white p-4 rounded-md text-center shadow-lg hover:bg-green-700">
                        <h3 className="text-xl">Add New Product </h3>
                    </Link>
                    <Link to="/view-products" className="bg-blue-500 text-white p-4 rounded-md text-center shadow-lg hover:bg-blue-700">
                        <h3 className="text-xl">View All Product</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
