import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import WhyHireMe from './sections/WhyHireMe'
import Contact from './sections/Contact'

function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check localStorage for saved preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
    }
  }, [])

  useEffect(() => {
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
  }

  return (
    <div className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${
      isDark ? 'bg-black text-gray-200' : 'bg-gray-100 text-gray-900'
    }`}>
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Skills isDark={isDark} />
        <Projects isDark={isDark} />
        <WhyHireMe isDark={isDark} />
        <Contact isDark={isDark} />
      </main>
      <Footer isDark={isDark} />
    </div>
  )
}

export default App
