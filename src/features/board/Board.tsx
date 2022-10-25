import React from 'react';
import './board.scss'
import Footer from '../../layout/footer/Footer';

const Board : React.FC = () => {

  return (
    <>
      <div className='board'>
        <div className='board__name'> name
        </div>
        <div className='board__content'> content
        </div>
        <div className='board__content'> content
        </div>
        <div className='board__content'> content
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Board;
