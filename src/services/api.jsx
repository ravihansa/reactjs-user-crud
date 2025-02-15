import axios from "axios";
const apiBaseUrl = import.meta.env.VITE_API_URL;


export const registerUser = async (userData) => {
    return await axios.post(`${apiBaseUrl}/users`, userData);
};

export const getAllUsers = async () => {
    return axios.get(`${apiBaseUrl}/users/list`);
};

export const updateUser = async (userId, userData) => {
    return axios.patch(`${apiBaseUrl}/users/${userId}`, userData);
};

export const deleteUser = async (userId) => {
    return axios.delete(`${apiBaseUrl}/users/${userId}`);
};

export const logInUser = async (userData) => {
    return axios.post(`${apiBaseUrl}/auth/login`, userData);
};
