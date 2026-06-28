import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { PROJECTS } from '../data'
import styles from './Projects.module.css'

function ProjectCard({ project, index, inView }) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -8 }}
    >
      {/* Image area */}
      <div className={styles.imageWrap}>
        <img
          src={project.image}
          alt={project.title}
          className={styles.img}
          loading="lazy"
        />
        <div className={styles.imgOverlay} />
        {project.badge && (
          <span className={styles.badge}>{project.badge}</span>
        )}
        <div className={styles.imageLinks}>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imgLink}
              aria-label="Live demo"
            >
              <FiExternalLink size={16} />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imgLink}
              aria-label="GitHub"
            >
              <FiGithub size={16} />
              Source
            </a>
          )}
        </div>
      </div>

      {/* Card body */}
      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{project.title}</h3>
          <div className={styles.titleLinks}>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                <FiExternalLink size={15} />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub size={15} />
              </a>
            )}
          </div>
        </div>
        <p className={styles.subtitle}>{project.subtitle}</p>

        <ul className={styles.bullets}>
          {project.bullets.map((b, i) => (
            <li key={i} className={styles.bullet}>
              <span className={styles.bulletDot} />
              {b}
            </li>
          ))}
        </ul>

        <div className={styles.techRow}>
          {project.tech.map(t => (
            <span key={t} className={styles.tech}>{t}</span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className={styles.header}
        >
          <p className="section-label">My Work</p>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            A selection of real-world applications I have built across the full stack — from
            secure backend APIs to polished client-facing interfaces.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
