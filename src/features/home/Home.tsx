import React from 'react';
import { useAppSelector, useAppDispatch } from '../reducer/hook';
import { decrement, increment } from '../reducer/reducers';


const Home : React.FC = () => {
  const count = useAppSelector(state => state.value);
  const dispatch = useAppDispatch();

  const isIncrementing = () => {
    dispatch(increment())
  }

  const isDecrementing = () => {
    dispatch(decrement())
  }

  return (
    <>
      <button onClick={isIncrementing}> Increment </button>
      <div> {count} </div>
      <button onClick={isDecrementing}> Decrement </button>
      <input type="text" />
    </>
  )
}

export default Home;