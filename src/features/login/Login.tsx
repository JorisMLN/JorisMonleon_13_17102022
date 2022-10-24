import React, { LegacyRef, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../reducer/hook';
import { storeLogin, storeToken} from '../reducer/reducers';

const Login : React.FC= () => {
  const count = useAppSelector(state => state.login);
  const dispatch = useAppDispatch();

  const loginRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();

  const isStoringLogin = () => {
    console.log(loginRef.current.value);
    dispatch(storeLogin(loginRef.current.value))
  }

  // const isStoringToken = () => {
  //   dispatch(storeToken('jksahdas'))
  // }

  return (
    <>
      <div className='home'>
        
        <input ref={loginRef} type="text" />
        <button onClick={isStoringLogin}> Valider </button>

      </div>
    </>
  )
}

export default Login;