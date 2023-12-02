import axios from 'axios';

const BaseURL = 'https://fakestoreapi.com/products/';

const axiosRequest = async (url, method = 'get', data = null) => {
    try {
        const response = await axios({
            method: method,
            url: BaseURL + url,
            data: data,
        });
        return response.data;
    } catch (error) {
        // Log the error or handle it in some way (e.g., show a user-friendly message)
        console.error(`Error in Axios request to ${BaseURL + url}:`, error);
        throw error; // Re-throwing the error for further handling, if needed
    }
};

export default axiosRequest;
