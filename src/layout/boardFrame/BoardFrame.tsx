import React from 'react';
import Board from "../../features/board/Board";
import Capsule from '../capsule/Capsule';

const BoardFrame : React.FC = () => {

  return (
    <>
      <Capsule child={<Board />}/>
    </>
  )
}

export default BoardFrame;