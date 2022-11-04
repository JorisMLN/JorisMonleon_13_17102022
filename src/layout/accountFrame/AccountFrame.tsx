import React from 'react';
import Board from "../../features/board/Board";
import Capsule from '../capsule/Capsule';
import Account from '../../features/board/Account';

const AccountFrame : React.FC = () => {

  return (
    <>
      <Capsule child={<Account />}/>
    </>
  )
}

export default AccountFrame;