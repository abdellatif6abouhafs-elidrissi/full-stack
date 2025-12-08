import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { Download, Mail, ChevronDown, Github, Linkedin, Code2 } from 'lucide-react'
import { useEffect, useState } from 'react'

// Typewriter effect component
const TypeWriter = ({ words, className }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(word.slice(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
      />
    </span>
  )
}

// Animated counter for stats
const AnimatedCounter = ({ value, suffix = '' }) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: 'easeOut' })
    const unsubscribe = rounded.on('change', (v) => setDisplayValue(v))
    return () => {
      controls.stop()
      unsubscribe()
    }
  }, [value, count, rounded])

  return <span>{displayValue}{suffix}</span>
}

// Floating particles
const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

const Hero = () => {
  const roles = ['Full-Stack Developer', 'React Expert', 'Node.js Developer', 'MERN Stack Developer']

  // Full text with "Hi, I'm Abdellatif" - marking which letters are part of the name
  const fullText = "Hi, I'm Abdellatif"
  const nameStart = fullText.indexOf('Abdellatif')
  const fullNameLetters = fullText.split('').map((char, index) => ({
    char,
    isName: index >= nameStart
  }))

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -40, 40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Particles */}
        <Particles />
      </div>

      <div className="container-custom text-center">
        {/* Code Icon Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="mb-6 flex justify-center"
        >
          <motion.div
            className="p-4 glass rounded-2xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Code2 className="w-10 h-10 text-primary" />
          </motion.div>
        </motion.div>

        {/* Greeting with slide up */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <motion.span
            className="inline-block px-6 py-3 glass rounded-full text-sm font-medium text-primary"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Welcome to my portfolio
            </motion.span>
          </motion.span>
        </motion.div>

        {/* Name with typewriter animation */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {fullNameLetters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.05,
                delay: 0.5 + index * 0.08,
              }}
              className={letter.isName ? 'gradient-text' : 'text-white'}
            >
              {letter.char}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [1, 0] }}
            transition={{
              opacity: { duration: 0.5, repeat: Infinity, repeatType: 'reverse', delay: 2 }
            }}
            className="inline-block w-[4px] h-[0.9em] bg-primary ml-1 align-middle"
          />
        </motion.h1>

        {/* Typewriter Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-medium mb-8 h-[40px] flex items-center justify-center"
        >
          <span className="mr-2">I'm a</span>
          <TypeWriter words={roles} className="text-primary font-semibold" />
        </motion.h2>

        {/* Description with fade in */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed"
        >
          I build modern, scalable, and high-performance web applications using
          React.js, Node.js, and MongoDB. Passionate about creating clean code
          and exceptional user experiences.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          className="flex justify-center gap-8 mb-10"
        >
          {[
            { value: 7, label: 'Projects', suffix: '+' },
            { value: 2, label: 'Years Exp', suffix: '+' },
            { value: 10, label: 'Technologies', suffix: '+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="/cv.pdf"
            download
            className="group flex items-center gap-2 px-8 py-4 bg-primary text-dark font-semibold rounded-full hover:bg-primary-light transition-all duration-300 glow-box-hover"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(56, 189, 248, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download CV
          </motion.a>

          <motion.a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 glass glass-hover rounded-full font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
          className="flex items-center justify-center gap-4"
        >
          <motion.a
            href="https://github.com/abdellatif6abouhafs-elidrissi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.2, y: -5, rotate: 360 }}
            transition={{ type: 'spring', stiffness: 300 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.2, y: -5, rotate: 360 }}
            transition={{ type: 'spring', stiffness: 300 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2.5 },
          y: { duration: 2, repeat: Infinity }
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-500 text-sm">Scroll Down</span>
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
