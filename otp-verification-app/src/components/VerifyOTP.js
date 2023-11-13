import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const VerifyOTP = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const emailFromQuery = searchParams.get('email') || '';

  const [email, setEmail] = useState(emailFromQuery);
  const [otp, setOtp] = useState('');
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();

  const showNotification = (message, color) => {
    setNotification({ message, color });
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/otp/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });

      if (!response.ok) {
        throw new Error('Failed to verify OTP');
      }

      showNotification('OTP verified successfully', 'green');

      setTimeout(() => {
        navigate('/homepage');
      }, 2000);

      
      
    } catch (error) {
      showNotification('Failed to verify OTP', 'red');
    }
  };

  return (
    <div className="grid lg:grid-cols-2 p-2 items-center justify-center h-screen">
      <div className=" lg:block lg:p-30">
        <img src="image/otp.svg" alt="Login" className="mx-auto  " />
      </div>
      <div className="w-full max-w-md p-4 rounded ">
        <h1 className='text-xl font-bold mb-2'>Your Email</h1>
        <input
          type="email"
          id="emailInput"
          aria-label="Email"
          placeholder="Fetching Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 border border-green-500 rounded hover:border-green-600"
          disabled
        />
        <h1 className='text-xl font-bold mb-2'>Enter OTP</h1>
        <input
          type="text"
          id="otpInput"
          aria-label="OTP"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-300 rounded"
        />

        <button
          onClick={handleVerifyOTP}
          className="w-full bg-blue-500 text-white p-2 py-3 rounded font-extrabold hover:bg-blue-700"
        >
          Verify OTP
        </button>

        <div className="mt-4 fixed top-1">
          {notification && (
            <div
              className={`text-white px-4 py-2 rounded-lg ${
                notification.color === 'green' ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              {notification.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
