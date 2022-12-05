import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../reducer/hook';
import { storeFirstName, storeLastName} from '../reducer/authReducer';

import { AccountType } from './../../api/mocked';
import { accountMocked } from './../../api/mocked';
import { getProfile, updateProfile } from '../../api/requestsManager';

import './board.scss'
import Footer from '../../layout/footer/Footer';

interface State {
  lastName: string
  firstName: string
  token: string
}

const Board : React.FC = () => {
  const dispatch = useAppDispatch();
  const [openEdit, setOpenEdit] = React.useState<boolean>(false);
  const reduxFirstName = useAppSelector((state: State) => state.firstName);
  const reduxLastName = useAppSelector((state: State) => state.lastName);
  const navigate = useNavigate();
  const firstNameRef : any = useRef();
  const lastNameRef : any = useRef(); 

  const fetchProfile = async () => {
    const response = await getProfile();
    console.log('getProfile response ->', response);

    if(response.body !== undefined){
      dispatch(storeFirstName(response.body.firstName));
      dispatch(storeLastName(response.body.lastName));
    }
    
  }

  React.useEffect(() => {
    fetchProfile();
  }, [])
  
  const isEditingName = async () => {
    dispatch(storeFirstName(firstNameRef.current.value));
    dispatch(storeLastName(lastNameRef.current.value));

    const response = await updateProfile(firstNameRef.current.value, lastNameRef.current.value);
    console.log('updateProfile response ->', response);

    setOpenEdit(false);
  }

  const openView = (accountNumber : number) => {
    console.log(accountNumber)
    localStorage.setItem('accountNumber', JSON.stringify(accountNumber))
    navigate('/account');
  }

  return (
    <>
      <div className='board'>
        <div className='board__name'>
          {
            openEdit === true ?
            <div>
              <div>Welcome Back</div>
              <div>
                <input ref={firstNameRef}></input>
                <input ref={lastNameRef}></input>
              </div>
              <div>
                <button onClick={() => isEditingName()}>Edit</button>
                <button onClick={() => setOpenEdit(false)}>Cancel</button>
              </div>
            </div>
            :
            <div>
              <div>Welcome Back {reduxFirstName} {reduxLastName}</div>
              <button onClick={() => setOpenEdit(true)}>Edit name</button>
            </div>
          }
        </div>

        {
          accountMocked.map((account : AccountType, index) => {
            return <div className='board__content' key={index}>
              <div>
                {account.name}
                {account.balance}
                <button onClick={() => openView(index)}> View transactions</button>
              </div>
            </div>
          })
        }
      
      </div>
      <Footer />
    </>
  )
}

export default Board;
