import axios from 'axios';

export const getAllPatients = () => {
    return axios.get('http://localhost:8000/api/Patient/')
}