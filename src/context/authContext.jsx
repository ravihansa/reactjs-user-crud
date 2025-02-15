import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("jwt") || null);

    useEffect(() => {
        if (token) {
            localStorage.setItem("jwt", token);
        } else {
            localStorage.removeItem("jwt");
        }
    }, [token]);

    const login = (jwtToken) => {
        setToken(jwtToken);
    };

    const logout = () => {
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
