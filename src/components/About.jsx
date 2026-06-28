import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './About.module.css'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] },
  },
})

const STATS = [
  { value: '6+', label: 'Projects Shipped' },
  { value: 'MERN', label: 'Primary Stack' },
  { value: '.NET', label: 'Backend Alt' },
  { value: 'ITI', label: 'Certified Track' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Crafting Digital<br />Experiences
            </h2>
            <div className="section-divider" />

            <div className={styles.bio}>
              <p>
                I'm a <strong>Results-driven Junior Full Stack Developer</strong> with a B.Sc. in
                Business Information Systems and rigorous training in the <strong>ITI Full Stack Web
                Development (MERN) track</strong>.
              </p>
              <p>
                Backed by a strong grasp of <strong>Object-Oriented Programming</strong>, Data
                Structures, and Algorithms, I build highly optimized, scalable, and secure web
                applications — seamlessly connecting robust backends with polished user interfaces.
              </p>
              <p>
                Whether it's a real-time API, a dynamic React frontend, or a .NET enterprise
                solution, I care deeply about code quality, performance, and the experience of
                the people who use what I build.
              </p>
            </div>

            <div className={styles.details}>
              <span>📍 Sohag, Egypt</span>
              <span>🎓 B.Sc. Business Information Systems</span>
              <span>⚡ Open to Opportunities</span>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            className={styles.statsGrid}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className={styles.statCard}
                variants={fadeUp(0.2 + i * 0.1)}
                whileHover={{ y: -6, boxShadow: 'var(--shadow-glow)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.div>
            ))}

            {/* Education card */}
            <motion.div
              className={styles.eduCard}
              variants={fadeUp(0.55)}
            >
              <div className={styles.eduIcon}>🎓</div>
              <div>
                <p className={styles.eduTitle}>ITI Full Stack Track</p>
                <p className={styles.eduSub}>MERN Stack Development</p>
                <p className={styles.eduSub}>Information Technology Institute, Egypt</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
