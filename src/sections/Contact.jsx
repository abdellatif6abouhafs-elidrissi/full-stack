import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2, Github, Linkedin, ArrowUpRight, Sparkles, Instagram, Facebook } from 'lucide-react'
import emailjs from '@emailjs/browser'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'alleabdo301@gmail.com',
    href: 'mailto:alleabdo301@gmail.com',
    color: '#EA4335',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+212 625 034 547',
    href: 'tel:+212625034547',
    color: '#34A853',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Morocco',
    href: null,
    color: '#4285F4',
  },
]

// X (Twitter) icon component
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const socialLinks = [
  { icon: Github, href: 'https://github.com/abdellatif6abouhafs-elidrissi', label: 'GitHub', color: '#333' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/abdo-alle-757115363/', label: 'LinkedIn', color: '#0A66C2' },
  { icon: XIcon, href: 'https://x.com/abdellatif_dev', label: 'X', color: '#000', isCustom: true },
  { icon: Instagram, href: 'https://instagram.com/abdellatif_dev', label: 'Instagram', color: '#E4405F' },
  { icon: Facebook, href: 'https://facebook.com/abdellatif.dev', label: 'Facebook', color: '#1877F2' },
]

const Contact = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  })
  const [status, setStatus] = useState({
    type: null,
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: null, message: '' })

    try {
      await emailjs.sendForm(
        'service_6izrbyg',
        'template_3q7v1ve',
        formRef.current,
        'gHMkjU3VqkT1916z3'
      )

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      })
      setFormData({ from_name: '', from_email: '', message: '' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Title with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-gray-300">Available for work</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Let's Build Something{' '}
            <span className="gradient-text relative">
              Amazing
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's create something extraordinary together.
            I'm just one message away.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Big CTA Card */}
            <motion.div
              className="relative glass rounded-3xl p-8 overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.3), transparent)',
                  }}
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>

              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-primary to-purple-500 rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 10 }}
                >
                  <Mail className="w-8 h-8 text-dark" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  Ready to Start?
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  I'm currently available for freelance projects, full-time positions,
                  and exciting collaborations. Let's turn your vision into reality.
                </p>

                <motion.a
                  href="mailto:alleabdo301@gmail.com"
                  className="inline-flex items-center gap-2 text-primary font-semibold group/link"
                  whileHover={{ x: 5 }}
                >
                  Drop me an email
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {info.href ? (
                    <motion.a
                      href={info.href}
                      className="flex items-center gap-4 p-4 glass rounded-2xl group cursor-pointer"
                      whileHover={{ x: 10, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, ${info.color}20, ${info.color}10)`,
                          boxShadow: `0 0 20px ${info.color}20`,
                        }}
                      >
                        <info.icon className="w-6 h-6" style={{ color: info.color }} />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-500 text-sm">{info.label}</p>
                        <p className="text-white font-semibold group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </motion.a>
                  ) : (
                    <motion.div
                      className="flex items-center gap-4 p-4 glass rounded-2xl"
                      whileHover={{ x: 10 }}
                    >
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${info.color}20, ${info.color}10)`,
                          boxShadow: `0 0 20px ${info.color}20`,
                        }}
                      >
                        <info.icon className="w-6 h-6" style={{ color: info.color }} />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">{info.label}</p>
                        <p className="text-white font-semibold">{info.value}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-6"
            >
              <p className="text-gray-500 text-sm mb-4 text-center">Find me on</p>
              <div className="flex gap-3 justify-center">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 glass rounded-xl flex items-center justify-center group"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                    style={{
                      boxShadow: `0 0 0 rgba(56,189,248,0)`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 20px ${social.color}40`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 0 rgba(56,189,248,0)`
                    }}
                  >
                    {social.isCustom ? (
                      <span className="text-gray-400 group-hover:text-white transition-colors">
                        <social.icon />
                      </span>
                    ) : (
                      <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative glass rounded-3xl p-8 md:p-10"
            >
              {/* Form Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
                <p className="text-gray-400">Fill out the form below and I'll get back to you as soon as possible.</p>
              </div>

              <div className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="relative">
                    <motion.label
                      htmlFor="from_name"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'from_name' || formData.from_name
                          ? '-top-2.5 text-xs text-primary bg-dark-secondary px-2'
                          : 'top-4 text-gray-500'
                      }`}
                    >
                      Your Name
                    </motion.label>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('from_name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-4 bg-dark-tertiary/50 border-2 border-white/10 rounded-xl text-white focus:outline-none focus:border-primary/50 transition-all duration-300"
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: focusedField === 'from_name' ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <motion.label
                      htmlFor="from_email"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'from_email' || formData.from_email
                          ? '-top-2.5 text-xs text-primary bg-dark-secondary px-2'
                          : 'top-4 text-gray-500'
                      }`}
                    >
                      Your Email
                    </motion.label>
                    <input
                      type="email"
                      id="from_email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('from_email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-4 bg-dark-tertiary/50 border-2 border-white/10 rounded-xl text-white focus:outline-none focus:border-primary/50 transition-all duration-300"
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: focusedField === 'from_email' ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="relative">
                  <motion.label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'message' || formData.message
                        ? '-top-2.5 text-xs text-primary bg-dark-secondary px-2'
                        : 'top-4 text-gray-500'
                    }`}
                  >
                    Your Message
                  </motion.label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-dark-tertiary/50 border-2 border-white/10 rounded-xl text-white focus:outline-none focus:border-primary/50 transition-all duration-300 resize-none"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focusedField === 'message' ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Status Message */}
                {status.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex items-center gap-3 p-4 rounded-xl ${
                      status.type === 'success'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 shrink-0" />
                    )}
                    <span>{status.message}</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="relative w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-dark font-bold rounded-xl overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-primary"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  <span className="relative z-10 flex items-center gap-3">
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </span>
                </motion.button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
