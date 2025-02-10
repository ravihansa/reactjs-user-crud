import React, { useState } from "react";
import "../../styles/userForm.css";

const RegisterForm = ({ onRegister }) => {
    const [userData, setUserData] = useState({
        fName: "",
        lName: "",
        userName: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister(userData);
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="fName" placeholder="First Name" onChange={handleChange} required />
                <input type="text" name="lName" placeholder="Last Name" onChange={handleChange} required />
                <input type="text" name="userName" placeholder="Username" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;
