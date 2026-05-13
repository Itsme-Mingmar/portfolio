import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-border py-8">
      <div className="container-custom text-center">
        <p className="text-text-secondary">
          © {currentYear} Mingmar Tamang. All rights reserved.
        </p>
        <p className="text-text-secondary text-sm mt-2">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

export default Footer