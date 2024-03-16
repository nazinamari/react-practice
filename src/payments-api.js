import axios from 'axios';

axios.defaults.baseURL = "https://65c23f3af7e6ea59682af8d1.mockapi.io";

export const getPayments = async () => {
    const response = await axios.get('/payments');
    return response.data;
}