import React from 'react';
import './account.scss';
import Footer from '../../layout/footer/Footer';
import { accountMocked } from './../../api/mocked';

const Account : React.FC = () => {
  const accountNumber: any = localStorage.getItem('accountNumber');
  const accountContent : number = accountMocked[accountNumber].value;
  
  return (
    <>
      <div className='account'>
        {accountContent}   
      </div>
      <Footer />
    </>
    
  )
}

export default Account;