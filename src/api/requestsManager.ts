// --- --- --- --- R E Q U E S T --- M A N A G E R --- --- --- --- //
import { REQUEST_SETTINGS } from '../services';
import axios from 'axios';


const userToken: string | null = localStorage.getItem('userToken');
// console.log(userToken);

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
  headers: {
    'Accept': 'application/json'
  }
})

interface LoginResponse {
  status: number
  message: string
  body?: LoginBodyResponse
}

interface LoginBodyResponse {
  token: string
}

// login
export const login = async (email: string, password: string) : Promise<LoginResponse> => {
  return await axiosInstance
    .post('/user/login', {
      email: email,
      password: password
    })
    .then((response) => {
      console.log(response.status);
      return response.data;
    }
  )
}

//getProfile
export const getProfile = async () : Promise<any> => {
  return await axiosInstance
    .post('/user/profile')
    .then((response) => {
      console.log(response.data)
      return response.data
    }
  )
}

// updateProfile
export const updateProfile = async (firstName: string, lastName: string) : Promise<any> => {
  return await axiosInstance
    .put('/user/profile', {
      firstName: firstName,
      lastName: lastName
    })
    .then((response) => {
      console.log(response.data)
      return response.data
    }
  )
};


