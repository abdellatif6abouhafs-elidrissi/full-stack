import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const skills = [
  { name: 'JavaScript', level: 95, color: '#F7DF1E', icon: '⚡' },
  { name: 'React.js', level: 92, color: '#61DAFB', icon: '⚛️' },
  { name: 'Node.js', level: 88, color: '#339933', icon: '🟢' },
  { name: 'Express.js', level: 85, color: '#000000', icon: '🚀' },
  { name: 'MongoDB', level: 85, color: '#47A248', icon: '🍃' },
  { name: 'Tailwind CSS', level: 90, color: '#06B6D4', icon: '🎨' },
  { name: 'REST APIs', level: 88, color: '#FF6B6B', icon: '🔗' },
  { name: 'Git & GitHub', level: 85, color: '#F05032', icon: '📦' },
  { name: 'TypeScript', level: 80, color: '#3178C6', icon: '📘' },
  { name: 'Next.js', level: 75, color: '#000000', icon: '▲' },
]

// Proficiency Cards Component with Swapping Animation
const ProficiencyCards = () => {
  const [orderedSkills, setOrderedSkills] = useState(skills.slice(0, 8))

  useEffect(() => {
    const interval = setInterval(() => {
      setOrderedSkills(prev => {
        const newOrder = [...prev]
        // Random swap between two cards
        const idx1 = Math.floor(Math.random() * newOrder.length)
        let idx2 = Math.floor(Math.random() * newOrder.length)
        while (idx2 === idx1) {
          idx2 = Math.floor(Math.random() * newOrder.length)
        }
        // Swap
        const temp = newOrder[idx1]
        newOrder[idx1] = newOrder[idx2]
        newOrder[idx2] = temp
        return newOrder
      })
    }, 2000) // Swap every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-5xl mx-auto mt-20">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-mono font-semibold mb-12 text-center text-green-400"
      >
        &gt;_ proficiency_level
      </motion.h3>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        layout
      >
        {orderedSkills.map((skill) => (
          <motion.div
            key={skill.name}
            layout
            transition={{
              layout: {
                type: 'spring',
                stiffness: 350,
                damping: 25,
              }
            }}
            whileHover={{
              scale: 1.05,
              rotateY: 10,
              rotateX: -5,
              z: 50,
            }}
            className="group perspective-1000"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div
              className="relative bg-black/80 border border-green-500/30 rounded-2xl p-6 text-center transition-all duration-300 hover:border-green-500 hover:shadow-[0_20px_50px_rgba(34,197,94,0.3)]"
              style={{
                transformStyle: 'preserve-3d',
                background: `linear-gradient(135deg, rgba(30,41,59,0.9), rgba(15,23,42,0.95))`,
              }}
            >
              {/* Glowing border effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${skill.color}30, transparent, ${skill.color}20)`,
                  boxShadow: `inset 0 0 20px ${skill.color}20`,
                }}
              />

              {/* Icon */}
              <motion.div
                className="text-5xl mb-4 relative z-10"
                style={{ transform: 'translateZ(30px)' }}
              >
                {skill.icon}
              </motion.div>

              {/* Skill Name */}
              <h4
                className="text-white font-semibold mb-3 relative z-10"
                style={{ transform: 'translateZ(20px)' }}
              >
                {skill.name}
              </h4>

              {/* Circular Progress */}
              <div className="relative w-20 h-20 mx-auto" style={{ transform: 'translateZ(25px)' }}>
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="35"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="35"
                    stroke={skill.color}
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${skill.level * 2.2} 220`}
                    style={{
                      filter: `drop-shadow(0 0 10px ${skill.color})`,
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-lg font-bold"
                    style={{ color: skill.color }}
                  >
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Floating particles on hover */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                      backgroundColor: skill.color,
                      left: `${20 + i * 15}%`,
                      bottom: '10%',
                    }}
                    animate={{
                      y: [-10, -50, -10],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="section-padding overflow-hidden">
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-green-500 font-mono">$</span> My <span className="text-green-400">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* 3D Rotating Carousel */}
        <div className="flex justify-center items-center mb-16 py-16" style={{ perspective: '1200px' }}>
          <motion.div
            className="relative w-[500px] h-[500px] md:w-[650px] md:h-[650px]"
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotateY: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            {skills.map((skill, index) => {
              const angle = (360 / skills.length) * index
              const radius = 280

              return (
                <div
                  key={skill.name}
                  className="absolute left-1/2 top-1/2 w-40 h-40 md:w-48 md:h-48"
                  style={{
                    marginLeft: '-80px',
                    marginTop: '-80px',
                    transformStyle: 'preserve-3d',
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  }}
                >
                  <div
                    className="w-full h-full glass rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                    style={{
                      backfaceVisibility: 'hidden',
                      background: `linear-gradient(135deg, rgba(30,41,59,0.95), rgba(15,23,42,0.98))`,
                      border: `2px solid ${skill.color}60`,
                      boxShadow: `0 0 25px ${skill.color}40, inset 0 0 20px ${skill.color}10`,
                    }}
                  >
                    <span className="text-5xl md:text-6xl mb-3">{skill.icon}</span>
                    <span className="text-sm md:text-base font-semibold text-white text-center px-2">
                      {skill.name}
                    </span>
                    <span className="text-sm font-bold mt-1" style={{ color: skill.color }}>
                      {skill.level}%
                    </span>
                  </div>
                </div>
              )
            })}

            {/* Center glow effect */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-green-500/30 blur-3xl" />
          </motion.div>
        </div>
      </div>

      <div className="container-custom">
        {/* Proficiency Level - Swapping Cards */}
        <ProficiencyCards />

        {/* Tools Section - Infinite Scrolling Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-mono font-semibold mb-8 text-center text-green-400">
            &gt;_ other_tools
          </h3>
        </motion.div>
      </div>

      {/* Marquee Container - Full Width */}
      <div className="relative overflow-hidden py-4">
        {/* Gradient Fade Left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        {/* Gradient Fade Right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -1200],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* Double the items for seamless loop */}
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {[
                { name: 'VS Code', icon: '💻', color: '#22C55E' },
                { name: 'Postman', icon: '🚀', color: '#22C55E' },
                { name: 'Figma', icon: '🎨', color: '#22C55E' },
                { name: 'npm', icon: '📦', color: '#22C55E' },
                { name: 'Vercel', icon: '▲', color: '#22C55E' },
                { name: 'Netlify', icon: '🌐', color: '#22C55E' },
                { name: 'Linux', icon: '🐧', color: '#22C55E' },
                { name: 'Docker', icon: '🐳', color: '#22C55E' },
              ].map((tool) => (
                <div
                  key={`${setIndex}-${tool.name}`}
                  className="group flex items-center gap-3 px-6 py-4 bg-black border-2 border-green-500/50 rounded-xl text-gray-300 font-mono font-medium hover:border-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] hover:bg-green-500/10 transition-all duration-300 cursor-default shrink-0"
                >
                  <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                    {tool.icon}
                  </span>
                  <span className="group-hover:text-green-400 transition-colors text-lg">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container-custom">
      </div>
    </section>
  )
}

export default Skills
