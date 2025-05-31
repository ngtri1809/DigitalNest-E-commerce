import axios from 'axios';

const API = axios.create({
  baseURL: 'https://cart-api.alexrodriguez.workers.dev/'
});

export const fetchProducts = () => API.get('/products');
export const fetchProductById = (id) => API.get(`/products/${id}`);