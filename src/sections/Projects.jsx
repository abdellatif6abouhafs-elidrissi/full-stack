import { motion } from 'framer-motion'
import { ExternalLink, Github, Folder } from 'lucide-react'
import { useState } from 'react'

// github: null -> the GitHub button is hidden for that card
const projects = [
  {
    title: 'ToolsForge',
    problem: 'Freelancers and small businesses pay for subscriptions just to make an invoice or contract.',
    built: 'A free, no-signup web app with invoice, contract and mortgage calculators and generators.',
    result: 'Live SaaS product on Vercel.',
    image: '/projects/toolsforge.jpg',
    tech: ['Next.js', 'TypeScript', 'Vercel'],
    github: null,
    live: 'https://toolsforge-app.vercel.app',
  },
  {
    title: 'GasManager.ma',
    problem: 'A gas station was tracking stock and sales by hand.',
    built: 'A management dashboard for inventory, sales and daily operations.',
    result: 'Live on Vercel, used daily by a gas station in Morocco.',
    note: 'Demo: demo@gasmanager.ma / Demo1234!',
    image: '/projects/gasmanager.jpg',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Vercel'],
    github: 'https://github.com/abdellatif6abouhafs-elidrissi/-gas-manager',
    live: 'https://gas-manager-tan.vercel.app',
  },
  {
    title: 'Salon Nour',
    problem: 'Salons juggle bookings, reminders and client records across phone calls and notebooks.',
    built: 'A multi-salon SaaS platform: online booking, SMS/WhatsApp reminders and client management.',
    result: 'Live SaaS on Vercel, with a 30-day free trial for new salons.',
    image: '/projects/salon-nour.jpg',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind'],
    github: 'https://github.com/abdellatif6abouhafs-elidrissi/noursalon-app',
    live: 'https://noursalon-app.vercel.app',
  },
  {
    title: 'Fi-Khidmatik',
    problem: 'Clients struggle to find and book verified craftsmen — a service marketplace was missing.',
    built: 'A full-stack service marketplace with JWT auth, email verification, booking, reviews and notifications.',
    result: 'Live on Vercel.',
    image: '/projects/fi-khidmatik.jpg',
    tech: ['Next.js', 'React', 'MongoDB', 'TailwindCSS', 'EmailJS', 'JWT'],
    github: 'https://github.com/abdellatif6abouhafs-elidrissi/fi-khidmatik',
    live: 'https://fi-khidmatik.vercel.app',
  },
  {
    title: 'ShopHub E-Commerce',
    problem: 'Small stores need online selling without stitching tools together.',
    built: 'A full-stack store with Stripe payments, auth, cart, orders and an admin dashboard.',
    result: 'Live on Vercel.',
    image: '/projects/shophub.jpg',
    tech: ['Next.js', 'MongoDB', 'Stripe', 'TailwindCSS', 'NextAuth'],
    github: 'https://github.com/abdellatif6abouhafs-elidrissi/shophub',
    live: 'https://ecommerce-store-lyart-seven.vercel.app',
  },
]

