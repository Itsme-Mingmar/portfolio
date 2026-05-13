import { useState, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'
import {
  SiReact, SiNodedotjs, SiMongodb, SiPython, SiTailwindcss,
  SiExpress, SiJavascript, SiTypescript, SiFastapi, SiFlask,
  SiScikitlearn, SiTensorflow, SiPandas,
} from 'react-icons/si'
import { TbExternalLink, TbBrandGithub, TbApi, TbShieldLock, TbX, TbStar, TbBulb, TbCode, TbLayersIntersect, TbRocket, TbBrain } from 'react-icons/tb'

const TECH_ICONS = {
  'React':        { icon: <SiReact />,       color: '#61DAFB' },
  'Node.js':      { icon: <SiNodedotjs />,   color: '#8CC84B' },
  'MongoDB':      { icon: <SiMongodb />,     color: '#4DB33D' },
  'Python':       { icon: <SiPython />,      color: '#3776AB' },
  'Tailwind CSS': { icon: <SiTailwindcss />, color: '#38BDF8' },
  'Express.js':   { icon: <SiExpress />,     color: '#E2E8F0' },
  'JavaScript':   { icon: <SiJavascript />,  color: '#F7DF1E' },
  'TypeScript':   { icon: <SiTypescript />,  color: '#3178C6' },
  'FastAPI':      { icon: <SiFastapi />,     color: '#009688' },
  'Flask':        { icon: <SiFlask />,       color: '#E2E8F0' },
  'Scikit-learn': { icon: <SiScikitlearn />, color: '#F7931E' },
  'TensorFlow':   { icon: <SiTensorflow />,  color: '#FF6F00' },
  'Pandas':       { icon: <SiPandas />,      color: '#150458' },
  'JWT':          { icon: <TbShieldLock />,  color: '#E040FB' },
  'REST APIs':    { icon: <TbApi />,         color: '#22C55E' },
}

const GradientPlaceholder = ({ category }) => {
  const gradients = {
    'Full Stack': 'linear-gradient(135deg, #1e1b4b 0%, #312e81 30%, #4338ca 60%, #6366f1 100%)',
    'MERN':       'linear-gradient(135deg, #052e16 0%, #166534 30%, #16a34a 60%, #22c55e 100%)',
    'ML':         'linear-gradient(135deg, #1e1b4b 0%, #6b21a8 30%, #a855f7 60%, #e879f9 100%)',
    default:      'linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #1e4d8c 70%, #2563eb 100%)',
  }
  const grad = gradients[category] || gradients.default
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: grad }} />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 0.95, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="text-6xl font-black opacity-10 select-none"
          style={{ fontFamily: "'DM Mono', monospace", color: '#fff' }}
        >{'</>'}</motion.div>
      </div>
      <div className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-20 blur-xl" style={{ background: '#6366F1' }} />
      <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full opacity-15 blur-lg" style={{ background: '#22C55E' }} />
    </div>
  )
}

