import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Landing = (props) => {
    const navigate = useNavigate()
    // states (Regiter; Login; Errors)
    const [register, setRegister] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        register: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        login: {
            email: "",
            password: ""
        }
    })
    // ------------------------------------

    // handle onChange for registre inputs
    const handleRegisterChange = (e) => {
        e.preventDefault();
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        })
    }

    // handle onChange for login inputs
    const handleLoginChange = (e) => {
        e.preventDefault();
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }
    // -----------------------------------

    //=========================
    // when forms are submitted
    // ========================
    // Handle register form onSumbit 
    const registerHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/register", register, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                setRegister({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                })
                setErrors({
                    register: {
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        confirmPassword: ""
                    },
                    login: {
                        email: "",
                        password: ""
                    }
                })
            })
            .catch(err => setErrors({
                ...errors,
                register: err.response.data
            }))


    }
    // Handle login form onSumbit
    const loginHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/login", login, { withCredentials: true })
            .then(res => {
                console.log("Cookie be like", document.cookie);
                console.log("Data be like", res.data);
                navigate('/movies');
            })
            .catch(err => console.log(err.response));

    }



    return (
        <div>
            <div className="container ">
                <div className="row mt-3">
                    {/* Register Section */}
                    <div className="register col bg-light ">
                        <h2>Register</h2>
                        <form className='col-8' onSubmit={registerHandler}>
                            <div className="mb-3">
                                <label className="form-label">First name</label>
                                <input name="firstName" onChange={handleRegisterChange} type="text" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Last name</label>
                                <input name="lastName" onChange={handleRegisterChange} type="text" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input name="email" onChange={handleRegisterChange} type="email" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input name="password" onChange={handleRegisterChange} type="password" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Confirm password</label>
                                <input name="confirmPassword" onChange={handleRegisterChange} type="password" className="form-control" />
                            </div>

                            <button type="submit" className="btn btn-success">Register</button>
                            {errors.register ? Object.entries(errors.register).map(([key, value], index) => value ? <p style={{ color: "red" }} key={index}>{JSON.stringify(value.message)}</p> : null) : null}
                        </form>
                    </div>
                    {/* // empty col div for spacing */}
                    <div className="col-3"></div>
                    {/* Login Section */}
                    <div className="login col bg-light">
                        <h2>Login</h2>
                        <form className='col-8' onSubmit={loginHandler}>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input name="email" onChange={handleLoginChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else 😅</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input name="password" onChange={handleLoginChange} type="password" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" className="btn btn-primary">Login</button>
                            {errors.register ? Object.entries(errors.login).map(([key, value], index) => value ? <p style={{ color: "red" }} key={index}>{JSON.stringify(value.message)}</p> : null) : null}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing