import React, { LegacyRef, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../reducer/hook';
import { storeLogin, storeToken} from '../reducer/reducers';

const Login : React.FC= () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userLogin = useAppSelector(state => state.login);
  const loginRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();
  
  const isStoringLogin = () => {
    console.log(loginRef.current.value);
    dispatch(storeLogin(loginRef.current.value))

  }

  const toBoard = () => {
    navigate('/board');
  }

  // const isStoringToken = () => {
  //   dispatch(storeToken('jksahdas'))
  // }

  return (
    <>
      <div className='home'>
        <p>{userLogin}</p>
        <input ref={loginRef} type="text" />
        <button onClick={isStoringLogin}> Valider </button>

        <button onClick={toBoard}> To Board </button>
      </div>
    </>
  )
}

export default Login;