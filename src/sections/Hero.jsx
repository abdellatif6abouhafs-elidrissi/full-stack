import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { Download, Mail, ChevronDown, Code2 } from 'lucide-react'
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
        className="inline-block w-[3px] h-[1em] bg-green-400 ml-1 align-middle"
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

// Hacker Terminal Component with infinite loop
const HackerTerminal = () => {
  const [line1, setLine1] = useState('')
  const [line2, setLine2] = useState('')
  const [line3, setLine3] = useState('')
  const [line4, setLine4] = useState('')
  const [showFinalCursor, setShowFinalCursor] = useState(false)
  const [cycle, setCycle] = useState(0) // Trigger to restart animation

  const text1 = './profile.sh'
  const text2 = '[+] Loading developer profile...'
  const text3 = '[+] Skills: React.js | Node.js | MongoDB'
  const text4 = "> Ready to build amazing web applications! <"

  useEffect(() => {
    // Reset all states at start of each cycle
    setLine1('')
    setLine2('')
    setLine3('')
    setLine4('')
    setShowFinalCursor(false)

    const intervals = []
    const timeouts = []

    // Start typing line 1 after 500ms
    timeouts.push(setTimeout(() => {
      let i = 0
      const interval1 = setInterval(() => {
        if (i <= text1.length) {
          setLine1(text1.slice(0, i))
          i++
        } else {
          clearInterval(interval1)
        }
      }, 80)
      intervals.push(interval1)
    }, 500))

    // Start typing line 2 after 2s
    timeouts.push(setTimeout(() => {
      let i = 0
      const interval2 = setInterval(() => {
        if (i <= text2.length) {
          setLine2(text2.slice(0, i))
          i++
        } else {
          clearInterval(interval2)
        }
      }, 30)
      intervals.push(interval2)
    }, 2000))

    // Start typing line 3 after 4s
    timeouts.push(setTimeout(() => {
      let i = 0
      const interval3 = setInterval(() => {
        if (i <= text3.length) {
          setLine3(text3.slice(0, i))
          i++
        } else {
          clearInterval(interval3)
        }
      }, 30)
      intervals.push(interval3)
    }, 4000))

    // Start typing line 4 after 6s
    timeouts.push(setTimeout(() => {
      let i = 0
      const interval4 = setInterval(() => {
        if (i <= text4.length) {
          setLine4(text4.slice(0, i))
          i++
        } else {
          clearInterval(interval4)
        }
      }, 50)
      intervals.push(interval4)
    }, 6000))

    // Show final cursor after 10s
    timeouts.push(setTimeout(() => {
      setShowFinalCursor(true)
    }, 10000))

    // Restart the whole animation after 14 seconds (loop)
    timeouts.push(setTimeout(() => {
      setCycle(c => c + 1)
    }, 14000))

    return () => {
      intervals.forEach(i => clearInterval(i))
      timeouts.forEach(t => clearTimeout(t))
    }
  }, [cycle])

  return (
    <div className="bg-black/90 border-2 border-green-500/50 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.3)]">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-black border-b border-green-500/30">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
        </div>
        <span className="text-green-400 text-sm font-mono tracking-wider">root@abdellatif:~</span>
        <div className="w-16"></div>
      </div>

      {/* Terminal Body */}
      <div className="p-6 font-mono text-base md:text-lg min-h-[220px]">
        {/* Line 1 - command */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-green-400">root@abdellatif:~$</span>
          <span className="text-white">{line1}</span>
          {line1.length > 0 && line1.length < text1.length && (
            <span className="inline-block w-2 h-5 bg-green-400 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
          )}
        </div>

        {/* Line 2 - scanning */}
        {line2.length > 0 && (
          <div className="mb-2 text-green-300 text-sm">
            {line2}
          </div>
        )}

        {/* Line 3 - access granted */}
        {line3.length > 0 && (
          <div className="mb-3 text-yellow-400 text-sm">
            {line3}
          </div>
        )}

        {/* Line 4 - the best */}
        {line4.length > 0 && (
          <div className="text-green-400 text-xl md:text-2xl font-bold mb-4">
            {line4}
            {line4.length < text4.length && (
              <span className="inline-block w-3 h-6 bg-green-400 animate-pulse ml-1 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
            )}
          </div>
        )}

        {/* Final prompt */}
        {showFinalCursor && (
          <div className="flex items-center gap-2 text-green-400">
            root@abdellatif:~$
            <span className="inline-block w-3 h-6 bg-green-400 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
          </div>
        )}
      </div>
    </div>
  )
}

// Floating particles
const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-green-500/30 rounded-full"
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
  const roles = ['Junior Full-Stack Developer', 'React.js Specialist', 'Node.js Developer', 'MERN Stack Developer']

  // Full text with name - marking which letters are part of the name
  const fullText = "Abdellatif Abouhafss"
  const fullNameLetters = fullText.split('').map((char, index) => ({
    char,
    isName: true
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
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-400/15 rounded-full blur-3xl"
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
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"
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
            <Code2 className="w-10 h-10 text-green-400" />
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
            className="inline-block px-6 py-3 bg-black/80 border border-green-500/50 rounded-full text-sm font-mono font-medium text-green-400"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
&gt;_ Junior Full-Stack Developer | Open to Work
            </motion.span>
          </motion.span>
        </motion.div>

        {/* Name with typewriter animation */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-mono font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-green-500">&gt;_</span>{' '}
          {fullNameLetters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.05,
                delay: 0.5 + index * 0.08,
              }}
              className={letter.isName ? 'text-green-400' : 'text-white'}
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
            className="inline-block w-[4px] h-[0.9em] bg-green-400 ml-1 align-middle"
          />
        </motion.h1>

        {/* Surname */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          className="text-2xl sm:text-3xl md:text-4xl text-white font-mono font-bold mb-6"
        >
          Elidrissi
        </motion.h2>

        {/* Typewriter Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-mono font-medium mb-8 h-[40px] flex items-center justify-center"
        >
          <TypeWriter words={roles} className="text-green-400 font-semibold" />
        </motion.h2>

        {/* Description with fade in */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.6 }}
          className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed font-mono text-center"
        >
          Passionate about building modern, scalable web applications with React.js, Node.js, and MongoDB.
          I transform ideas into clean, efficient code that delivers exceptional user experiences.
          Currently seeking opportunities to contribute to innovative projects.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
          className="flex justify-center gap-8 mb-10"
        >
          {[
            { value: 8, label: 'Projects', suffix: '+' },
            { value: 2, label: 'Years Learning', suffix: '+' },
            { value: 10, label: 'Technologies', suffix: '+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-green-400 font-mono">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-400 text-sm font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            className="group flex items-center gap-2 px-8 py-4 bg-green-500 text-black font-mono font-bold rounded-lg hover:bg-green-400 transition-all duration-300 border-2 border-green-400"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 197, 94, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Code2 className="w-5 h-5" />
            [VIEW_PROJECTS]
          </motion.a>

          <motion.a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 bg-black border-2 border-cyan-500 text-cyan-400 font-mono font-bold rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            [CONTACT_ME]
          </motion.a>

          <motion.a
            href="/cv.pdf"
            download
            className="group flex items-center gap-2 px-8 py-4 bg-black border-2 border-green-500/50 text-green-400 font-mono font-bold rounded-lg hover:bg-green-500 hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 197, 94, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            [DOWNLOAD_CV]
          </motion.a>
        </motion.div>

        {/* Hacker Terminal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.5, duration: 0.5 }}
          className="max-w-2xl mx-auto mt-8"
        >
          <HackerTerminal />
          {/* Glowing effect underneath */}
          <div className="h-4 bg-gradient-to-b from-green-500/20 to-transparent blur-xl"></div>
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
          <span className="text-green-500/50 text-sm font-mono">&gt;_ scroll_down</span>
          <ChevronDown className="w-6 h-6 text-green-400" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
