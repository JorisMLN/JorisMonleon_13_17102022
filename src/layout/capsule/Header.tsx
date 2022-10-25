import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.png';

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
    } else {
      setIsLogged(false);
    }
  })
 
  return (
    <>
      {
      isLogged === true ?
      <div className='header'>
        <img alt='lien vers la home page' onClick={toHomeFrame} src={logo}></img>
        <div className='header__rightSide'>
          <div className='link' > Profile </div>
          <div className='link' onClick={logOut}> Log Out </div>
        </div>
      </div>
      :
      <div className='header'>
        <img alt='lien vers la home page' onClick={toHomeFrame} src={logo}></img>
        <div className='header__rightSide'>
          <div className='link' onClick={toLoginFrame}> Login ? </div>
        </div>
      </div>
      }
    </>
  )
}

export default Header;