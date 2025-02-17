import React, { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/user/userForm";
import CustomLoader from "../components/common/customLoader";


const RegisterPage = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleRegister = async (userData) => {

        try {
            setLoading(true);
            const response = await registerUser(userData);
            if (response.data?.status) {
                alert(response.data?.message);
                navigate("/");
            } else {
                alert(response.data?.message);
            }
        } catch (error) {
            console.error("Registration failed:", error.message);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {loading && <CustomLoader size={50} color="primary" />}
            <RegisterForm onRegister={handleRegister} />
        </div>
    );
};

export default RegisterPage;
