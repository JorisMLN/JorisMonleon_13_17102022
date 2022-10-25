import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header : React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  const toLoginFrame = () => {
    navigate('/login');
  }

  const toHomeFrame = () => {
    navigate('/');
  }

  const logOut = () => {
    navigate('/');
  }

  useEffect(() => {
    const actualPath = document.location.href;

    if(actualPath === 'http://localhost:3000/board'){
      setIsLogged(true);
      console.log('true')
    } else {
      setIsLogged(false);
      console.log('false')
    }
  })
 
  return (
    <>
      {
      isLogged === true ?
      <div className='header'>
        <button onClick={toHomeFrame}> Back Home </button>
        <h1> Argent Bank </h1>
        <button onClick={logOut}> logOut </button>
      </div>
      :
      <div className='header'>
        <button onClick={toHomeFrame}> Back Home </button>
        <h1> Argent Bank </h1>
        <button onClick={toLoginFrame}> Login ? </button>
      </div>
      }
    </>
  )
}

export default Header;