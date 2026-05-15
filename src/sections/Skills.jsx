import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import {
  SiReact, SiJavascript, SiTailwindcss, SiHtml5,
  SiNodedotjs, SiExpress,
  SiMongodb,
  SiGit, SiGithub, SiPostman, SiRedux, SiMysql
} from 'react-icons/si'
import { TbApi, TbShieldLock } from 'react-icons/tb'

const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    label: 'Frontend',
    accent: '#6366F1',
    glow: 'rgba(99,102,241,0.35)',
    skills: [
      { name: 'React',       icon: <SiReact />,       level: 'expert',   levelPct: 95 },
      { name: 'JavaScript',  icon: <SiJavascript />,  level: 'expert',   levelPct: 93 },
      { name: 'Tailwind CSS',icon: <SiTailwindcss />, level: 'expert',   levelPct: 90 },
      { name: 'HTML5',       icon: <SiHtml5 />,       level: 'advanced', levelPct: 97 },
      { name: 'REDUX',       icon: <SiRedux />,       level: 'expert',   levelPct: 82 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    accent: '#22C55E',
    glow: 'rgba(34,197,94,0.35)',
    skills: [
      { name: 'Node.js',   icon: <SiNodedotjs />,  level: 'expert', levelPct: 90 },
      { name: 'Express.js',icon: <SiExpress />,    level: 'expert', levelPct: 88 },
      { name: 'REST APIs', icon: <TbApi />,         level: 'expert', levelPct: 92 },
      { name: 'JWT Auth',  icon: <TbShieldLock />, level: 'expert', levelPct: 80 },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    accent: '#38BDF8',
    glow: 'rgba(56,189,248,0.35)',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, level: 'expert', levelPct: 88 },
      { name: 'mySQL',   icon: <SiMysql />,   level: 'expert', levelPct: 78 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    accent: '#F59E0B',
    glow: 'rgba(245,158,11,0.35)',
    skills: [
      { name: 'Git',     icon: <SiGit />,     level: 'expert', levelPct: 93 },
      { name: 'GitHub',  icon: <SiGithub />,  level: 'expert', levelPct: 92 },
      { name: 'Postman', icon: <SiPostman />, level: 'expert', levelPct: 80 },
    ],
  },
]

const LEVEL_META = {
  expert:     { bar: '#6366F1', glow: 'rgba(99,102,241,0.5)',  label: 'Expert'     },
  advanced:   { bar: '#22C55E', glow: 'rgba(34,197,94,0.45)',  label: 'Advanced'   },
  proficient: { bar: '#38BDF8', glow: 'rgba(56,189,248,0.4)',  label: 'Proficient' },
}

const PARTICLE_COUNT = 22
const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  dur: Math.random() * 14 + 10,
  delay: Math.random() * -20,
  dx: (Math.random() - 0.5) * 60,
  dy: (Math.random() - 0.5) * 60,
}))

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {particles.map(p => (
      <motion.div
        key={p.id}
        className="absolute rounded-full"
        style={{
          left: `${p.x}%`,
          top: `${p.y}%`,
          width: p.size,
          height: p.size,
          background: 'rgba(99,102,241,0.5)',
          boxShadow: '0 0 6px 2px rgba(99,102,241,0.3)',
        }}
        animate={{
          x: [0, p.dx, 0],
          y: [0, p.dy, 0],
          opacity: [0.15, 0.55, 0.15],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: p.dur,
          delay: p.delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
)

const SkillCard = ({ skill, index, accent }) => {
  const lvl = LEVEL_META[skill.level] ?? LEVEL_META.proficient

  return (
    <motion.div
      whileHover={{ y: -7, scale: 1.045 }}
      className="group relative flex flex-col items-center gap-3 p-5 rounded-2xl cursor-default select-none overflow-hidden"
      style={{
        background: 'rgba(15,23,42,0.55)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        border: '1px solid rgba(99,102,241,0.16)',
        boxShadow: '0 4px 28px rgba(0,0,0,0.3)',
        transition: 'box-shadow 0.3s, border-color 0.3s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = `0 12px 48px ${lvl.glow}, 0 0 0 1.5px ${lvl.bar}66`
        e.currentTarget.style.borderColor = `${lvl.bar}55`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 4px 28px rgba(0,0,0,0.3)'
        e.currentTarget.style.borderColor = 'rgba(99,102,241,0.16)'
      }}
    >
      {/* top glow blob */}
      <div
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-12 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl"
        style={{ background: lvl.bar }}
      />
      {/* shimmer sweep */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.8s infinite',
        }}
      />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: [0, -8, 8, 0] }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-12 h-12 flex items-center justify-center rounded-xl text-[1.6rem]"
        style={{
          background: `linear-gradient(135deg, ${lvl.bar}28 0%, rgba(15,23,42,0.5) 100%)`,
          border: `1px solid ${lvl.bar}3a`,
          color: lvl.bar,
          boxShadow: `0 0 16px ${lvl.glow}`,
        }}
      >
        {skill.icon}
      </motion.div>

      {/* Name */}
      <span
        className="relative z-10 text-[13px] font-semibold tracking-widest text-center leading-tight uppercase"
        style={{ color: '#CBD5E1', fontFamily: "'DM Mono', 'Fira Code', monospace" }}
      >
        {skill.name}
      </span>

      {/* Level bar */}
      <div className="relative z-10 w-full space-y-1">
        <div className="h-[3px] w-full rounded-full overflow-hidden" style={{ background: 'rgba(51,65,85,0.7)' }}>
          <motion.div
            className="h-full rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: skill.levelPct + '%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: index * 0.065 + 0.35, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ background: `linear-gradient(90deg, ${lvl.bar}, ${lvl.bar}80)` }}
          />
        </div>
        <p className="text-[9px] text-right font-semibold tracking-widest uppercase" style={{ color: `${lvl.bar}cc` }}>
          {lvl.label}
        </p>
      </div>
    </motion.div>
  )
}

const CategoryTab = ({ cat, active, onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    className="relative px-5 py-2 rounded-xl text-sm font-semibold tracking-widest uppercase transition-colors duration-200"
    style={{
      fontFamily: "'DM Mono', monospace",
      color: active ? '#fff' : '#64748B',
      background: active ? `linear-gradient(135deg, ${cat.accent}cc, ${cat.accent}88)` : 'rgba(30,41,59,0.5)',
      border: active ? `1px solid ${cat.accent}66` : '1px solid rgba(51,65,85,0.4)',
      boxShadow: active ? `0 0 20px ${cat.glow}` : 'none',
    }}
  >
    {cat.label}
    {active && (
      <motion.div
        layoutId="tab-indicator"
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${cat.accent}22, transparent)` }}
        transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
      />
    )}
  </motion.button>
)

const Skills = () => {
  const [activeId, setActiveId] = useState('frontend')
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const blobY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const activeCategory = SKILL_CATEGORIES.find(c => c.id === activeId)

  return (
    <>
      <style>{`
        @keyframes shimmer { from { background-position: 200% 0 } to { background-position: -200% 0 } }
        .skill-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 160px));
          gap: 1rem;
          justify-content: center;
        }
        @media (max-width: 480px) {
          .skill-grid {
            grid-template-columns: repeat(2, minmax(140px, 1fr));
            justify-content: center;
          }
        }
      `}</style>

      <section
        id="skills"
        ref={sectionRef}
        className="relative overflow-hidden py-28"
        style={{ background: '#0F172A' }}
      >
        {/* Ambient blobs */}
        <motion.div style={{ y: blobY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[120px]"
            style={{ background: '#6366F1' }} />
          <div className="absolute bottom-[-20%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[100px]"
            style={{ background: '#22C55E' }} />
          <div className="absolute top-[40%] left-[45%] w-[300px] h-[300px] rounded-full opacity-[0.05] blur-[80px]"
            style={{ background: '#38BDF8' }} />
        </motion.div>

        {/* Noise texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />

        <FloatingParticles />

        {/* Grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-[0.35em] uppercase mb-4 font-medium"
              style={{ color: '#6366F1', fontFamily: "'DM Mono', monospace" }}>
              ✦ Tech Arsenal
            </p>
            <h2 className="text-5xl sm:text-6xl font-extrabold leading-none mb-4"
              style={{
                background: 'linear-gradient(135deg, #E2E8F0 0%, #94A3B8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
              Skills &amp; Technologies
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-500" />
              <span className="text-sm tracking-widest uppercase" style={{ color: '#475569', fontFamily: "'DM Mono', monospace" }}>
                What I work with
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-indigo-500" />
            </div>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {SKILL_CATEGORIES.map(cat => (
              <CategoryTab
                key={cat.id}
                cat={cat}
                active={activeId === cat.id}
                onClick={() => setActiveId(cat.id)}
              />
            ))}
          </motion.div>

          {/* Skill Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              {/* Category header strip */}
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <span
                  className="text-xs font-bold tracking-[0.3em] uppercase px-3 py-1 rounded-lg"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    color: activeCategory.accent,
                    background: `${activeCategory.accent}18`,
                    border: `1px solid ${activeCategory.accent}33`,
                  }}
                >
                  {activeCategory.label}
                </span>
                <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${activeCategory.accent}44, transparent)` }} />
                <span className="text-xs" style={{ color: '#334155', fontFamily: "'DM Mono', monospace" }}>
                  {activeCategory.skills.length} skills
                </span>
              </motion.div>

              <div className="skill-grid">
                {activeCategory.skills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} index={i} accent={activeCategory.accent} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mt-14"
          >
            {Object.entries(LEVEL_META).map(([key, meta]) => (
              <div key={key} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ background: meta.bar, boxShadow: `0 0 6px ${meta.bar}` }} />
                <span className="text-xs tracking-widest uppercase" style={{ color: '#475569', fontFamily: "'DM Mono', monospace" }}>
                  {meta.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  )
}

export default Skills