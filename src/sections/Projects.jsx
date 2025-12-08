import { motion } from 'framer-motion'
import { ExternalLink, Github, Folder } from 'lucide-react'

const projects = [
  {
    title: 'MediTrade',
    description: 'A comprehensive trading platform for buying and selling with real-time market data, user authentication, secure transactions, and admin dashboard for managing trades.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/abdellatif6abouhafs-elidrissi',
    live: 'https://medi-trade-mna3.vercel.app/',
  },
  {
    title: 'Designer Portfolio',
    description: 'A premium portfolio website for graphic designers featuring GSAP animations, Three.js 3D elements, image galleries, testimonials carousel, and EmailJS contact form.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    tech: ['React', 'GSAP', 'Three.js', 'Tailwind CSS'],
    github: 'https://github.com/abdellatif6abouhafs-elidrissi',
    live: 'https://designer-portfolio-opal-kappa.vercel.app/',
  },
  {
    title: 'Fi-Khidmatik',
    description: 'A service booking platform connecting customers with service providers. Features include booking management, user profiles, reviews system, and real-time notifications.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
    tech: ['React', 'Node.js', 'MongoDB', 'REST API'],
    github: 'https://github.com/abdellatif6abouhafs-elidrissi',
    live: 'https://fi-khidmatik.vercel.app/fr',
  },
  {
    title: 'E-Commerce Dashboard',
    description: 'An admin dashboard for e-commerce management with analytics, order tracking, inventory management, and sales reporting with interactive charts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tech: ['React', 'Chart.js', 'Tailwind CSS', 'REST API'],
    github: 'https://github.com/abdellatif6abouhafs-elidrissi',
    live: 'https://ecommerce-dashboard-xi-one.vercel.app/',
  },
  {
    title: 'Medi-Fast',
    description: 'A fast medical appointment booking system with doctor profiles, availability calendar, patient management, and appointment reminders.',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=600&fit=crop',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/abdellatif6abouhafs-elidrissi',
    live: 'https://medifast.vercel.app/',
  },
  {
    title: 'Developer Portfolio',
    description: 'A modern developer portfolio showcasing projects, skills, and experience with smooth animations, dark mode, and responsive design.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com/abdellatif6abouhafs-elidrissi',
    live: 'https://developer-portfolio-bay-gamma.vercel.app/',
  },
  {
    title: 'V0 Portfolio',
    description: 'A sleek portfolio website built with modern design principles, featuring smooth transitions and an elegant user interface.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tech: ['React', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/abdellatif6abouhafs-elidrissi',
    live: 'https://v0-portfolio-website-woad-eight-87.vercel.app/',
  },
]

const ProjectCard = ({ project, index }) => {
  // Different entry animations for each card
  const getInitialAnimation = (idx) => {
    const animations = [
      { opacity: 0, x: -60, y: 0 },       // From left
      { opacity: 0, x: 0, y: -60 },       // From top
      { opacity: 0, x: 60, y: 0 },        // From right
      { opacity: 0, x: -60, y: 30 },      // From left-bottom
      { opacity: 0, x: 0, y: 60 },        // From bottom
      { opacity: 0, x: 60, y: 30 },       // From right-bottom
      { opacity: 0, x: -50, y: -50 },     // From top-left
      { opacity: 0, x: 50, y: -50 },      // From top-right
    ]
    return animations[idx % animations.length]
  }

  return (
    <motion.div
      initial={getInitialAnimation(index)}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
        type: 'spring',
        stiffness: 120,
        damping: 20
      }}
      className="group"
    >
      <motion.div
        className="glass rounded-3xl overflow-hidden glow-box-hover h-full flex flex-col"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image */}
        <div className="relative overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-transparent to-transparent" />

          {/* Overlay Icons */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-dark/80 rounded-full hover:bg-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-dark/80 rounded-full hover:bg-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <Folder className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* View Project Button */}
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-dark font-semibold rounded-xl hover:bg-primary-light transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink className="w-4 h-4" />
            View Project
          </motion.a>
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

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
            className="inline-flex items-center gap-2 px-8 py-4 glass glass-hover rounded-full font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
