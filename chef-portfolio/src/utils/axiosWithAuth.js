import axios from 'axios';

const token = localStorage.getItem('token');

const axiosWithAuth = () => {
    
    return axios.create({
        baseURL: 'https://chef-portfolio-backend.herokuapp.com/',
        headers: {
            Authorization: token
        }
    });
};

export default axiosWithAuth;