import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2, Github, Linkedin, ArrowUpRight, Sparkles, Instagram, Facebook } from 'lucide-react'
import emailjs from '@emailjs/browser'

const contactInfo = [
  {
    icon: Mail,
    label: 'email.config',
    value: 'alleabdo301@gmail.com',
    href: 'mailto:alleabdo301@gmail.com',
    color: '#22C55E',
  },
  {
    icon: Phone,
    label: 'phone.connect',
    value: '+212 625 034 547',
    href: 'tel:+212625034547',
    color: '#22C55E',
  },
  {
    icon: MapPin,
    label: 'location.ping',
    value: 'Morocco',
    href: null,
    color: '#22C55E',
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
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      })
      setFormData({ from_name: '', from_email: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error);
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
        {/* Section Title - Hacker Style */}
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-black border border-green-500/50 rounded-lg mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm text-green-400 font-mono">[STATUS: AVAILABLE_FOR_HIRE]</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-mono font-bold mb-6 text-green-400">
            <span className="text-green-600">$</span> initiate_
            <span className="relative">
              <span className="text-white">connection</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-green-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h2>
          <p className="text-green-500/70 max-w-2xl mx-auto text-lg font-mono">
            <span className="text-green-400">&gt;</span> project.create() <span className="text-green-600">||</span> collaborate.start()
            <br />
            <span className="text-green-400">&gt;</span> <span className="text-gray-500">// Ready to execute your vision...</span>
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
            {/* Big CTA Card - Hacker Style */}
            <motion.div
              className="relative bg-black/90 border border-green-500/30 rounded-lg p-8 overflow-hidden group hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Scan Line */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute left-0 right-0 h-px bg-green-500/50"
                  animate={{
                    top: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-green-600 font-mono text-xs">SYSTEM_READY</span>
                </div>

                <motion.div
                  className="w-14 h-14 bg-green-500/10 border border-green-500/50 rounded-lg flex items-center justify-center mb-6"
                  whileHover={{ rotate: 10 }}
                >
                  <Mail className="w-7 h-7 text-green-500" />
                </motion.div>

                <h3 className="text-2xl font-mono font-bold text-green-400 mb-3">
                  &gt;_ init_project()
                </h3>
                <p className="text-green-600 mb-6 leading-relaxed font-mono text-sm">
                  // Available for: freelance, full-time, collaboration
                  <br />
                  // Status: READY_TO_EXECUTE
                </p>

                <motion.a
                  href="mailto:alleabdo301@gmail.com"
                  className="inline-flex items-center gap-2 text-green-400 font-mono font-semibold group/link border border-green-500/50 px-4 py-2 rounded hover:bg-green-500 hover:text-black transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  [RUN: send_email]
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Info Cards - Hacker Style */}
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
                      className="flex items-center gap-4 p-4 bg-black/80 border border-green-500/30 rounded-lg group cursor-pointer hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all duration-300"
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-12 h-12 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-all duration-300">
                        <info.icon className="w-5 h-5 text-green-500" />
                      </div>
                      <div className="flex-1">
                        <p className="text-green-600 text-xs font-mono">{info.label}</p>
                        <p className="text-green-400 font-mono group-hover:text-green-300 transition-colors">
                          {info.value}
                        </p>
                      </div>
                      <span className="text-green-600 font-mono text-sm group-hover:text-green-400">[OPEN]</span>
                    </motion.a>
                  ) : (
                    <motion.div
                      className="flex items-center gap-4 p-4 bg-black/80 border border-green-500/30 rounded-lg"
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-12 h-12 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <p className="text-green-600 text-xs font-mono">{info.label}</p>
                        <p className="text-green-400 font-mono">{info.value}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links - Hacker Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-6"
            >
              <p className="text-green-600 text-sm mb-4 text-center font-mono">// social.links</p>
              <div className="flex gap-3 justify-center">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black border border-green-500/30 rounded-lg flex items-center justify-center group hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    {social.isCustom ? (
                      <span className="text-green-600 group-hover:text-green-400 transition-colors">
                        <social.icon />
                      </span>
                    ) : (
                      <social.icon className="w-5 h-5 text-green-600 group-hover:text-green-400 transition-colors" />
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
              className="relative bg-black/90 border border-green-500/30 rounded-lg p-8 md:p-10 hover:border-green-500/50 transition-all duration-300"
            >
              {/* Form Header - Hacker Style */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-green-500 font-mono text-lg">&gt;_</span>
                  <h3 className="text-2xl font-mono font-bold text-green-400">message.compose()</h3>
                </div>
                <p className="text-green-600 font-mono text-sm">// Initialize connection protocol...</p>
              </div>

              <div className="space-y-6">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-green-400 font-mono text-sm">~/contact/send-message</span>
                </div>

                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input - Hacker Style */}
                  <div className="relative group">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500 font-mono font-bold text-lg">
                      &gt;_
                    </div>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('from_name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="enter_name"
                      className="w-full pl-12 pr-4 py-4 bg-black/80 border-2 border-green-500/30 rounded-lg font-mono text-green-400 placeholder:text-green-600/50 focus:outline-none focus:border-green-500 focus:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-300 caret-green-400"
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: focusedField === 'from_name' ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Email Input - Hacker Style */}
                  <div className="relative group">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500 font-mono font-bold text-lg">
                      &gt;_
                    </div>
                    <input
                      type="email"
                      id="from_email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('from_email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="enter_email"
                      className="w-full pl-12 pr-4 py-4 bg-black/80 border-2 border-green-500/30 rounded-lg font-mono text-green-400 placeholder:text-green-600/50 focus:outline-none focus:border-green-500 focus:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-300 caret-green-400"
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: focusedField === 'from_email' ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Message Input - Hacker Style */}
                <div className="relative group">
                  <div className="absolute left-3 top-4 text-green-500 font-mono font-bold text-lg">
                    &gt;_
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={6}
                    placeholder="type_your_message..."
                    className="w-full pl-12 pr-4 py-4 bg-black/80 border-2 border-green-500/30 rounded-lg font-mono text-green-400 placeholder:text-green-600/50 focus:outline-none focus:border-green-500 focus:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-300 resize-none caret-green-400"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"
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

                {/* Submit Button - Hacker Style */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="relative w-full flex items-center justify-center gap-3 px-8 py-4 bg-black border-2 border-green-500 text-green-400 font-mono font-bold rounded-lg overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-500 hover:text-black hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all duration-300"
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                >
                  <span className="flex items-center gap-3">
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        [SENDING...]
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        [EXECUTE_SEND]
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
