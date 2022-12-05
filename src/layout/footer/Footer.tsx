import React, { useEffect, useState } from 'react';
import './footer.scss'

const Footer : React.FC = () => {
  const [footerSize, setFooterSize] = useState<string>('homeSize')

  useEffect(() => {
    const actualPath : string = document.location.href;

    if(actualPath === 'http://localhost:3000/'){
      setFooterSize('homeSize');
    } else {
      setFooterSize('loginAndBoardSize');
    }
    
  }, [])

  return (
    <>
      <div className={`footer ${footerSize}`}> Copyright 2020 Argent Bank </div>
    </>
  )
}

export default Footer;