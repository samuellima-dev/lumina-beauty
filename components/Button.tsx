import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  // Pill shape (rounded-full) feels friendlier and more suitable for beauty/lifestyle
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed tracking-wide";
  
  const variants = {
    // Terracotta / Rose tone for warmth and vibrancy
    primary: "border-transparent text-white bg-rose-500 hover:bg-rose-600 shadow-md hover:shadow-lg focus:ring-rose-400",
    secondary: "border-transparent text-stone-800 bg-stone-200 hover:bg-stone-300 focus:ring-stone-400",
    outline: "border-2 border-stone-300 text-stone-600 bg-transparent hover:border-rose-500 hover:text-rose-500 focus:ring-rose-500",
    white: "border-transparent text-rose-600 bg-white hover:bg-rose-50 focus:ring-white shadow-sm"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;