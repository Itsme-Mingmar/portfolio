import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import profileImage from '../assets/profile1.png'

const Hero = () => {
  const handleScrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '#'
    link.download = 'Mingmar_Tamang_Resume.pdf'
    link.click()
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Basanta <span className="text-accent">Pakhrin</span>
            </h1>

            <p className="text-xl md:text-2xl text-text-secondary mb-4">
              Full Stack Developer | MERN Stack
            </p>

            <p className="text-lg text-text-secondary mb-8 max-w-2xl">
              Focused on building efficient, scalable, and responsive web applications that solve real-world problems.
            </p>

            <div className="flex gap-4 md:justify-start justify-center mb-8 flex-wrap">
              <Button
                onClick={handleScrollToProjects}
                variant="primary"
                size="large"
              >
                View Projects
              </Button>

              <Button
                onClick={handleDownloadResume}
                variant="outline"
                size="large"
              >
                Download Resume
              </Button>
            </div>

            <div className="flex gap-8 md:justify-start justify-center ml-8">
              {/* GitHub */}
              <a
                href="https://github.com/Itsme-Mingmar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-all duration-300 hover:scale-110"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.43 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6 1.1 1.6 1.1 1 .7 2.5.5 3.1.4.1-.5.4-1 .8-1.3-2.5-.3-5-1.2-5-5.4 0-1.2.5-2.2 1.1-3-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 .9 1.8-.5 3.6-.5 5.4 0 2.1-1.2 3-1.1 3-1.1.6 1.6.2 2.8.1 3.1.6.8 1.1 1.8 1.1 3 0 4.2-2.5 5.1-5 5.4.4.4.7 1.1.7 2.1v2.5c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4 0-6.6-5.4-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/basanta-pakhrin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.5 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764S5.034 4.2 6 4.2s1.75.79 1.75 1.764S6.966 7.732 6 7.732zM20 20h-3v-5.604c0-1.337-.027-3.058-1.865-3.058-1.867 0-2.154 1.46-2.154 2.964V20h-3v-11h2.881v1.507h.041c.401-.761 1.379-1.563 2.839-1.563 3.036 0 3.598 2 3.598 4.604V20z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={profileImage}
              alt="Mingmar Tamang"
              className="
              h-[400px]
              w-[320px]
              object-cover
              object-top
              rounded-[45%]
              border-4
              border-accent/30
              shadow-2xl
              bg-black
              hover:scale-105
              transition-all
              duration-300
            "
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero