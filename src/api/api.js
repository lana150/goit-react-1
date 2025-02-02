import axios from "axios";

export const api = axios.create({
  baseURL: "https://connections-api.goit.global",
});

// Функція для встановлення заголовка авторизації (токена)
export const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Функція для очищення заголовка авторизації
export const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = "";
};




/*import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://67967c99bedc5d43a6c56b60.mockapi.io',
});*/
