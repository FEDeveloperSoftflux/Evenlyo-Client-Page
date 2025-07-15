import React from 'react';

const VerificationSuccess = ({ title = 'Success!', message = 'Your action was successful.' }) => (
  <div className="flex flex-col items-center justify-center min-h-[260px]">
    <div className="mb-6">
    <h2 className="text-2xl font-bold text-center text-black mb-4">{title}</h2>
    <p className="text-center text-gray-600 mb-4">{message}</p>
      <img src="/assets/Success.svg" alt="Success" className="w-20 h-20 mx-auto" />
    </div>
    
    
  </div>
);

export default VerificationSuccess; 