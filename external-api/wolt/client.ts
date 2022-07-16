import axios from 'axios';

export const clinet = axios.create({
    baseURL: 'https://restaurant-api.wolt.com/v1',
});
