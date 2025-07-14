import React from 'react';

const VerificationSuccess = ({ title = 'Success!', message = 'Your action was successful.' }) => (
  <div className="flex flex-col items-center justify-center min-h-[260px]">
    <div className="mb-6">
      <svg className="animate-bounce w-20 h-20 text-green-500  mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#e6fffa" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12l2 2l4-4" />
      </svg>
    </div>
    <h2 className="text-2xl font-bold text-center text-green-600 mb-2">{title}</h2>
    <p className="text-center text-gray-600">{message}</p>
  </div>
);

export default VerificationSuccess; 