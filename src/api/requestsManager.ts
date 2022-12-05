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


// --- --- --- --- --- --- --- --- L O G I N --- --- --- --- --- --- --- --- //
interface LoginResponse {
  status: number
  message: string
  body?: LoginBodyResponse
}
interface LoginBodyResponse {
  token: string
}

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

// --- --- --- --- --- --- --- --- G E T P R O F I L E --- --- --- --- --- --- --- --- //
interface GetProfileResponse {
  status: number
  message: string
  body?: GetProfileBodyResponse
}
interface GetProfileBodyResponse {
  createdAt: string
  email: string
  firstName: string
  id: string
  lastName: string
  updatedAt: string
}

export const getProfile = async () : Promise<GetProfileResponse> => {
  return await axiosInstance
    .post('/user/profile')
    .then((response) => {
      console.log(response.data)
      return response.data
    }
  )
}

// --- --- --- --- --- --- --- U P D A T E P R O F I L E --- --- --- --- --- --- --- --- //
interface UpdateResponse {
  status: number
  message: string
  body?: UpdateBodyResponse
}
interface UpdateBodyResponse {
  createdAt: string
  email: string
  firstName: string
  id: string
  lastName: string
  updatedAt: string
}

export const updateProfile = async (firstName: string, lastName: string) : Promise<UpdateResponse> => {
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


