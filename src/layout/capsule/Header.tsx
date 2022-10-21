import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header : React.FC = () => {
  const navigate = useNavigate();

  const toLoginFrame = () => {
    navigate('/login');
  }

  const toHomeFrame = () => {
    navigate('/');
  }
 
  return (
    <>
      <div className='header'>
        <button onClick={toHomeFrame}> Back Home </button>
        <h1> H O M E </h1>
        <button onClick={toLoginFrame}> Login ? </button>
      </div>
    </>
  )
}

export default Header;