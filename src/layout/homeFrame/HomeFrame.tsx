import React from 'react';
import Home from "../../features/home/Home";
import Capsule from '../capsule/Capsule';

const HomeFrame : React.FC = () => {

  return (
    <>
      <Capsule child={<Home />}/>
    </>
  )
}

export default HomeFrame;