const TechPill = ({ tech, small = false }) => {
  const meta = TECH_ICONS[tech]
  return (
    <motion.span
      whileHover={{ scale: 1.08, y: -1 }}
      className="inline-flex items-center gap-1.5 rounded-lg font-medium select-none"
      style={{
        padding: small ? '3px 8px' : '4px 10px',
        fontSize: small ? '10px' : '11px',
        background: meta ? `${meta.color}14` : 'rgba(99,102,241,0.1)',
        border: `1px solid ${meta ? meta.color + '33' : 'rgba(99,102,241,0.25)'}`,
        color: meta ? meta.color : '#94A3B8',
        fontFamily: "'DM Mono', monospace",
        letterSpacing: '0.05em',
        transition: 'box-shadow 0.2s',
        boxShadow: 'none',
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 10px ${meta ? meta.color + '44' : 'rgba(99,102,241,0.3)'}` }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}
    >
      {meta && <span style={{ fontSize: small ? '10px' : '12px' }}>{meta.icon}</span>}
      {tech}
    </motion.span>
  )
}

const CATEGORY_META = {
  'Full Stack': { color: '#6366F1', glow: 'rgba(99,102,241,0.4)' },
  'MERN':       { color: '#22C55E', glow: 'rgba(34,197,94,0.4)'  },
  'ML':         { color: '#A855F7', glow: 'rgba(168,85,247,0.4)' },
  default:      { color: '#38BDF8', glow: 'rgba(56,189,248,0.4)' },
}

const ProjectModal = ({ project, onClose }) => {
  const cat = CATEGORY_META[project.category] || CATEGORY_META.default
  const modalSections = [
    { icon: <TbBulb size={18} />,   label: 'Problem',    content: project.details?.problem    },
    { icon: <TbRocket size={18} />, label: 'Solution',   content: project.details?.solution   },
    { icon: <TbBrain size={18} />,  label: 'Challenges', content: project.details?.challenges },
    { icon: <TbCode size={18} />,   label: 'Learnings',  content: project.details?.learnings  },
  ].filter(s => s.content)
  const features = project.details?.features || []

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.8)' }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className="absolute inset-0 backdrop-blur-md" />
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 20 }}
        animate={{ opacity: 1, scale: 1,    y: 0  }}
        exit={{    opacity: 0, scale: 0.95, y: 12 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-2xl max-h-[88vh] overflow-hidden rounded-2xl flex flex-col"
        style={{
          background: 'rgba(15,23,42,0.92)',
          backdropFilter: 'blur(24px)',
          border: `1px solid ${cat.color}33`,
          boxShadow: `0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px ${cat.color}22, 0 0 60px ${cat.glow}`,
        }}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 p-6 pb-4"
          style={{ background: 'rgba(15,23,42,0.95)', backdropFilter: 'blur(20px)', borderBottom: `1px solid ${cat.color}22` }}
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[9px] font-bold tracking-[0.25em] uppercase px-2 py-0.5 rounded"
                style={{ fontFamily: "'DM Mono', monospace", color: cat.color, background: `${cat.color}18`, border: `1px solid ${cat.color}33` }}>
                {project.category || 'Project'}
              </span>
              <span className="text-[9px] tracking-widest uppercase" style={{ color: '#334155', fontFamily: "'DM Mono', monospace" }}>Case Study</span>
            </div>
            <h3 className="text-2xl font-bold leading-tight truncate" style={{ fontFamily: "'Outfit', sans-serif", color: '#F1F5F9' }}>
              {project.title}
            </h3>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(51,65,85,0.5)', border: '1px solid rgba(51,65,85,0.8)', color: '#94A3B8' }}
          ><TbX size={16} /></motion.button>
        </div>

        <div className="overflow-y-auto flex-1 p-6 space-y-6"
          style={{ scrollbarWidth: 'thin', scrollbarColor: `${cat.color}44 transparent` }}>
          <p style={{ color: '#94A3B8', fontFamily: "'Outfit', sans-serif", lineHeight: 1.7, fontSize: '14px' }}>{project.description}</p>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <TbLayersIntersect size={14} style={{ color: cat.color }} />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase" style={{ color: cat.color, fontFamily: "'DM Mono', monospace" }}>Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => <TechPill key={i} tech={tech} small />)}
            </div>
          </div>

          {features.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TbStar size={14} style={{ color: cat.color }} />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase" style={{ color: cat.color, fontFamily: "'DM Mono', monospace" }}>Key Features</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {features.map((f, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-2 p-3 rounded-xl"
                    style={{ background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(51,65,85,0.4)' }}>
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: cat.color }} />
                    <span style={{ color: '#CBD5E1', fontFamily: "'Outfit', sans-serif", fontSize: '12px', lineHeight: 1.5 }}>{f}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {modalSections.map((section, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.07 }}
              className="p-4 rounded-xl" style={{ background: 'rgba(30,41,59,0.4)', border: `1px solid ${cat.color}18` }}>
              <div className="flex items-center gap-2 mb-2" style={{ color: cat.color }}>
                {section.icon}
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>{section.label}</span>
              </div>
              <p style={{ color: '#94A3B8', fontFamily: "'Outfit', sans-serif", fontSize: '13px', lineHeight: 1.7 }}>{section.content}</p>
            </motion.div>
          ))}

          <div className="flex flex-wrap gap-2 pt-2">
            {project.github?.frontend       && <ModalLink href={project.github.frontend}        icon={<TbBrandGithub />} label="Frontend"   color={cat.color} />}
            {project.github?.backend        && <ModalLink href={project.github.backend}         icon={<TbBrandGithub />} label="Backend"    color={cat.color} />}
            {project.github?.recommendation && <ModalLink href={project.github.recommendation}  icon={<TbBrandGithub />} label="ML Service" color={cat.color} />}
            {typeof project.github === 'string' && <ModalLink href={project.github}             icon={<TbBrandGithub />} label="GitHub"     color={cat.color} />}
            {project.live && <ModalLink href={project.live} icon={<TbExternalLink />} label="Live Demo" color={cat.color} primary />}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const ModalLink = ({ href, icon, label, color, primary }) => (
  <motion.a href={href} target="_blank" rel="noopener noreferrer"
    whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}
    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold"
    style={{
      fontFamily: "'DM Mono', monospace", letterSpacing: '0.05em',
      ...(primary
        ? { background: `linear-gradient(135deg, ${color}cc, ${color}99)`, color: '#fff', border: `1px solid ${color}66`, boxShadow: `0 0 20px ${color}44` }
        : { background: 'rgba(30,41,59,0.6)', color: '#94A3B8', border: '1px solid rgba(51,65,85,0.6)' }),
    }}
  >{icon}{label}</motion.a>
)

const CardButton = ({ onClick, href, icon, label, primary, color = '#6366F1' }) => {
  const Tag = href ? 'a' : 'button'
  return (
    <motion.div whileHover={{ scale: 1.05, y: -1 }} whileTap={{ scale: 0.96 }}>
      <Tag
        {...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : { onClick })}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-semibold cursor-pointer select-none transition-all"
        style={{
          fontFamily: "'DM Mono', monospace", letterSpacing: '0.08em',
          ...(primary
            ? { background: `linear-gradient(135deg, ${color}dd, ${color}99)`, color: '#fff', border: `1px solid ${color}55`, boxShadow: `0 0 14px ${color}44` }
            : { background: 'rgba(30,41,59,0.6)', color: '#64748B', border: '1px solid rgba(51,65,85,0.5)' }),
        }}
        onMouseEnter={e => { if (!primary) { e.currentTarget.style.color='#E2E8F0'; e.currentTarget.style.borderColor=`${color}55`; e.currentTarget.style.background='rgba(99,102,241,0.1)' }}}
        onMouseLeave={e => { if (!primary) { e.currentTarget.style.color='#64748B'; e.currentTarget.style.borderColor='rgba(51,65,85,0.5)'; e.currentTarget.style.background='rgba(30,41,59,0.6)' }}}
      >{icon}{label}</Tag>
    </motion.div>
  )
}

export const cardVariants = {
  hidden: { opacity: 1, y: 0, scale: 1 },
  show:   { opacity: 1, y: 0, scale: 1 },
}

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const cardRef = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 260, damping: 28 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 260, damping: 28 })

  const handleMouseMove = e => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleMouseLeave = () => { x.set(0); y.set(0) }

  const cat = CATEGORY_META[project.category] || CATEGORY_META.default

  return (
    <>
      <motion.div
        ref={cardRef}
        variants={cardVariants}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative rounded-2xl overflow-hidden cursor-default"
      >
        <div
          className="relative h-full flex flex-col"
          style={{
            background: 'rgba(15,23,42,0.7)',
            border: '1px solid rgba(51,65,85,0.6)',
            borderRadius: '1rem',
            boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
            transition: 'box-shadow 0.4s ease, border-color 0.4s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${cat.color}44, 0 0 40px ${cat.glow}`
            e.currentTarget.style.borderColor = `${cat.color}44`
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.3)'
            e.currentTarget.style.borderColor = 'rgba(51,65,85,0.6)'
          }}
        >
          <div className="relative h-48 overflow-hidden rounded-t-2xl flex-shrink-0">
            {project.image ? (
              <motion.img
                src={project.image} alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            ) : (
              <GradientPlaceholder category={project.category} />
            )}
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to bottom, rgba(15,23,42,0.1) 0%, rgba(15,23,42,0.85) 100%)' }} />

            <div className="absolute top-3 left-3">
              <span className="text-[9px] font-bold tracking-[0.25em] uppercase px-2.5 py-1 rounded-lg"
                style={{
                  fontFamily: "'DM Mono', monospace", color: cat.color,
                  background: 'rgba(15,23,42,0.75)', backdropFilter: 'blur(8px)',
                  border: `1px solid ${cat.color}44`, boxShadow: `0 0 12px ${cat.glow}`,
                }}>
                {project.category || 'Project'}
              </span>
            </div>

            {project.featured && (
              <div className="absolute top-3 right-3">
                <span className="w-7 h-7 flex items-center justify-center rounded-lg"
                  style={{ background: 'rgba(15,23,42,0.75)', backdropFilter: 'blur(8px)', border: '1px solid rgba(245,158,11,0.4)', color: '#F59E0B', boxShadow: '0 0 12px rgba(245,158,11,0.3)' }}>
                  <TbStar size={13} />
                </span>
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-xl font-bold leading-tight" style={{ fontFamily: "'Outfit', sans-serif", color: '#F1F5F9' }}>
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex flex-col flex-1 p-5 pt-4 gap-4">
            <p className="text-sm leading-relaxed line-clamp-2" style={{ color: '#64748B', fontFamily: "'Outfit', sans-serif" }}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 5).map((tech, i) => <TechPill key={i} tech={tech} small />)}
              {project.techStack.length > 5 && (
                <span className="text-[10px] px-2 py-1 rounded-lg"
                  style={{ fontFamily: "'DM Mono', monospace", color: '#475569', background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(51,65,85,0.4)' }}>
                  +{project.techStack.length - 5} more
                </span>
              )}
            </div>

            <div className="h-px" style={{ background: 'rgba(51,65,85,0.5)' }} />

            <div className="flex flex-wrap gap-2 items-center">
              {project.github?.frontend       && <CardButton href={project.github.frontend}        icon={<TbBrandGithub size={12} />} label="Frontend" color={cat.color} />}
              {project.github?.backend        && <CardButton href={project.github.backend}         icon={<TbBrandGithub size={12} />} label="Backend"  color={cat.color} />}
              {project.github?.recommendation && <CardButton href={project.github.recommendation}  icon={<TbBrandGithub size={12} />} label="ML"       color={cat.color} />}
              {typeof project.github === 'string' && <CardButton href={project.github}             icon={<TbBrandGithub size={12} />} label="GitHub"   color={cat.color} />}
              <div className="flex-1" />
              <CardButton onClick={() => setIsModalOpen(true)} icon={<TbCode size={12} />} label="Details" color={cat.color} />
              {project.live && <CardButton href={project.live} icon={<TbExternalLink size={12} />} label="Live" primary color={cat.color} />}
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && <ProjectModal project={project} onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </>
  )
}

export default ProjectCard