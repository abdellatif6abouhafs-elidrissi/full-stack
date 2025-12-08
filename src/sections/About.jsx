import { motion } from 'framer-motion'
import { GraduationCap, Award, Code2, Calendar } from 'lucide-react'
import { useState } from 'react'

const skills = [
  'JavaScript', 'React.js', 'Node.js', 'Express',
  'MongoDB', 'Tailwind CSS', 'REST APIs', 'Git'
]

// Tech logos matching the skills below
const techLogos = [
  { name: 'JavaScript', color: '#F7DF1E', icon: 'JS' },
  { name: 'React.js', color: '#61DAFB', icon: '⚛️' },
  { name: 'Node.js', color: '#339933', icon: 'N' },
  { name: 'Express', color: '#000000', icon: 'Ex' },
  { name: 'MongoDB', color: '#47A248', icon: 'M' },
  { name: 'Tailwind', color: '#06B6D4', icon: 'TW' },
  { name: 'REST APIs', color: '#FF6B6B', icon: 'API' },
  { name: 'Git', color: '#F05032', icon: 'G' },
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Card with Floating Tech Logos on Hover */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="glass rounded-3xl p-8 glow-box-hover relative group"
            >
              <h3 className="text-2xl font-display font-semibold mb-6 gradient-text">
                Who Am I?
              </h3>

              {/* Text content with hover effect */}
              <div className="space-y-4 text-gray-300 leading-relaxed relative">
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

                {/* Floating Tech Logos - appear on hover over text */}
                {techLogos.map((tech, index) => {
                  // Position logos in a scattered pattern above the text
                  const positions = [
                    { x: -20, y: -60 },
                    { x: 60, y: -80 },
                    { x: 150, y: -50 },
                    { x: 240, y: -75 },
                    { x: 320, y: -55 },
                    { x: 400, y: -70 },
                    { x: 100, y: -100 },
                    { x: 280, y: -95 },
                  ]
                  const pos = positions[index] || { x: index * 60, y: -60 }

                  return (
                    <motion.div
                      key={tech.name}
                      className="absolute w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-xs font-bold shadow-lg cursor-pointer opacity-0 group-hover:opacity-100 border border-white/20 z-10"
                      style={{
                        backgroundColor: tech.color,
                        color: tech.name === 'JavaScript' || tech.name === 'Tailwind' ? '#000' : '#fff',
                        left: pos.x,
                        top: pos.y,
                        boxShadow: `0 0 20px ${tech.color}60`,
                      }}
                      initial={{ y: 20, opacity: 0, scale: 0.5 }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      animate={{ y: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                      }}
                      title={tech.name}
                    >
                      <motion.span
                        className="opacity-0 group-hover:opacity-100"
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        {tech.icon}
                      </motion.span>
                    </motion.div>
                  )
                })}
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
