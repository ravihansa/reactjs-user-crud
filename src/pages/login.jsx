import React, { useState, useContext } from "react";
import { logInUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import LogInForm from "../components/user/logInForm";
import CustomAlert from "../components/common/customAlert";
import CustomLoader from "../components/common/customLoader";

const LogInPage = () => {

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ open: false, message: "", severity: "" });

    const handleLogIn = async (userData) => {
        try {
            setLoading(true);
            const response = await logInUser(userData);
            if (response.data?.status) {
                const token = response.data.data?.accessToken;
                login(token); // Store the token in AuthContext
                navigate("/");
                setAlert({ open: true, message: response.data?.message, severity: "success" });
            } else {
                setAlert({ open: true, message: response.data?.message, severity: "error" });
            }
        } catch (err) {
            setAlert({ open: true, message: err?.message, severity: "error" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <LogInForm onLogIn={handleLogIn} />
            <CustomAlert
                open={alert.open}
                onClose={() => setAlert({ ...alert, open: false })}
                severity={alert.severity}
                message={alert.message}
            />
            {loading && <CustomLoader size={50} color="primary" />}
        </div>
    );
};

export default LogInPage;
