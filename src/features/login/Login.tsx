import React, { LegacyRef, useRef } from 'react';
import './login.scss';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../reducer/hook';
import { 
  storeLogin, 
  // storeToken
} from '../reducer/authReducer';
import Footer from '../../layout/footer/Footer';
import { isLogin } from '../../api/requestsManager';

const Login : React.FC= () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userLogin = useAppSelector(state => state.login);
  const loginRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();
  const passwordRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();
  
  const fetchLogin = async () => {
    const userLogin = loginRef.current.value;
    const userPassword = passwordRef.current.value;
    
    const fetchLoginResult = await isLogin(userLogin, userPassword)
    console.log(fetchLoginResult)

    dispatch(storeLogin(userLogin))
  }

  const toBoard = () => {
    navigate('/board');
  }

  // const isStoringToken = () => { 
  //   dispatch(storeToken('jksahdas'))
  // }

  return (
    <>
      <div className='login'>
        <div className='login__main'>
          <p>{userLogin}</p>
          <input ref={loginRef} type="text" placeholder='login'/>
          <input ref={passwordRef} type="text" placeholder='password'/>
          -
          <button onClick={fetchLogin}> Valider </button>

          <button onClick={toBoard}> To Board </button>
        </div>
      
        <Footer />
      </div>
    </>
  )
}

export default Login;