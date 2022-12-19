import { axiosInstance } from '../../api/requestsManager';
import jwt_decode from "jwt-decode";


export const GuardToken = () => {
  const userToken = axiosInstance.defaults.headers.Authorization;
  console.log(userToken)

  if(userToken === undefined || userToken === null){
    console.log('token undefined');
    return false;
  }

  if(userToken != undefined){
    const stringToken = userToken.split(' ')[1];
    const decodedToken = stringToken ? jwt_decode(stringToken) : null;
    console.log(decodedToken);

    if (!decodedToken  ||  decodedToken.exp < (Date.now() / 1000) || decodedToken === undefined) {
      console.log('refused token');
      return false;
    } else {
      console.log('valid token');
      return true;
    }
  }
}
