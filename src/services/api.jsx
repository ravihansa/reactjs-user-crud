import axios from "axios";
const apiBaseUrl = import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: apiBaseUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("jwt");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const logInUser = async (userData) => {
    return axios.post(`${apiBaseUrl}/auth/login`, userData);
};

export const registerUser = async (userData) => {
    return await api.post(`/users`, userData);
};

export const getAllUsers = async () => {
    return api.get(`/users/list`);
};

export const updateUser = async (userId, userData) => {
    return api.patch(`/users/${userId}`, userData);
};

export const deleteUser = async (userId) => {
    return api.delete(`/users/${userId}`);
};
