import { motion } from 'framer-motion'
import { MessageSquare, Wrench, Code2, Rocket, Heart } from 'lucide-react'

const reasons = [
  {
    icon: Rocket,
    title: 'I ship, not just prototype',
    description: 'Live products, not demos. Everything in my portfolio is deployed and used by real people.',
    color: '#10B981',
  },
  {
    icon: MessageSquare,
    title: 'Clear communication',
    description: 'Regular progress updates and plain-English explanations. You always know where your project stands.',
    color: '#3B82F6',
  },
  {
    icon: Wrench,
    title: 'Built for maintenance',
    description: 'Clean code and documentation, and I stay available after launch to fix, adjust and extend.',
    color: '#F59E0B',
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
            <span className="text-sm text-green-400 font-mono">[AVAILABLE_FOR_PROJECTS]</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-green-500 font-mono">$</span> Why <span className="text-green-400">Hire Me?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            What you get when you work with me
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
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
              Let's Build Something <span className="text-green-400">That Ships</span>
            </h3>

            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Have a project in mind? I'm available for freelance work — let's talk.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#contact"
                className="group flex items-center gap-2 px-8 py-4 bg-green-500 text-black font-mono font-bold rounded-lg hover:bg-green-400 transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 197, 94, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-5 h-5" />
                [START_A_PROJECT]
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
