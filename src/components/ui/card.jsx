// src/components/ui/card.jsx
import React from "react";

export const Card = ({ children, className }) => (
  <div className={`bg-white shadow-lg hover:shadow-2xl rounded-2xl p-6 md:p-8 border border-gray-200 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className }) => (
  <div className={`text-gray-800 ${className}`}>
    {children}
  </div>
);
