import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import { verifyOTP } from './utils/timeUtilis';

export default function OTPVerification({title , _id, setStartTimer }) {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    setError('');
    setIsVerifying(true);

    try {
        const isVerified = await verifyOTP(_id, otp, title);

        if (isVerified) {
            setStartTimer(title === 'Start');
            setError('');
        } else {
            setError('Invalid OTP. Please try again.');
            setStartTimer(false);
        }
    } catch (err) {
        setError('Invalid OTP. Please try again.');
    } finally {
        setIsVerifying(false);
    }
};

  

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <Lock className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-semibold">{title} OTP Verification</h2>
      </div>

      <div className="space-y-4">
        <input
          type="text"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
          placeholder="Enter 6-digit OTP"
          className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
        />

        {error && (
          <p className="text-red-600 text-sm">{error}</p>
        )}

        <button
          onClick={(e) => handleVerify(e)}
          disabled={otp.length !== 6 || isVerifying}
          className={`w-full py-2 rounded-md ${otp.length === 6 && !isVerifying
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 cursor-not-allowed'
            }`}
        >
          {isVerifying ? 'Verifying...' : 'Verify OTP'}
        </button>
      </div>
    </div>
  );
}