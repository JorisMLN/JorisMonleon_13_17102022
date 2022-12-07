import React from 'react';
import './account.scss';
import Footer from '../../layout/footer/Footer';
import DropDown from './DropDown';
import { DetailsType } from './../../api/mocked';
import { AccountType } from './../../api/mocked';
import { accountMocked } from './../../api/mocked';

const Account : React.FC = () => {
  const accountNumber: any = localStorage.getItem('accountNumber');
  const accountContent : AccountType = accountMocked[accountNumber];

  return (
    <>
      <div className='account'>
        <div className='account__head'>
          <h2>{accountContent.name}</h2>
          <div className='account__head--balance'>${accountContent.balance}</div>
          <div className='account__head--description'>${accountContent.description}</div>
        </div>
        <div className='account__body'>
          {accountContent.details.map((line: DetailsType, index: number) => {
            return <DropDown content={line} domIndex={index} key={index}/>
          })}
        </div>
      </div>
      <Footer />
    </>
    
  )
}

export default Account;