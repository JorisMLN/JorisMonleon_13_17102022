// --- --- --- --- R E Q U E S T --- M A N A G E R --- --- --- --- //
import { REQUEST_SETTINGS } from '../services';
const userToken: string | null = localStorage.getItem('userToken');

// Is loging the user
export const isLogin = async (email: string, password: string) : Promise<any> => {
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

