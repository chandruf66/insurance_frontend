import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5050/api' });

export const uploadFile = (formData) => API.post('/system/upload', formData);
export const scheduleMessage = (data) => API.post('/system/schedule', data);
export const searchPolicies = (username) => API.get(`/policies/search/${username}`);
export const getAggregates = () => API.get('/policies/aggregate');
