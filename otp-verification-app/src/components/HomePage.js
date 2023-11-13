import React from 'react';

const HomePage = () => {
  return (
    <>
      <div className='bg-white flex flex-col items-center md:h-[700px] mt-10 justify-center px-5'>
        <img src="image/welcome.svg" alt="Welcome" className="mb-4 h-[70%]"  />
        <h1 className='text-[#1b1b1b] fixed bottom-10 animate-bounce text-4xl text-center mt-10 font-bold mb-8'>Welcome to Homepage</h1>
      </div>
    </>
  );
};

export default HomePage;
