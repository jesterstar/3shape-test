import axios from 'axios';

import { config } from './../../configs';
import ErrorHandler from './../errorHandler';

/**
 * ApiService
 */
class ApiService {

    /**
     * Get all books request
     */
    getBooks() {
        return axios(
            {
                method: 'GET',
                baseURL: `${config.api.url}`,
                url: `${config.api.books}`,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {
                if (res.error) throw res;
                return res.data;
            })
            .catch((e) => {
                new ErrorHandler(e);
            });
    }
}

export default new ApiService();