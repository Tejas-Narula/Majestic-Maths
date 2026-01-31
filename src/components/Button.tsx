import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 transform active:scale-95";
  
  const variants = {
    primary: "bg-amber-500 hover:bg-amber-600 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-md",
    outline: "border-2 border-amber-500 text-amber-600 hover:bg-amber-50"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};