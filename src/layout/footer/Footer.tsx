import React, { useEffect, useState } from 'react';
import './footer.scss'

const Footer : React.FC = () => {
  const [footerSize, setFooterSize] = useState('homeSize')

  useEffect(() => {
    const actualPath = document.location.href;
    console.log(actualPath)

    if(actualPath === 'http://localhost:3000/'){
      setFooterSize('homeSize');
      console.log('homeSize')
    }

    if(actualPath === 'http://localhost:3000/login' || actualPath === 'http://localhost:3000/board'){
      setFooterSize('loginAndBoardSize');
      console.log('logAndBoardSize');
    }
  }, [])

  return (
    <>
      <div className={`footer ${footerSize}`}> Copyright 2020 Argent Bank </div>
    </>
  )
}

export default Footer;