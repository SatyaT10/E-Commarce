import React, { useEffect, useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
// import "../ProfilePage.css";

function ProfilePage() {

    const [logInUser, setLogInUser] = useState(null);
    const navigate = useNavigate()
    const token1 = localStorage.getItem('jwtToken')
    console.log("Token On profile",token1);
    
    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token')
            console.log(token);
            if (!token) {
                navigate('/login')
            }
            // const token = localStorage.getItem('token');
            console.log(token);
            const url = "http://localhost:8000/get-user";
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token
                }
            })
            console.log(response);
            const data = await response.json()
            const { success, message, error, userDaitle } = data
            if (success) {
                console.log(message);
                console.log(JSON.stringify(userDaitle));
                setLogInUser(userDaitle)
                localStorage.setItem("token", token);
                localStorage.setItem('userDaitle', JSON.stringify(userDaitle));
            } else if (error) {
                console.log(error.message);
            } else if (!success) {
                console.log(message);
            } else {
                return console.log(message);
            }
        }
        fetchData();
    }, [])
    const handleLogout = async (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        setTimeout(() => {
            navigate('/login')
        }, 1000)
    }



    return (
        <div className="profile-container">
            <h1>Hello!</h1>
            {logInUser ? (
                <>
                <div>
                <h1>Welcome, {logInUser.name}</h1>
            <Link to="/admin/dashboard" className="dashboard-link">
                Dashboard
            </Link>
                </div>
                    <div className="profile-card">
                        <div className="profile-info">
                            <h2>Welcome, {logInUser.name}</h2>
                            <p><strong>Email: </strong>{logInUser.email}</p>
                        </div>
                    </div>
                    <div className="profile-actions">

                        <button className="logout-btn" onClick={handleLogout}>Logout</button>
                    </div>
                </>
            ) : (
                <p>user Loggedout.....</p>
            )}
            <ToastContainer/>
        </div>
    );
}




export default ProfilePage;
