import React from 'react'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const Projects = () => {
  return (
    <section id="projects">
      <Container>
        <SectionTitle 
          title="My Projects" 
          subtitle="Some of my best work" 
        />
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Projects