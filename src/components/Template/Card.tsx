"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
  title?: string;
}

const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md border border-zinc-900">
      {title && (
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">{title}</h2>
      )}
      {children}
    </div>
  );
};

export default Card;