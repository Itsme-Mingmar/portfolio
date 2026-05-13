import React from 'react'

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
        <span className="text-accent">.</span>
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
    </div>
  )
}

export default SectionTitle