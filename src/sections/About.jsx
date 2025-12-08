import { motion } from 'framer-motion'
import { GraduationCap, Award, Code2, Calendar } from 'lucide-react'
import { useState } from 'react'

const skills = [
  'JavaScript', 'React.js', 'Node.js', 'Express',
  'MongoDB', 'Tailwind CSS', 'REST APIs', 'Git'
]

// Tech logos with SVG icons
const techLogos = [
  { name: 'JavaScript', color: '#F7DF1E', icon: 'JS' },
  { name: 'React', color: '#61DAFB', icon: '⚛️' },
  { name: 'Node.js', color: '#339933', icon: 'N' },
  { name: 'MongoDB', color: '#47A248', icon: 'M' },
  { name: 'Git', color: '#F05032', icon: 'G' },
  { name: 'TypeScript', color: '#3178C6', icon: 'TS' },
]

const timeline = [
  {
    icon: GraduationCap,
    title: 'Baccalaureate in Physical Sciences',
    subtitle: 'High School Diploma',
    year: '2019',
  },
  {
    icon: Award,
    title: 'Attestation from Najm Academy',
    subtitle: 'Full-Stack Web Development',
    year: '2023',
  },
  {
    icon: Code2,
    title: 'Full-Stack Developer',
    subtitle: 'Building Web Applications',
    year: 'Present',
  },
]

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know me better - my background, skills, and journey
          </p>
        </motion.div>

        {/* Profile Image with Floating Tech Logos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="relative group">
            {/* Main Image Container */}
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_40px_rgba(56,189,248,0.3)]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Placeholder gradient - replace with your actual image */}
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-dark-secondary to-purple-500/20 flex items-center justify-center">
                <span className="text-6xl md:text-8xl font-bold gradient-text">A</span>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Floating Tech Logos - appear on hover */}
            {techLogos.map((tech, index) => {
              const angle = (index * 60) - 60 // Distribute around the circle
              const radius = 160 // Distance from center
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius

              return (
                <motion.div
                  key={tech.name}
                  className="absolute w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-sm md:text-base font-bold shadow-lg cursor-pointer opacity-0 group-hover:opacity-100"
                  style={{
                    backgroundColor: tech.color,
                    color: tech.name === 'JavaScript' || tech.name === 'TypeScript' ? '#000' : '#fff',
                    left: '50%',
                    top: '50%',
                    boxShadow: `0 0 20px ${tech.color}50`,
                  }}
                  initial={{ x: 0, y: 0, scale: 0 }}
                  whileHover={{ scale: 1.2 }}
                  animate={{
                    x: x - 24,
                    y: y - 24,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 200
                  }}
                  title={tech.name}
                >
                  {tech.icon}
                </motion.div>
              )
            })}

            {/* Glowing ring animation */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/50 opacity-0 group-hover:opacity-100"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.2, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{
                width: '100%',
                height: '100%',
                boxShadow: '0 0 30px rgba(56, 189, 248, 0.5)'
              }}
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="glass rounded-3xl p-8 glow-box-hover"
            >
              <h3 className="text-2xl font-display font-semibold mb-6 gradient-text">
                Who Am I?
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hello! I'm <span className="text-primary font-semibold">Abdellatif Abouhafss Elidrissi</span>,
                  a 24-year-old passionate Full-Stack Web Developer from Morocco.
                </p>
                <p>
                  With a strong foundation in Physical Sciences and specialized training
                  from Najm Academy, I've developed expertise in building modern,
                  scalable web applications that deliver exceptional user experiences.
                </p>
                <p>
                  I specialize in the <span className="text-primary">MERN stack</span> (MongoDB, Express, React, Node.js)
                  and love turning complex problems into simple, elegant solutions.
                  My approach combines clean code practices with creative problem-solving.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies,
                  contributing to open-source projects, and continuously expanding my skill set.
                </p>
              </div>

              {/* Skills Badges */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-white">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-display font-semibold mb-8 gradient-text">
                My Journey
              </h3>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    className="relative pl-16"
                  >
                    {/* Icon */}
                    <motion.div
                      className="absolute left-0 w-12 h-12 bg-dark-secondary border-2 border-primary rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <item.icon className="w-5 h-5 text-primary" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      className="glass rounded-2xl p-6 glass-hover"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                        <Calendar className="w-4 h-4" />
                        {item.year}
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-400">{item.subtitle}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
