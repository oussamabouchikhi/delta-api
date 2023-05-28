import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.kucoin.com/api/v1', // KuCoin API endpoint
});

apiClient.interceptors.request.use((config) => {
  config.headers['KC-API-KEY'] = 'YOUR_API_KEY'; // Replace with your API Key ID
  config.headers['KC-API-SECRET'] = 'YOUR_API_KEY_SECRET'; // Replace with your API Key Secret
  return config;
});

export default apiClient;
