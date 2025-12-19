import { motion } from 'framer-motion'
import { ExternalLink, Github, Folder } from 'lucide-react'
import { useState } from 'react'

const projects = [
  // Mobile Apps
  {
    title: 'ServiceConnect Pro',
    description: 'Full-stack mobile platform connecting clients with verified service professionals. Features JWT authentication, email verification, booking system, ratings & reviews, and real-time notifications.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop',
    tech: ['Next.js', 'React', 'MongoDB', 'TailwindCSS', 'EmailJS', 'JWT'],
    github: 'https://github.com/abdellatif6abouhafs-elidrissi/fi-khdmitk-app',
    live: 'https://fi-khidmatik.vercel.app',
    category: 'mobile',
  },
  // Web Apps
  {
    title: 'TradeHub Platform',
    description: 'Full-stack trading platform featuring real-time market data, secure user authentication, transaction management, and comprehensive admin dashboard.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/abdellatif6abouhafs-elidrissi',
    live: 'https://meditrade-app.vercel.app/',
    category: 'web',
  },
  {
    title: 'ShopHub E-Commerce',
    description: 'Full-stack e-commerce platform with Stripe payments, user authentication, shopping cart, order management, product catalog, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tech: ['Next.js', 'MongoDB', 'Stripe', 'TailwindCSS', 'NextAuth'],
    github: 'https://github.com/abdellatif6abouhafs-elidrissi/shophub',
    live: 'https://ecommerce-store-lyart-seven.vercel.app',
    category: 'web',
  },
  {
    title: 'CreativeStudio Portfolio',
    description: 'Premium portfolio template with advanced GSAP animations, Three.js 3D elements, dynamic galleries, testimonials carousel, and EmailJS contact integration.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    tech: ['React', 'GSAP', 'Three.js', 'Tailwind CSS'],
    github: 'https://github.com/abdellatif6abouhafs-elidrissi',
    live: 'https://designer-portfolio-opal-kappa.vercel.app/',
    category: 'web',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Feature-rich admin dashboard for e-commerce with real-time analytics, order management, inventory tracking, and interactive data visualizations.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tech: ['React', 'Chart.js', 'Tailwind CSS', 'REST API'],
    github: 'https://github.com/abdellatif6abouhafs-elidrissi',
    live: 'https://ecommerce-dashboard-xi-one.vercel.app/',
    category: 'web',
  },
  {
    title: 'MediBook System',
    description: 'Healthcare appointment management system with doctor profiles, smart scheduling, patient records, and automated appointment reminders.',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=600&fit=crop',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/abdellatif6abouhafs-elidrissi',
    live: 'https://medifast.vercel.app/',
    category: 'mobile',
  },
    {
    title: 'MinimalFolio',
    description: 'Clean, minimalist portfolio design focused on user experience, featuring smooth page transitions and elegant typography.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tech: ['React', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/abdellatif6abouhafs-elidrissi',
    live: 'https://v0-portfolio-website-woad-eight-87.vercel.app/',
    category: 'web',
  },
]

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile Apps' },
]

const ProjectCard = ({ project, index }) => {
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
            <motion.a
              href={project.live}
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

          <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1 font-mono">
            {project.description}
          </p>

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
              href={project.live}
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
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="section-padding bg-dark-secondary/30">
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-green-500 font-mono">$</span> Featured <span className="text-green-400">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 font-mono text-sm font-bold rounded-lg border-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-green-500 text-black border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.5)]'
                  : 'bg-black text-green-400 border-green-500/50 hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              [{category.label.toUpperCase()}]
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
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
