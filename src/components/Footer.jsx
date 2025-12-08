import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/abdellatif6abouhafs-elidrissi', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:alleabdo301@gmail.com', label: 'Email' },
]

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-xl font-display font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <span className="gradient-text">Full-Stack</span>
            <span className="text-white">&lt;EL&gt;</span>
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-primary/20 transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon className="w-5 h-5 text-gray-400 hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            className="text-gray-400 text-sm flex items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Abdellatif
          </motion.p>
        </div>

        <motion.p
          className="text-center text-gray-500 text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          &copy; {new Date().getFullYear()} Abdellatif Abouhafss Elidrissi. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer
