import React, { LegacyRef, useRef } from 'react';
import './login.scss';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../reducer/hook';
import { storeToken } from '../reducer/authReducer';
import Footer from '../../layout/footer/Footer';
import { login } from '../../api/requestsManager';
import { LoginResponse } from '../../api/requestsManager';

const Login : React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loginRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();
  const passwordRef : LegacyRef<HTMLInputElement> | any | undefined = useRef();
  
  const fetchLogin = async () : Promise<void> => {
    const userLogin : string = loginRef.current.value;
    const userPassword : string = passwordRef.current.value;

    const response : LoginResponse = await login(userLogin, userPassword);
    console.log('Login Response ->', response);

    if(response.status === 200){
      dispatch(storeToken(response.body?.token));

      if(response.body !== undefined){
        localStorage.setItem('userToken', response.body?.token)
      }

      navigate('/board');
    } else {
      console.log('400 nope !')
    }
  }

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
          
          <button onClick={fetchLogin}> Sign In </button>
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default Login;