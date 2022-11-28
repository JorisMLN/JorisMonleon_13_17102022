// --- --- --- --- R E Q U E S T --- M A N A G E R --- --- --- --- //
import { REQUEST_SETTINGS } from '../services';
import axios from 'axios';


const userToken: string | null = localStorage.getItem('userToken');
const axiosInstance = axios.create({
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

export const isLogin = async (email: string, password: string) : Promise<LoginResponse> => {
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


// Is loging the user
// export const isLogin = async (email: string, password: string) : Promise<any> => {
//   const requestOptions : any = {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'x-auth': `${userToken}`
//     },
//     body: {
//       email: email,
//       password: password
//     }
//   }

//   try {
//     const response : Response = await fetch(`${REQUEST_SETTINGS.login}`, requestOptions);
//     const jsonRes : any = await response.json();

//     console.log(jsonRes)
//     return jsonRes

//   } catch {
//     console.error('error server');
//   }
// };

// Is signing up a new user
export const isSignup = async (email: string, password: string) : Promise<any> => {
  const requestOptions : any = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'x-auth': `${userToken}`
    },
    body: {
      email: email,
      password: password
    }
  }

  try {
    const response : Response = await fetch(`${REQUEST_SETTINGS.login}`, requestOptions);
    const jsonRes : any = await response.json();

    console.log(jsonRes)
    return jsonRes

  } catch {
    console.error('error server');
  }
};

// Is recovering the user profile
export const isProfile = async (email: string, password: string) : Promise<any> => {
  const requestOptions : any = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'x-auth': `${userToken}`
    },
    body: {
      email: email,
      password: password
    }
  }

  try {
    const response : Response = await fetch(`${REQUEST_SETTINGS.login}`, requestOptions);
    const jsonRes : any = await response.json();

    console.log(jsonRes)
    return jsonRes

  } catch {
    console.error('error server');
  }
};

