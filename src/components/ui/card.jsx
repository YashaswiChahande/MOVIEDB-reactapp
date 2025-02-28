// src/components/ui/card.jsx
import React from "react";

export const Card = ({ children, className }) => (
  <div className={`bg-zinc-800 shadow-lg hover:shadow-2xl rounded-2xl p-6 md:p-8 border border-zinc-800 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className }) => (
  <div className={`text-gray-800 ${className}`}>
    {children}
  </div>
);
