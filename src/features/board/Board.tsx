import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../reducer/hook';
import { storeFirstName, storeLastName} from '../reducer/authReducer';

import './board.scss'
import Footer from '../../layout/footer/Footer';

interface State {
  lastName: string
  firstName: string
}

const Board : React.FC = () => {
  const dispatch = useAppDispatch();
  const [openEdit, setOpenEdit] = React.useState<boolean>(false);
  const reduxFirstName = useAppSelector((state: State) => state.firstName);
  const reduxLastName = useAppSelector((state: State) => state.lastName);

  const navigate = useNavigate();

  const firstNameRef : any = useRef();
  const lastNameRef : any = useRef(); 

  const isEditingName = () => {
    console.log('edit name !');

    dispatch(storeFirstName(firstNameRef.current.value));
    dispatch(storeLastName(lastNameRef.current.value));
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

        <div className='board__content'>
          {
            <>
              content
              <button onClick={() => openView(0)}> View transactions</button>
              {/* <Content /> */}
            </>
          }
        </div>

        <div className='board__content'>
          {
            <>
              content
              <button onClick={() => openView(1)}> View transactions</button>
              {/* <Content /> */}
            </>
          }
        </div>

        <div className='board__content'>
          {
            <>
              content
              <button onClick={() => openView(2)}> View transactions</button>
              {/* <Content /> */}
            </>
          }
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Board;
