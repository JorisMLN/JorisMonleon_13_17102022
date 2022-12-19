import React from 'react';
import Login from "../../features/login/Login";
import Capsule from '../capsule/Capsule';
import { useNavigate } from 'react-router-dom';
import { GuardToken } from '../../features/guard/GuardToken'; 


const LoginFrame : React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const resultCheckToken = GuardToken()
    console.log('result check token =>', resultCheckToken);

    if(resultCheckToken === true){
      navigate('/board');
    } else {
      console.log('disabled token')
    }
  }, [])


  return (
    <>
      <Capsule child={<Login />} />
    </>
  )
}

export default LoginFrame;