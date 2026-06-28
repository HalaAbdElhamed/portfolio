import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { NAV_LINKS } from '../data'
import { useScrollSpy } from '../hooks/useScrollSpy'
import styles from './Navbar.module.css'

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'contact']

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className={styles.inner}>
        <a
          href="#hero"
          className={styles.logo}
          onClick={e => handleNav(e, '#hero')}
        >
          <span className={styles.logoBracket}>&lt;</span>
          Hala
          <span className={styles.logoBracket}> /&gt;</span>
        </a>

        <nav className={styles.nav}>
          {NAV_LINKS.map(link => {
            const id = link.href.replace('#', '')
            const isActive = activeId === id
            return (
              <a
                key={link.label}
                href={link.href}
                className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                onClick={e => handleNav(e, link.href)}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    className={styles.activeDot}
                    layoutId="activeDot"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        <div className={styles.actions}>
          <motion.button
            className={styles.themeBtn}
            onClick={onToggleTheme}
            whileTap={{ scale: 0.85 }}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          <motion.button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(o => !o)}
            whileTap={{ scale: 0.85 }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className={styles.mobileInner}>
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className={styles.mobileLink}
                  onClick={e => handleNav(e, link.href)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
