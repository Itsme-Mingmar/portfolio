import React from 'react'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { skills } from '../data/skills'

const Skills = () => {
  return (
    <section id="skills" className="bg-secondary">
      <Container>
        <SectionTitle title="Skills & Technologies" subtitle="What I work with" />
        <div className="space-y-8">
          {skills.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-semibold text-accent mb-4 text-center">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.items.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="px-4 py-2 bg-primary rounded-xl text-text-secondary hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Skills