import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { FiMapPin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'
import styles from './Contact.module.css'

function validate(fields) {
  const errors = {}
  if (!fields.name.trim()) errors.name = 'Name is required.'
  if (!fields.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!fields.message.trim()) errors.message = 'Message is required.'
  else if (fields.message.trim().length < 20) errors.message = 'Message must be at least 20 characters.'
  return errors
}

const EMPTY = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const [fields, setFields] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | success | error

  const handleChange = e => {
    const { name, value } = e.target
    setFields(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate(fields)
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    // Build mailto link as graceful fallback (no backend needed)
    const subject = encodeURIComponent(fields.subject || `Portfolio Contact from ${fields.name}`)
    const body = encodeURIComponent(
      `Name: ${fields.name}\nEmail: ${fields.email}\n\n${fields.message}`
    )
    window.location.href = `mailto:halaabdelhmed9@gmail.com?subject=${subject}&body=${body}`
    setStatus('success')
    setFields(EMPTY)
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section className={`section ${styles.section}`} id="contact" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className={styles.headerWrap}
        >
          <p className="section-label">Let's Talk</p>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            I'm currently open to new opportunities. Whether you have a project in mind, a
            question, or just want to say hello — my inbox is always open.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {/* Info column */}
          <motion.div
            className={styles.infoCol}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className={styles.contactItems}>
              <a href="mailto:halaabdelhmed9@gmail.com" className={styles.contactItem}>
                <span className={styles.contactIcon}><HiOutlineMail size={20} /></span>
                <div>
                  <p className={styles.contactLabel}>Email</p>
                  <p className={styles.contactValue}>halaabdelhmed9@gmail.com</p>
                </div>
              </a>
              <a href="https://wa.me/201552047492" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <span className={styles.contactIcon}><FaWhatsapp size={20} /></span>
                <div>
                  <p className={styles.contactLabel}>WhatsApp</p>
                  <p className={styles.contactValue}>+20 1552047492</p>
                </div>
              </a>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}><FiMapPin size={20} /></span>
                <div>
                  <p className={styles.contactLabel}>Location</p>
                  <p className={styles.contactValue}>Sohag, Egypt</p>
                </div>
              </div>
            </div>

            <div className={styles.socialSection}>
              <p className={styles.socialTitle}>Find me on</p>
              <div className={styles.socials}>
                <a href="https://linkedin.com/in/hala-abdelhameed-665b07279" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
                  <FaLinkedinIn size={18} />
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialLink}>
                  <FaGithub size={18} />
                </a>
                <a href="https://wa.me/201552047492" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.socialLink}>
                  <FaWhatsapp size={18} />
                </a>
                <a href="mailto:halaabdelhmed9@gmail.com" aria-label="Email" className={styles.socialLink}>
                  <HiOutlineMail size={18} />
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/201552047492"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappCta}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaWhatsapp size={22} />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Form column */}
          <motion.div
            className={styles.formWrap}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">Your Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    placeholder="Hala Abdelhameed"
                    value={fields.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className={styles.errorMsg}><FiAlertCircle size={13} />{errors.name}</p>}
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    placeholder="you@example.com"
                    value={fields.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className={styles.errorMsg}><FiAlertCircle size={13} />{errors.email}</p>}
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="subject">Subject (optional)</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className={styles.input}
                  placeholder="Project collaboration, Job opportunity…"
                  value={fields.subject}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  placeholder="Tell me about your project or idea…"
                  value={fields.message}
                  onChange={handleChange}
                />
                {errors.message && <p className={styles.errorMsg}><FiAlertCircle size={13} />{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                className={styles.submitBtn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                {status === 'success' ? (
                  <><FiCheck size={18} /> Message Sent!</>
                ) : (
                  <><FiSend size={18} /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
