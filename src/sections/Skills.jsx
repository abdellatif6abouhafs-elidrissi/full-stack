import { motion } from 'framer-motion'

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

const SkillCard = ({ skill }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className="glass rounded-3xl p-8 text-center glass-hover group cursor-pointer min-w-[200px] mx-4"
  >
    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
      {skill.icon}
    </div>
    <p className="text-xl text-white font-semibold group-hover:text-primary transition-colors mb-3">
      {skill.name}
    </p>
    <div className="h-2 bg-dark-tertiary rounded-full overflow-hidden">
      <div
        className="h-full rounded-full"
        style={{
          width: `${skill.level}%`,
          background: `linear-gradient(90deg, ${skill.color}, #38BDF8)`,
        }}
      />
    </div>
    <p className="text-sm text-primary font-semibold mt-2">{skill.level}%</p>
  </motion.div>
)

const Skills = () => {
  // Double the skills array for seamless infinite scroll
  const doubledSkills = [...skills, ...skills]

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
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>
      </div>

      {/* Infinite Scroll Carousel - Row 1 (Left to Right) */}
      <div className="relative mb-8">
        <motion.div
          className="flex"
          animate={{
            x: [0, -2400],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {doubledSkills.map((skill, index) => (
            <SkillCard key={`row1-${skill.name}-${index}`} skill={skill} />
          ))}
        </motion.div>
      </div>

      {/* Infinite Scroll Carousel - Row 2 (Right to Left) */}
      <div className="relative">
        <motion.div
          className="flex"
          animate={{
            x: [-2400, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {doubledSkills.map((skill, index) => (
            <SkillCard key={`row2-${skill.name}-${index}`} skill={skill} />
          ))}
        </motion.div>
      </div>

      <div className="container-custom">
        {/* 3D Proficiency Cards */}
        <div className="max-w-5xl mx-auto mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-semibold mb-12 text-center gradient-text"
          >
            Proficiency Level
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.slice(0, 8).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 100
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
                  className="relative glass rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-[0_20px_50px_rgba(56,189,248,0.3)]"
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

                  {/* Icon with 3D effect */}
                  <motion.div
                    className="text-5xl mb-4 relative z-10"
                    style={{ transform: 'translateZ(30px)' }}
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.3 }}
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
                    {/* Background circle */}
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="35"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="6"
                        fill="none"
                      />
                      {/* Progress circle */}
                      <motion.circle
                        cx="40"
                        cy="40"
                        r="35"
                        stroke={skill.color}
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: '0 220' }}
                        whileInView={{
                          strokeDasharray: `${skill.level * 2.2} 220`
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.1 + 0.3,
                          ease: 'easeOut'
                        }}
                        style={{
                          filter: `drop-shadow(0 0 10px ${skill.color})`,
                        }}
                      />
                    </svg>
                    {/* Percentage text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.span
                        className="text-lg font-bold"
                        style={{ color: skill.color }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.8 }}
                      >
                        {skill.level}%
                      </motion.span>
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
          </div>
        </div>

        {/* Tools Section with Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-display font-semibold mb-8 text-center gradient-text">
            Other Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'VS Code', icon: '💻', color: '#007ACC' },
              { name: 'Postman', icon: '🚀', color: '#FF6C37' },
              { name: 'Figma', icon: '🎨', color: '#F24E1E' },
              { name: 'npm', icon: '📦', color: '#CB3837' },
              { name: 'Vercel', icon: '▲', color: '#000000' },
              { name: 'Netlify', icon: '🌐', color: '#00C7B7' },
              { name: 'Linux', icon: '🐧', color: '#FCC624' },
              { name: 'Docker', icon: '🐳', color: '#2496ED' },
            ].map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    boxShadow: `0 10px 30px ${tool.color}40`
                  }}
                  className="group flex items-center gap-3 px-5 py-3 glass rounded-xl text-gray-300 font-medium hover:border-primary/30 transition-all duration-300 cursor-default"
                  style={{
                    borderColor: 'transparent',
                  }}
                >
                  <span
                    className="text-2xl group-hover:scale-125 transition-transform duration-300"
                  >
                    {tool.icon}
                  </span>
                  <span className="group-hover:text-white transition-colors">
                    {tool.name}
                  </span>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
