import React from 'react';
import Navbar from '../components/navbar'
const XMTPchat = () => {
  return (
    <div className='shadow h-screen'>
         <Navbar/>
        <div className='h-12 z-20  bg-white w-1/2 absolute' ></div>
      <iframe src="https://xmtp-quickstart-react.vercel.app/" title="description" className='m-auto' width='70%' height='100%'></iframe>
    </div>
  );
}

export default XMTPchat;
