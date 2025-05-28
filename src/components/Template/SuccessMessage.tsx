"use client";

import React from "react";

interface SuccessMessageProps {
  username: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ username }) => {
  return (
    <div className="text-center">
      <div className="text-green-500 text-xl font-semibold mb-4">✅ Login Successful!</div>
      <p className="text-gray-600">Welcome back, <strong>{username}</strong>.</p>
    </div>
  );
};

export default SuccessMessage;