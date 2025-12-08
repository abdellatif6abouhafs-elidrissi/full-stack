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
        {/* Progress Bars */}
        <div className="max-w-4xl mx-auto mt-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-semibold mb-8 text-center gradient-text"
          >
            Proficiency Level
          </motion.h3>

          <div className="space-y-6">
            {skills.slice(0, 8).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium flex items-center gap-2">
                    <span className="text-2xl">{skill.icon}</span>
                    {skill.name}
                  </span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-dark-tertiary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full relative overflow-hidden"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, #38BDF8)`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                  >
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: '-100%' }}
                      whileInView={{ x: '200%' }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.1 + 0.5,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
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
            {['VS Code', 'Postman', 'Figma', 'npm', 'Vercel', 'Netlify', 'Linux', 'Docker'].map(
              (tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="px-6 py-3 glass rounded-full text-gray-300 font-medium hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default"
                >
                  {tool}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
