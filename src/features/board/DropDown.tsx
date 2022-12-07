import './dropDown.scss';
import { useState } from 'react';
// import { DetailsType } from './../../api/mocked';
import arrowDown from '../../assets/arrowDown.png';
import arrowUp from '../../assets/arrowUp.png';


const DropDown = ({content, domIndex} : any) => {
  const [arrowIcon, setArrowIcon] = useState(false);

  const handleVisible = (domIndex: any) => {
    const content : HTMLElement | null = document.getElementById(`domIndex${domIndex}`);

    if (content !== null && content.classList.contains('hiddenDrop')){
      content.classList.replace('hiddenDrop', 'visibleDrop');
      return setArrowIcon(true);
    }

    if (content !== null && content.classList.contains('visibleDrop')){
      content.classList.replace('visibleDrop', 'hiddenDrop');
      return setArrowIcon(false);
    }
  }

  return (
    <div className='dropdown ${domIndex}' onClick={() => handleVisible(`${domIndex}`)}>
      <div className='dropdown__head'>
        <img src={arrowIcon ? arrowUp : arrowDown}></img>
        <div>{content.date}</div>
        <div>{content.description}</div>
        <div>{content.amount}</div>
        <div>{content.balance}</div>
      </div>
      <div id={`domIndex${domIndex}`} className='dropdown__body hiddenDrop'>
        <div>Transaction Type: {content.transactionType}</div>
        <div>Category: {content.category}</div>
        <div>Notes: {content.notes}</div>
      </div>
    </div>
  )
}

export default DropDown;