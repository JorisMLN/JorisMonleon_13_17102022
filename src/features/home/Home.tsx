import React from 'react';
import './home.scss';
import imageBanner from '../../assets/icon-chat.png';
import { useAppSelector, useAppDispatch } from '../reducer/hook';
import { decrement, increment } from '../reducer/reducers';


const Home : React.FC = () => {
  const count = useAppSelector(state => state.value);
  const dispatch = useAppDispatch();

  const isIncrementing = () => {
    dispatch(increment())
  };

  const isDecrementing = () => {
    dispatch(decrement())
  };

  return (
    <div className='home'>
      <div className='banner'>{imageBanner}</div>
      <button onClick={isIncrementing}> Increment </button>
      <div> {count} </div>
      <button onClick={isDecrementing}> Decrement </button>
      <input type="text" />
    </div>
  )
}

export default Home;