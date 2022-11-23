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
          <div>
            .logo.
            <h2>Sign In</h2>
          </div>

          <div>
            <legend>Username</legend>
            <input ref={loginRef} type="text" placeholder='login'/>
          </div>

          <div>
            <legend>Password</legend>
            <input ref={passwordRef} type="text" placeholder='password'/>
          </div>
          
          <div>
            <button onClick={fetchLogin}> Valider </button>
            <button onClick={toBoard}> To Board </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default Login;