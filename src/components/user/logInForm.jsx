import React, { useState } from "react";
import "../../styles/login.css";

const LogInForm = ({ onLogIn }) => {
    const [userData, setUserData] = useState({ userName: "", password: "" });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogIn(userData);
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
                <input type="text" name="userName" placeholder="Username" value={userData.userName} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={userData.password} onChange={handleChange} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LogInForm;
