import React from 'react'

const Button = ({ children, onClick, variant = 'primary', size = 'medium', className = '', type = 'button' }) => {
  const baseStyles = 'rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent'
  
  const variants = {
    primary: 'bg-accent hover:bg-accent-hover text-white',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white',
    highlight: 'bg-highlight hover:bg-highlight/80 text-white',
  }
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button