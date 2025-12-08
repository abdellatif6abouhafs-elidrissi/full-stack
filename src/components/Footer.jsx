import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/abdellatif6abouhafs-elidrissi', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:alleabdo301@gmail.com', label: 'Email' },
]

const Footer = () => {
  return (
    <footer className="py-12 border-t border-green-500/20 bg-black/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-xl font-mono font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-green-400">&gt;_</span>
            <span className="text-white ml-1">elidrissi</span>
            <span className="text-green-500">.dev</span>
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black border border-green-500/30 rounded-lg hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon className="w-5 h-5 text-green-400" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            className="text-gray-400 text-sm flex items-center gap-1 font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <span className="text-green-500">&gt;_</span> coded_with <Heart className="w-4 h-4 text-green-500 fill-green-500" /> by <span className="text-green-400">Abdellatif</span>
          </motion.p>
        </div>

        <motion.p
          className="text-center text-green-500/50 text-sm mt-8 font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          &copy; {new Date().getFullYear()} <span className="text-green-400">Abdellatif Abouhafss Elidrissi</span>. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer
