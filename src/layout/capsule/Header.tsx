import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.png';
import { clearStore } from '../../features/reducer/authReducer';
import { useAppDispatch, useAppSelector } from '../../features/reducer/hook';
import { AuthState } from '../../features/reducer/authReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';


const Header : React.FC = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const reduxFirstName = useAppSelector((state: AuthState) => state.firstName);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const toLoginFrame = () : void => {
    navigate('/login');
  }

  const toHomeFrame = () : void => {
    navigate('/');
  }

  const toBoardFrame = () : void => {
    navigate('/board');
  }

  const logOut = () : void => {
    localStorage.clear();
    dispatch(clearStore(''));
    navigate('/');
  }

  useEffect(() => {
    const actualPath : string = document.location.href;

    if(actualPath === 'http://localhost:3000/board' || actualPath === 'http://localhost:3000/account'){
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [])
 
  return (
    <>
      {
        isLogged === true ?
        <div className='header'>
          <img alt='lien vers la home page' onClick={toHomeFrame} src={logo}></img>
          <div className='header__rightSide'>
            <FontAwesomeIcon className='icon' icon={faUserCircle} />
            <div className='link' onClick={toBoardFrame}> {reduxFirstName} </div>
            <FontAwesomeIcon className='icon' icon={faRightFromBracket} />
            <div className='link' onClick={logOut}> Sign Out </div>
          </div>
        </div>
        :
        <div className='header'>
          <img alt='lien vers la home page' onClick={toHomeFrame} src={logo}></img>
          <div className='header__rightSide'>
            <FontAwesomeIcon className='icon' icon={faUserCircle} />
            <div className='link' onClick={toLoginFrame}> Sign In </div>
          </div>
        </div>
      }
    </>
  )
}

export default Header;