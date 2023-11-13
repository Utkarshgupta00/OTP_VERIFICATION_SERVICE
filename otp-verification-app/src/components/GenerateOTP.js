import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GenerateOTP = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const showNotification = (message, color) => {
    setNotification({ message, color });
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  const handleGenerateOTP = async () => {
    try {
      setLoading(true);

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showNotification('Invalid email format', 'red');
        return;
      }

      showNotification(`OTP send to email ${email}`, 'green');
      // Navigate to VerifyOTP page with email as a query parameter
      setTimeout(()=>{
          navigate(`/verify?email=${email}`);
      },2000)
      

      const response = await fetch('http://localhost:3000/api/otp/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        console.error('Failed to generate OTP. Status:', response.status);
        showNotification('Failed to generate OTP. Please try again.', 'red');
        return;
      }

      showNotification('OTP generated successfully', 'green');
    } catch (error) {
      console.error('Failed to generate OTP', error);
      showNotification(error.message || 'Failed to generate OTP. Please try again.', 'red');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2 p-2 items-center justify-center h-screen">
      <div className="md:hidden mt-20">
        {/* Display this image on small screens */}
        <img src="image/email.svg" alt="Login" className="mx-auto mb-8 " />
      </div>
      <div className="hidden md:block md:mt-10 md:p-20">
        {/* Display this image on larger screens */}
        <img src="image/email.svg" alt="Login" className="mx-auto" />
      </div>
      <div className="w-full max-w-md p-4 bg-white rounded md:mx-8">
        <h2 className="text-xl mb-4 font-bold">ENTER EMAIL</h2>
        <input
          type="email"
          placeholder="eg : utkarshg494@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-300 hover:border-gray-500 outline-none rounded"
        />
        <button
          onClick={handleGenerateOTP}
          className={`w-full bg-blue-500 text-white p-2 py-3 font-extrabold rounded ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
          disabled={loading}
        >
          {loading ? 'Generating OTP...' : 'Generate OTP'}
        </button>
        <div className="mt-4 fixed top-1 rounded-full  w-[300px]">
          {notification && (
            <div
              className={`text-white px-4 py-2 rounded ${
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

export default GenerateOTP;
