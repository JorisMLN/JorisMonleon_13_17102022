import React from 'react';
import './account.scss';
import { useNavigate } from 'react-router-dom';
import Footer from '../../layout/footer/Footer';

import { DetailsType } from './../../api/mocked';
import { AccountType } from './../../api/mocked';
import { accountMocked } from './../../api/mocked';

const Account : React.FC = () => {
  const navigate = useNavigate();
  const accountNumber: any = localStorage.getItem('accountNumber');
  const accountContent : AccountType = accountMocked[accountNumber];

  console.log(accountContent)

  const backToBoard = () => {
    navigate('/board');
  }
  
  return (
    <>
      <div className='account'>
        <button onClick={() => backToBoard()}> back to board </button>
        <h2>{accountContent.name}</h2>
        <p>{accountContent.balance} $</p>
        {accountContent.details.map((line: DetailsType, index: number) => {
          return <div className='account__line' key={index}>
            {line.date}
          </div>
        })}
      </div>
      <Footer />
    </>
    
  )
}

export default Account;