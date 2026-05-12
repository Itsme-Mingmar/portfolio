import React, { useState } from 'react'
import Button from './Button'

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="bg-secondary rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-accent">{project.title}</h3>
          <p className="text-text-secondary mb-4">{project.description}</p>

          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-primary rounded-lg text-xs text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.github?.frontend && (
              <Button
                onClick={() => window.open(project.github.frontend, '_blank')}
                variant="outline"
                size="small"
              >
                Frontend
              </Button>
            )}

            {project.github?.backend && (
              <Button
                onClick={() => window.open(project.github.backend, '_blank')}
                variant="outline"
                size="small"
              >
                Backend
              </Button>
            )}

            {project.github?.recommendation && (
              <Button
                onClick={() =>
                  window.open(project.github.recommendation, '_blank')
                }
                variant="outline"
                size="small"
              >
                Recommendation
              </Button>
            )}

            <Button
              onClick={() => window.open(project.live, '_blank')}
              variant="primary"
              size="small"
            >
              Live Demo
            </Button>

            <Button
              onClick={() => setIsModalOpen(true)}
              variant="outline"
              size="small"
            >
              Details
            </Button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-secondary rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-secondary border-b border-border p-4 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-accent">{project.title}</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-text-secondary hover:text-accent transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-accent mb-2">Problem</h4>
                <p className="text-text-secondary">{project.details.problem}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-accent mb-2">Solution</h4>
                <p className="text-text-secondary">{project.details.solution}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-accent mb-2">Features</h4>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  {project.details.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-accent mb-2">Challenges</h4>
                <p className="text-text-secondary">{project.details.challenges}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectCard