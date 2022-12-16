import React from 'react';
import './account.scss';
import Footer from '../../layout/footer/Footer';
import DropDown from './DropDown';
import { DetailsType } from './../../api/mocked';
import { AccountType } from './../../api/mocked';
import { getTransactions } from '../../api/requestsManager';

const Account : React.FC = () => {
  const [accountSelected, setAccountSelected] = React.useState<AccountType | null>()
  const accountId: string | null = localStorage.getItem('accountId');

  const fetchTransactions = async () => {
    const content : AccountType | null | undefined= await getTransactions(accountId);
    setAccountSelected(content)
  }
  fetchTransactions();

  return (
    <>
      {accountSelected != null || accountSelected != undefined ?
      <>
        <div className='account'>
          <div className='account__head'>
            <h2>{accountSelected.name}</h2>
            <div className='account__head--balance'>${accountSelected.balance}</div>
            <div className='account__head--description'>${accountSelected.description}</div>
          </div>
          <div className='account__body'>
            <div className='account__body--legend'>
              <div className='item date'>Date</div>
              <div className='item desc'>Description</div>
              <div className='item amount'>Amount</div>
              <div className='item balance'>Balance</div>
            </div>
            {accountSelected.details.map((line: DetailsType, index: number) => {
              return <DropDown content={line} domIndex={index} key={index}/>
            })}
          </div>
        </div>
        <Footer />
      </>
      :
      null}
      
    </>
    
  )
}

export default Account;