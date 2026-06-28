import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import styles from './Hero.module.css'

const TYPED_STRINGS = [
  'Junior Full Stack Developer',
  'MERN Stack Engineer',
  '.NET Backend Developer',
  'React.js Enthusiast',
]

function useTypingEffect(strings, typingSpeed = 80, pauseDuration = 2000) {
  const [display, setDisplay] = useState('')
  const [strIndex, setStrIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = strings[strIndex]
    let timeout

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIndex + 1))
        setCharIndex(c => c + 1)
      }, typingSpeed)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pauseDuration)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIndex - 1))
        setCharIndex(c => c - 1)
      }, typingSpeed / 2)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setStrIndex(i => (i + 1) % strings.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, strIndex, strings, typingSpeed, pauseDuration])

  return display
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
}
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
}

export default function Hero() {
  const typed = useTypingEffect(TYPED_STRINGS)

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero} id="hero">
      {/* Ambient background blobs */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* Left: Text */}
        <motion.div
          className={styles.textCol}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={fadeUp} className={styles.greeting}>
            <span className={styles.greetingLine} />
            Hello, I'm
          </motion.p>

          <motion.h1 variants={fadeUp} className={styles.name}>
            Hala<br />
            <span className={styles.lastName}>Abdelhameed</span>
          </motion.h1>

          <motion.div variants={fadeUp} className={styles.typingRow}>
            <span className={styles.typingText}>{typed}</span>
            <span className={styles.cursor} />
          </motion.div>

          <motion.p variants={fadeUp} className={styles.tagline}>
            Building scalable web applications that bridge robust backends
            with polished user interfaces.
          </motion.p>

          <motion.div variants={fadeUp} className={styles.ctaRow}>
            <a href="#projects" className={styles.btnPrimary} onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
              View My Work
            </a>
            <a href="#contact" className={styles.btnOutline} onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Get In Touch
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className={styles.socials}>
            <a href="https://linkedin.com/in/hala-abdelhameed-665b07279" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
              <FaLinkedinIn size={18} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialLink}>
              <FaGithub size={18} />
            </a>
            <a href="mailto:halaabdelhmed9@gmail.com" aria-label="Email" className={styles.socialLink}>
              <HiOutlineMail size={18} />
            </a>
            <a href="https://wa.me/201552047492" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.socialLink}>
              <FaWhatsapp size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          className={styles.imageCol}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className={styles.imageFrame}>
            <div className={styles.imageGlow} aria-hidden="true" />
            <div className={styles.imageRing} aria-hidden="true" />
            <img
              src="/hala.jpeg"
              alt="Hala Abdelhameed Ahmed"
              className={styles.profileImg}
              onError={e => {
                // Fallback: show initials if image not found
                e.target.style.display = 'none'
                e.target.parentElement.querySelector('.img-fallback').style.display = 'flex'
              }}
            />
            <div
              className={`img-fallback ${styles.imgFallback}`}
              style={{ display: 'none' }}
            >
              HA
            </div>
          </div>

          {/* Floating stat cards */}
          <motion.div
            className={`${styles.floatCard} ${styles.floatCard1}`}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className={styles.floatCardIcon}>⚡</span>
            <div>
              <p className={styles.floatCardValue}>MERN</p>
              <p className={styles.floatCardLabel}>Full Stack</p>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.floatCard} ${styles.floatCard2}`}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <span className={styles.floatCardIcon}>🎓</span>
            <div>
              <p className={styles.floatCardValue}>ITI</p>
              <p className={styles.floatCardLabel}>Certified</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className={styles.scrollIndicator}
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-label="Scroll down"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown size={20} />
        </motion.span>
      </motion.button>
    </section>
  )
}
