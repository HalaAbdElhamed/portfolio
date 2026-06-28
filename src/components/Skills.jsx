import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SKILLS } from '../data'
import styles from './Skills.module.css'

const CATEGORY_ICONS = {
  Frontend: '🎨',
  Backend: '⚙️',
  Databases: '🗄️',
  'Core Fundamentals': '🧠',
  'Tools & Architecture': '🛠️',
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className={`section ${styles.section}`} id="skills" ref={ref}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">What I Know</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            A collection of tools and technologies I use to build fast, secure, and scalable applications.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {Object.entries(SKILLS).map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              className={styles.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <div className={styles.catHeader}>
                <span className={styles.catIcon}>{CATEGORY_ICONS[category]}</span>
                <h3 className={styles.catTitle}>{category}</h3>
              </div>
              <div className={styles.badges}>
                {skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className={styles.badge}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: catIndex * 0.1 + skillIndex * 0.06,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    whileHover={{
                      scale: 1.08,
                      boxShadow: 'var(--shadow-glow-sm)',
                      borderColor: 'var(--accent)',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
