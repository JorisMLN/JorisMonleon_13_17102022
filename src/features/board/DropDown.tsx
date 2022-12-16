import './dropDown.scss';
import { useState } from 'react';
import { DetailsType } from './../../api/mocked';
import arrowDown from '../../assets/arrowDown.png';
import arrowUp from '../../assets/arrowUp.png';

interface Content {
  content : DetailsType
  domIndex : number
}

const DropDown = ({content, domIndex} : Content) => {
  const [arrowIcon, setArrowIcon] = useState(false);

  const handleVisible = (domIndex: string) => {
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
        <img alt='chevron icon' src={arrowIcon ? arrowUp : arrowDown}></img>
        <div className='dropdown__head--item dropDate'>{content.date}</div>
        <div className='dropdown__head--item dropDesc'>{content.description}</div>
        <div className='dropdown__head--item dropAmount'>${content.amount}</div>
        <div className='dropdown__head--balance'>${content.balance}</div>
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