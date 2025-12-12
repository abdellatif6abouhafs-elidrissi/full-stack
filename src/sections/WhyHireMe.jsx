import { motion } from 'framer-motion'
import { Zap, Target, Users, Lightbulb, Clock, Code2, Rocket, Heart } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'Fast Learner',
    description: 'I quickly adapt to new technologies and frameworks. My self-taught journey proves my ability to learn independently.',
    color: '#F59E0B',
  },
  {
    icon: Target,
    title: 'Goal-Oriented',
    description: 'I focus on delivering results. Every line of code I write is aimed at solving real problems and creating value.',
    color: '#10B981',
  },
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'I write maintainable, readable code following best practices. Quality is not negotiable in my work.',
    color: '#3B82F6',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'I collaborate effectively, communicate clearly, and contribute positively to team dynamics.',
    color: '#8B5CF6',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'I approach challenges analytically and creatively. Complex problems excite me rather than discourage me.',
    color: '#EC4899',
  },
  {
    icon: Clock,
    title: 'Reliable',
    description: 'I meet deadlines and deliver what I promise. You can count on me to get the job done right.',
    color: '#06B6D4',
  },
]

const WhyHireMe = () => {
  return (
    <section id="why-hire-me" className="section-padding bg-black/50">
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-black border border-green-500/50 rounded-lg mb-6"
          >
            <Rocket className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-400 font-mono">[OPEN_TO_OPPORTUNITIES]</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-green-500 font-mono">$</span> Why <span className="text-green-400">Hire Me?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            What I bring to your team and why I'm the right fit for your next project
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div
                className="h-full bg-black/80 border-2 border-green-500/30 rounded-2xl p-6 hover:border-green-500 transition-all duration-300"
                style={{
                  boxShadow: `0 0 0 rgba(34, 197, 94, 0)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${reason.color}30`
                  e.currentTarget.style.borderColor = reason.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 rgba(34, 197, 94, 0)'
                  e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.3)'
                }}
              >
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 border-2 transition-all duration-300"
                  style={{
                    backgroundColor: `${reason.color}15`,
                    borderColor: `${reason.color}50`,
                  }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <reason.icon className="w-7 h-7" style={{ color: reason.color }} />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-mono font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-black/80 border-2 border-green-500/30 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto hover:border-green-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.2)] transition-all duration-300">
            {/* Heart Icon */}
            <motion.div
              className="w-16 h-16 bg-green-500/10 border-2 border-green-500/50 rounded-full flex items-center justify-center mx-auto mb-6"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <Heart className="w-8 h-8 text-green-400" />
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-mono font-bold text-white mb-4">
              Let's Build Something <span className="text-green-400">Amazing</span> Together
            </h3>

            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              I'm actively looking for opportunities where I can contribute, learn, and grow.
              Whether it's a full-time position, freelance project, or collaboration - I'm ready!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#contact"
                className="group flex items-center gap-2 px-8 py-4 bg-green-500 text-black font-mono font-bold rounded-lg hover:bg-green-400 transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 197, 94, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-5 h-5" />
                [HIRE_ME_NOW]
              </motion.a>

              <motion.a
                href="#projects"
                className="group flex items-center gap-2 px-8 py-4 bg-black border-2 border-green-500/50 text-green-400 font-mono font-bold rounded-lg hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code2 className="w-5 h-5" />
                [SEE_MY_WORK]
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyHireMe
