import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren:   0.1,
    },
  },
}

const Projects = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const blobY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden py-28"
      style={{ background: '#0F172A' }}
    >
      <motion.div style={{ y: blobY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[110px]" style={{ background: '#6366F1' }} />
        <div className="absolute bottom-[-15%] left-[-8%] w-[450px] h-[450px] rounded-full opacity-[0.05] blur-[100px]" style={{ background: '#22C55E' }} />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.022]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
      />

      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.35em] uppercase mb-4 font-medium"
            style={{ color: '#6366F1', fontFamily: "'DM Mono', monospace" }}>
            ✦ Selected Work
          </p>
          <h2 className="text-5xl sm:text-6xl font-extrabold leading-none mb-4"
            style={{
              fontFamily: "'Outfit', sans-serif",
              background: 'linear-gradient(135deg, #E2E8F0 0%, #94A3B8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            My Projects
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-500" />
            <span className="text-sm tracking-widest uppercase" style={{ color: '#475569', fontFamily: "'DM Mono', monospace" }}>
              Some of my best work
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-indigo-500" />
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          variants={gridVariants}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Projects