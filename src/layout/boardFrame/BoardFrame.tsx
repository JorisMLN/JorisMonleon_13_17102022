import React from 'react';
import Board from "../../features/board/Board";
import Capsule from '../capsule/Capsule';
import { useNavigate } from 'react-router-dom';
import { GuardToken } from '../../features/guard/GuardToken'; 

const BoardFrame : React.FC = () => {
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
      <Capsule child={<Board />}/>
    </>
  )
}

export default BoardFrame;