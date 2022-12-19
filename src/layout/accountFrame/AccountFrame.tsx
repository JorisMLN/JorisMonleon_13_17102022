import React from 'react';
import Capsule from '../capsule/Capsule';
import Account from '../../features/board/Account';
import { useNavigate } from 'react-router-dom';
import { GuardToken } from '../../features/guard/GuardToken'; 

const AccountFrame : React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const resultCheckToken = GuardToken()
    console.log('result check token', resultCheckToken);

    if(resultCheckToken === false){
      navigate('/login');
    } else {
      console.log('valid token');
    }
  }, [])

  return (
    <>
      <Capsule child={<Account />}/>
    </>
  )
}

export default AccountFrame;