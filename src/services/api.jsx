import axios from "axios";
const apiBaseUrl = import.meta.env.VITE_API_URL;


export const registerUser = async (userData) => {
    return await axios.post(`${apiBaseUrl}/users`, userData);
};

export const getAllUsers = async () => {
    return axios.get(`${apiBaseUrl}/users/list`);
};
