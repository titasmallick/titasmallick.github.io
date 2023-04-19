import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Biology Teacher</p>
        <p>Titas Mallick</p>
      </div>

      <div className={styles.center}>
        <p className={inter.className}>Welcome to the website of Titas Mallick, a Biology Teacher, Private Tutor, NextJS Web Developer, and Film Maker. Here you will find information about Titas&apos; various professional skills and services, as well as resources related to Biology education, web development, and filmmaking.
        As a Biology Teacher, Titas has a passion for educating students about the wonders of the natural world. Through his years of teaching experience, he has developed a deep understanding of the subject matter and an ability to communicate complex concepts in an engaging and approachable manner. If you are a student looking for extra help or a parent looking for a knowledgeable tutor, Titas is here to help.
        In addition to his work in education, Titas is also an experienced NextJS web developer, with a talent for creating beautiful and functional websites. Whether you need a simple blog or a complex e-commerce platform, Titas has the technical skills and creative vision to bring your website to life.
        And finally, as a film maker, Titas has a talent for capturing stories and emotions on film. From short documentaries to promotional videos, he can help you create high-quality video content that will engage and inspire your audience.
        Whether you are interested in biology education, web development, or film making, Titas Mallick&apos;s website is the place to be. Explore his services, read his blog, and get in touch to start working together today!</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Visit Me</h2>
          <p>56, S.C. Deb Street, Konnagar, Hooghly, Pin - 712235</p>
          <span>Call: +91 9123774239</span>
        </div>

        <div className={styles.card}>
          <h2>Social Links</h2>
          <a href='https://api.whatsapp.com/message/CFTOQMKHVU2RJ1'>WhatsApp</a><br />
          <a href='https://www.facebook.com/2x3x5x41/'>Facebook</a><br />
          <a href='https://www.instagram.com/Titasmallick1/'>Instagram</a><br />
          <a href='https://github.com/titasmallick'>Github</a><br />
          <a href='https://www.linkedin.com/in/titas-mallick/'>LinkedIn</a>
        </div>

        <div className={styles.card}>
          <h2>Other Links</h2>
          <a href='https://twitter.com/titasmallick51'>Twitter</a><br />
          <a href='https://www.youtube.com/c/TitasMallick'>YouTube</a><br />
          <a href='http://g.page/titasmallick'>Google</a><br />
          <a href='https://www.eugenicserudite.xyz/'>Teaching</a><br />
          <a href='https://botanyy.wordpress.com/'>Blog</a>
        </div>
          
      </div>
    </main>
  )
}
