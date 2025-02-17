import React, { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/user/userForm";
import CustomAlert from "../components/common/customAlert";
import CustomLoader from "../components/common/customLoader";


const RegisterPage = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ open: false, message: "", severity: "" });

    const handleRegister = async (userData) => {

        try {
            setLoading(true);
            const response = await registerUser(userData);
            if (response.data?.status) {
                setAlert({ open: true, message: response.data?.message, severity: "success" });
                navigate("/");
            } else {
                setAlert({ open: true, message: response.data?.message, severity: "error" });
            }
        } catch (error) {
            console.error("Registration failed:", error.message);
            setAlert({ open: true, message: error?.message, severity: "error" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {loading && <CustomLoader size={50} color="info" />}
            <RegisterForm onRegister={handleRegister} />
            <CustomAlert
                open={alert.open}
                onClose={() => setAlert({ ...alert, open: false })}
                severity={alert.severity}
                message={alert.message}
            />
        </div>
    );
};

export default RegisterPage;
