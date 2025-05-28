"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, type = "submit", onClick, disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200 ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {children}
    </button>
  );
};

export default Button;