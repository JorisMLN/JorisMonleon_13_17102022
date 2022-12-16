import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../reducer/hook';
import { storeFirstName, storeLastName} from '../reducer/authReducer';
import { AccountType } from './../../api/mocked';
import { getAccounts } from '../../api/requestsManager';
import { AuthState } from '../reducer/authReducer';
import { getProfile, GetProfileResponse, updateProfile, UpdateResponse } from '../../api/requestsManager';

import './board.scss'
import Footer from '../../layout/footer/Footer';


const Board : React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [openEdit, setOpenEdit] = React.useState<boolean>(false);
  const [accounts, setAccounts] = React.useState<Array<AccountType>>([]);
  const reduxFirstName = useAppSelector((state: AuthState) => state.firstName);
  const reduxLastName = useAppSelector((state: AuthState) => state.lastName);
  const firstNameRef : any = useRef();
  const lastNameRef : any = useRef();

  const fetchAccounts = async () => {
    const accountMocked = await getAccounts();
    setAccounts(accountMocked)
  }

  const fetchProfile = async () : Promise<void> => {
    console.log('test')
    const response : GetProfileResponse = await getProfile();
    console.log('getProfile response ->', response);

    if(response.body !== undefined){
      dispatch(storeFirstName(response.body.firstName));
      dispatch(storeLastName(response.body.lastName));
    }
  }

  React.useEffect(() => {
    fetchAccounts();
    fetchProfile();
  }, [])
  
  const isEditingName = async () : Promise<void> => {
    dispatch(storeFirstName(firstNameRef.current.value));
    dispatch(storeLastName(lastNameRef.current.value));

    const response : UpdateResponse = await updateProfile(firstNameRef.current.value, lastNameRef.current.value);
    console.log('Update Response ->', response);
    
    setOpenEdit(false);
  }

  const openView = (accountNumber : string) : void => {
    localStorage.setItem('accountId', JSON.stringify(accountNumber))
    navigate('/account');
  }

  return (
    <>
      <div className='board'>
        <div className='board__name'>
          {
            openEdit === true ?
            <div className='board__name--open'>
              <div className='title'>Welcome Back</div>
              <div className='inputs'>
                <input ref={firstNameRef}></input>
                <input ref={lastNameRef}></input>
              </div>
              <div className='buttons'>
                <button onClick={() => isEditingName()}>Edit</button>
                <button onClick={() => setOpenEdit(false)}>Cancel</button>
              </div>
            </div>
            :
            <div className='board__name--close'>
              <h1>Welcome Back</h1>
              <div className='reduxNameContent'>{reduxFirstName} {reduxLastName}!</div>
              <button onClick={() => setOpenEdit(true)}>Edit name</button>
            </div>
          }
        </div>

        {
          accounts.map((account : AccountType, index : number) => {
            return <div className='board__content' key={index}>
              <div className='board__content--left'>
                <div>
                {account.name}
                </div>
                <div className='balance'>
                ${account.balance}
                </div>
                <div>
                {account.description}
                </div>
              </div>
              <button onClick={() => openView(account.id)}> View transactions</button>
            </div>
          })
        }
      </div>
      <Footer />
    </>
  )
}

export default Board;
