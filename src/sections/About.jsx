import { motion } from 'framer-motion'
import { GraduationCap, Award, Code2, Calendar } from 'lucide-react'

const skills = [
  'Next.js', 'TypeScript', 'Node.js', 'MongoDB',
  'Tailwind CSS', 'REST APIs', 'Git'
]

// Tech logos matching the skills below
const techLogos = [
  { name: 'TypeScript', color: '#3178C6', icon: 'TS' },
  { name: 'Next.js', color: '#000000', icon: '▲' },
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
    certificate: null,
  },
  {
    icon: Award,
    title: 'Attestation from Najm Academy',
    subtitle: 'Full-Stack Web Development Training',
    year: '2023',
    certificate: null,
  },
  {
    icon: Code2,
    title: 'Freelance Full-Stack Developer',
    subtitle: 'Shipped GasManager.ma, ToolsForge, Salon Nour',
    year: '2024–present',
    certificate: null,
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
            <span className="text-green-500 font-mono">$</span> About <span className="text-green-400">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Who I am, what I build, and how I work
          </p>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <motion.div
            className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-green-500/30 shadow-[0_0_40px_rgba(34,197,94,0.3)]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/profile.jpg"
              alt="Abdellatif Abouhafss Elidrissi"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Card with Floating Tech Logos on Text Hover */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="bg-black/80 border-2 border-green-500/30 rounded-2xl p-8 hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-all duration-300"
            >
              <h3 className="text-2xl font-mono font-semibold mb-6 text-green-400">
                &gt;_ who_am_i
              </h3>

              {/* Text with floating logos on hover */}
              <div className="bio-text-container group/text relative space-y-4 text-gray-300 leading-relaxed cursor-default">
                <p>
                  I'm <span className="text-green-400 font-semibold">Abdellatif</span>,
                  a full-stack developer from Morocco. I build and ship web applications for
                  small businesses and startups — booking systems, dashboards, SaaS tools —
                  and I keep them running after launch.
                </p>
                <p>
                  I work with <span className="text-green-400">Next.js, TypeScript, Node.js and MongoDB</span>,
                  and I use AI tooling daily to ship faster without cutting quality.
                </p>

                {/* Floating Tech Logos - half above, half below text */}
                {techLogos.map((tech, index) => {
                  // First 4 logos on top, last 4 on bottom
                  const topPositions = [
                    { x: 20, y: -55 },
                    { x: 120, y: -70 },
                    { x: 230, y: -50 },
                    { x: 340, y: -65 },
                  ]
                  const bottomPositions = [
                    { x: 20, y: 'calc(100% + 15px)' },
                    { x: 120, y: 'calc(100% + 30px)' },
                    { x: 230, y: 'calc(100% + 10px)' },
                    { x: 340, y: 'calc(100% + 25px)' },
                  ]

                  const isTop = index < 4
                  const pos = isTop ? topPositions[index] : bottomPositions[index - 4]

                  return (
                    <div
                      key={tech.name}
                      className="text-logo absolute w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-xs font-bold shadow-lg border border-white/20 pointer-events-none"
                      style={{
                        backgroundColor: tech.color,
                        color: tech.name === 'Tailwind' ? '#000' : '#fff',
                        left: pos.x,
                        top: pos.y,
                        boxShadow: `0 0 20px ${tech.color}60`,
                        opacity: 0,
                        transform: isTop ? 'translateY(20px) scale(0.5)' : 'translateY(-20px) scale(0.5)',
                        transition: `all 0.3s ease ${index * 0.05}s`,
                      }}
                      title={tech.name}
                    >
                      {tech.icon}
                    </div>
                  )
                })}
              </div>

              {/* CSS for text hover effect */}
              <style>{`
                .bio-text-container:hover .text-logo {
                  opacity: 1 !important;
                  transform: translateY(0) scale(1) !important;
                }
              `}</style>

              {/* Skills Badges */}
              <div className="mt-8">
                <h4 className="text-lg font-mono font-semibold mb-4 text-green-400">&gt;_ tech_stack</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 bg-green-500/10 text-green-400 rounded-md text-sm font-mono font-medium border border-green-500/30 hover:bg-green-500/20 hover:border-green-500 transition-colors cursor-default"
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
              <h3 className="text-2xl font-mono font-semibold mb-8 text-green-400">
                &gt;_ my_journey
              </h3>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-green-500/50 to-transparent" />

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
                      className="absolute left-0 w-12 h-12 bg-black border-2 border-green-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                      whileHover={{ scale: 1.1 }}
                    >
                      <item.icon className="w-5 h-5 text-green-400" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative">
                      <motion.div
                        className="bg-black/80 border border-green-500/30 rounded-xl p-6 hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all duration-300 cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center gap-2 text-green-400 text-sm font-mono font-medium mb-2">
                          <Calendar className="w-4 h-4" />
                          {item.year}
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-400">{item.subtitle}</p>
                      </motion.div>

                    </div>
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
