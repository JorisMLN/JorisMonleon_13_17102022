import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.png';
import { clearStore } from '../../features/reducer/authReducer';
import { useAppDispatch } from '../../features/reducer/hook';

const Header : React.FC = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const toLoginFrame = () : void => {
    navigate('/login');
  }

  const toHomeFrame = () : void => {
    navigate('/');
  }

  const logOut = () : void => {
    localStorage.clear();
    dispatch(clearStore(''));
    navigate('/');
  }

  useEffect(() => {
    const actualPath : string = document.location.href;

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