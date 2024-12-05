import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { handleError, handleSuccess } from '../util'

function signup() {
    const navigate = useNavigate()
    const [signupInfo, setsignupInfo] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copysignupInfo = { ...signupInfo }
        copysignupInfo[name] = value;
        setsignupInfo(copysignupInfo);
    }
    console.log(signupInfo);

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;
        if (!name || !email || !password) {
            return handleError("All  fields are required !");

        }
        try {
            const url = "http://localhost:8000/user/signup"
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signupInfo)
            });
            const data = await response.json();
            const { success, message, error } = data
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login')
                },5000)
            } else if (error) {
                handleError(error.details[0].message)
            }
            else if (!success) {
                setTimeout(() => {
                    navigate('/login')
                },5000)
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
        <div className="container">
            <h2>
                Sign up
            </h2>
            <form onSubmit={handleSignup} action="">
                <div className="form-group">
                    <label htmlFor='name'>Name</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        name='name'
                        id="exampleInputName"
                        autoFocus
                        placeholder="Enter Your Name"
                    />
                </div>
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
                <button>Signup</button>
                <span>
                    Already have an account?
                    <Link to="/login">Login</Link>
                </span>

            </form>
            <ToastContainer />
        </div>
    )
}

export default signup