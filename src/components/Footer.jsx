import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import styles from './Footer.module.css'

const NAV = ['About', 'Skills', 'Projects', 'Contact']

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>
            <span className={styles.bracket}>&lt;</span>
            Hala
            <span className={styles.bracket}> /&gt;</span>
          </span>
          <p className={styles.tagline}>
            Junior Full Stack Developer · MERN & .NET · Sohag, Egypt
          </p>
        </div>

        <nav className={styles.links}>
          {NAV.map(n => (
            <button
              key={n}
              className={styles.navLink}
              onClick={() => scrollTo(n.toLowerCase())}
            >
              {n}
            </button>
          ))}
        </nav>

        <div className={styles.socials}>
          <a href="https://linkedin.com/in/hala-abdelhameed-665b07279" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
            <FaLinkedinIn size={16} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialLink}>
            <FaGithub size={16} />
          </a>
          <a href="mailto:halaabdelhmed9@gmail.com" aria-label="Email" className={styles.socialLink}>
            <HiOutlineMail size={16} />
          </a>
          <a href="https://wa.me/201111528239" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.socialLink}>
            <FaWhatsapp size={16} />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Hala Abdelhameed Ahmed. All rights reserved.</p>
      </div>
    </footer>
  )
}
