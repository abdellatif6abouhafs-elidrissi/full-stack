import { motion } from 'framer-motion'
import { Layout, Server, Database, Wrench } from 'lucide-react'

const groups = [
  {
    title: 'frontend',
    icon: Layout,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'backend',
    icon: Server,
    items: ['Node.js', 'Express', 'REST APIs', 'NextAuth'],
  },
  {
    title: 'database',
    icon: Database,
    items: ['MongoDB', 'PostgreSQL'],
  },
  {
    title: 'tools',
    icon: Wrench,
    items: ['Git/GitHub', 'Docker', 'Vercel', 'Figma', 'Postman'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-green-500 font-mono">$</span> My <span className="text-green-400">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The stack I use to build and ship production apps
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/80 border-2 border-green-500/30 rounded-2xl p-6 hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center justify-center">
                  <group.icon className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-mono font-semibold text-green-400">
                  &gt;_ {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-green-500/10 text-green-400 rounded-md text-sm font-mono font-medium border border-green-500/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