const ProjectCard = ({ project, index }) => {
  const launchUrl = project.live
  const [isHovered, setIsHovered] = useState(false)
  const [colorIndex, setColorIndex] = useState(0)
  const colors = ['#EF4444', '#EAB308', '#22C55E'] // red, yellow, green

  // Color cycling on hover
  const handleMouseEnter = () => {
    setIsHovered(true)
    let idx = 0
    const interval = setInterval(() => {
      idx = (idx + 1) % 3
      setColorIndex(idx)
    }, 400) // Change color every 400ms
    // Store interval ID to clear on mouse leave
    window.currentColorInterval = interval
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (window.currentColorInterval) {
      clearInterval(window.currentColorInterval)
    }
    setColorIndex(0)
  }

  // Different entry animations for each card - more dramatic
  const getInitialAnimation = (idx) => {
    const animations = [
      { opacity: 0, x: -150, y: 0, rotate: -5 },       // From left
      { opacity: 0, x: 0, y: -150, scale: 0.8 },       // From top
      { opacity: 0, x: 150, y: 0, rotate: 5 },         // From right
      { opacity: 0, x: -120, y: 80, rotate: -3 },      // From left-bottom
      { opacity: 0, x: 0, y: 150, scale: 0.8 },        // From bottom
      { opacity: 0, x: 120, y: 80, rotate: 3 },        // From right-bottom
      { opacity: 0, x: -100, y: -100, rotate: -8 },    // From top-left
      { opacity: 0, x: 100, y: -100, rotate: 8 },      // From top-right
    ]
    return animations[idx % animations.length]
  }

  return (
    <motion.div
      initial={getInitialAnimation(index)}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        delay: index * 0.2,
        duration: 0.8,
        type: 'spring',
        stiffness: 60,
        damping: 12
      }}
      className="group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="bg-black/90 border-2 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300"
        style={{
          borderColor: isHovered ? colors[colorIndex] : 'rgba(34, 197, 94, 0.3)',
          boxShadow: isHovered ? `0 0 30px ${colors[colorIndex]}50` : 'none'
        }}
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {/* Terminal Header */}
        <div className="bg-gray-900 px-4 py-2 flex items-center gap-2 border-b border-green-500/20">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-green-500 text-xs font-mono ml-2">~/projects/{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
        </div>

        {/* Image */}
        <div className="relative overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

          {/* Overlay Icons */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black/90 border border-green-500 rounded-full hover:bg-green-500 hover:text-black transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5 text-green-400 group-hover:text-black" />
            </motion.a>
            )}
            <motion.a
              href={launchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black/90 border border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-black transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink className="w-5 h-5 text-cyan-400" />
            </motion.a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <Folder className="w-5 h-5 text-green-500" />
            <h3 className="text-xl font-mono font-bold text-green-400 group-hover:text-green-300 transition-colors">
              {project.title}
            </h3>
          </div>

          <dl className="text-gray-400 text-sm leading-relaxed mb-4 flex-1 font-mono space-y-2">
            {[
              ['Problem', project.problem],
              ['Built', project.built],
              ['Result', project.result],
            ].map(([label, text]) => (
              <div key={label}>
                <dt className="inline text-green-500 font-bold">&gt;_ {label}: </dt>
                <dd className="inline">{text}</dd>
              </div>
            ))}
          </dl>

          {project.note && (
            <p className="text-xs font-mono text-green-500/80 mb-4 break-all">{project.note}</p>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono font-medium bg-green-500/10 text-green-400 border border-green-500/30 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons - Hacker Style */}
          <div className="flex gap-3">
            {/* Live Demo Button */}
            <motion.a
              href={launchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 relative overflow-hidden group/btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative px-4 py-3 bg-black border-2 border-green-500 rounded-lg font-mono text-green-400 text-center transition-all duration-300 group-hover/btn:bg-green-500 group-hover/btn:text-black group-hover/btn:shadow-[0_0_25px_rgba(34,197,94,0.5)]">
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm font-bold">
                  <ExternalLink className="w-4 h-4" />
                  [LAUNCH]
                </span>
                {/* Glitch effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-green-400/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.a>

            {/* GitHub Button */}
            {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group/btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="px-4 py-3 bg-black border-2 border-cyan-500 rounded-lg font-mono text-cyan-400 transition-all duration-300 group-hover/btn:bg-cyan-500 group-hover/btn:text-black group-hover/btn:shadow-[0_0_25px_rgba(6,182,212,0.5)]">
                <Github className="w-5 h-5" />
              </div>
            </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-dark-secondary/30">
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-green-500 font-mono">$</span> Featured <span className="text-green-400">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real products I've built and shipped — not demos
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/abdellatif6abouhafs-elidrissi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black border-2 border-green-500 rounded-lg font-mono font-bold text-green-400 hover:bg-green-500 hover:text-black hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            [VIEW_MORE_ON_GITHUB]
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
