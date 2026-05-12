import React from 'react'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'

const About = () => {
  return (
    <section id="about" className="bg-secondary">
      <Container>
        <SectionTitle title="About Me" subtitle="Get to know me better" />
        <div className="max-w-3xl mx-auto">
          <p className="text-text-secondary text-lg leading-relaxed mb-4">
            I'm a Full Stack Developer specializing in the MERN stack, focused on building
            responsive, scalable, and user-centered web applications.
          </p>

          <p className="text-text-secondary text-lg leading-relaxed mb-4">
            Through hands-on projects, I have gained practical experience in frontend and
            backend development, REST APIs, authentication, database management, and
            modern web technologies.
          </p>

          <p className="text-text-secondary text-lg leading-relaxed">
            I’m currently seeking internship opportunities where I can strengthen my
            technical skills, collaborate with experienced developers, and contribute to
            meaningful projects while continuously growing as a software developer.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default About