// --- --- --- --- R E Q U E S T _ M A N A G E R --- --- --- --- //
import axios from 'axios';
import { accountMocked, AccountType } from './mocked';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Accept': 'application/json'
  }
})


// --- --- --- --- --- --- --- --- L O G I N --- --- --- --- --- --- --- --- //
export interface LoginResponse {
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
      return response.data;
    }
  )
}

// --- --- --- --- --- --- --- --- G E T _ P R O F I L E --- --- --- --- --- --- --- --- //
export interface GetProfileResponse {
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
      return response.data
    }
  )
}

// --- --- --- --- --- --- --- U P D A T E _ P R O F I L E --- --- --- --- --- --- --- --- //
export interface UpdateResponse {
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
      return response.data
    }
  )
};





// --- --- --- --- --- --- --- G E T _ A C C O U N T S --- --- --- --- --- --- --- --- //

export const getAccounts = async () : Promise<Array<AccountType>> => {
  console.log(accountMocked)
  return accountMocked;
};

// --- --- --- --- --- --- --- G E T _ T R A N S A C T I O N S --- --- --- --- --- --- --- --- //

export const getTransactions = async (id : string | null) : Promise<AccountType | null | undefined> => {
  let content;
  accountMocked.map((account) => {
    if(JSON.stringify(account.id) === id){
      content = account
    }
  })

  return content
}
