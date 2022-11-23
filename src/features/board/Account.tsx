import React from 'react';
import './account.scss';
import { useNavigate } from 'react-router-dom';

import Footer from '../../layout/footer/Footer';
import { accountMocked } from './../../api/mocked';

const Account : React.FC = () => {
  const navigate = useNavigate();
  const accountNumber: any = localStorage.getItem('accountNumber');
  const accountContent : number = accountMocked[accountNumber].value;

  const backToBoard = () => {
    navigate('/board');
  }
  
  return (
    <>
      <div className='account'>
        <button onClick={() => backToBoard()}> back to board </button>
        {accountContent}   
      </div>
      <Footer />
    </>
    
  )
}

export default Account;