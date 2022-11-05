import React, { RefObject, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './board.scss'
import Footer from '../../layout/footer/Footer';

const Board : React.FC = () => {
  const [openEdit, setOpenEdit] = React.useState<boolean>(false);

  const navigate = useNavigate();

  const firstnameRef : any = useRef();
  const lastnameRef : any = useRef(); 

  const isEditingName = () => {
    console.log('edit name !');
    console.log(firstnameRef);
    console.log(lastnameRef);
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
                <input ref={firstnameRef}></input>
                <input ref={lastnameRef}></input>
              </div>
              <div>
                <button onClick={() => isEditingName()}>Edit</button>
                <button onClick={() => setOpenEdit(false)}>Cancel</button>
              </div>
            </div>
            :
            <div>
              <div>Welcome Back Tony Jarvis</div>
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
