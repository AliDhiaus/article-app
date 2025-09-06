import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiAuth = (token) => axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Barier ${token}`,
    'Content-Type': 'application/json',
  },
});

export const apiFile = (token) => axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`
  }
})