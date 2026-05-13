import React from 'react'

const Container = ({ children, className = '' }) => {
  return (
    <div className={`container-custom section-padding ${className}`}>
      {children}
    </div>
  )
}

export default Container