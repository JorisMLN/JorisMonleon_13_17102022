import React from 'react';
import Login from "../../features/login/Login";
import Capsule from '../capsule/Capsule';

const LoginFrame : React.FC = () => {

  return (
    <>
      <Capsule child={<Login />} />
    </>
  )
}

export default LoginFrame;