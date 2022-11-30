// --- --- --- --- R E Q U E S T --- M A N A G E R --- --- --- --- //
import { REQUEST_SETTINGS } from '../services';
import axios from 'axios';


const userToken: string | null = localStorage.getItem('userToken');
// console.log(userToken);

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

export const UYHJFHgetProfile = async (token: string) : Promise<any> => {
  // axiosInstance.defaults.headers.Authorization = token;
  // console.log(axiosInstance.defaults.headers)

  return await axiosInstance
    .post('/user/profile')
    .then((response) => {
      console.log(response.data)
      return response.data
    }
  )
}

export const getProfile = async (token: string) : Promise<any> => {
  const requestOptions : any = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': `${token}`
    }
  }

  try {
    const response : Response = await fetch(`${REQUEST_SETTINGS.profile}`, requestOptions);
    const jsonRes : any = await response.json();

    console.log(jsonRes)
    return jsonRes

  } catch {
    console.error('error server');
  }
};

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
export const isProfixle = async (email: string, password: string) : Promise<any> => {
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

