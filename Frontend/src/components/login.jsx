import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { handleError, handleSuccess } from '../util'
import '../login.css'

function login() {
    const navigate = useNavigate()
    const [loginInfo, setloginInfo] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        const copyloginInfo = { ...loginInfo }
        copyloginInfo[name] = value;
        setloginInfo(copyloginInfo);

    }
    console.log(loginInfo);

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError("All  fields are required !");
        }
        try {
            const url = "http://localhost:8000/user/login"
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginInfo)
            });
            const data = await response.json();
            console.log(data);
            
            const { success, message, token, name, error } = data
            if (success) {
                
                console.log(message);
                handleSuccess(message);
                localStorage.setItem('token', token);
                localStorage.setItem('loggedInUser', name);
                
            } else if (error) {
                handleError(error.details[0].message)
            }
            else if (!success) {
                handleError(message)
            }
            else {
                return handleError(message);
            }
        } catch (error) {
            handleError(error)
        }
    }


    return (
        <div className="container-log">
            <h2>
                Login
            </h2>
            <form onSubmit={handleLogin} >

                <div className="form-group">
                    <label
                        htmlFor='email'>Email</label>
                    <input
                        onChange={handleChange}
                        type="email"
                        className="form-control"
                        name='email'
                        id="exampleInputEmail"
                        placeholder="Enter Your Email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password</label>
                    <input
                        onChange={handleChange}
                        type="password"
                        className="form-control"
                        name='password'
                        id="exampleInputPassword"
                        placeholder="Enter Your Password"
                    />
                </div>
                <button>Login</button>
                <span>
                    Don't have an account?
                    <Link to="/signup">Signup</Link>
                </span>

            </form>
            <ToastContainer />
        </div>
    )
}

export default login