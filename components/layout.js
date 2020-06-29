import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

export const siteTitle = 'AnimeFood'
export const siteDescription = 'Project dedicated to showcasing the most mouthwatering, delicious food your favorite anime characters are eating'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteDescription} />
        <meta property="og:image" content={`https://og-image.now.sh/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <>
          <img src="/images/chef.svg" className={`${styles.headerHomeImage}`} alt={siteTitle} />
          <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
        </>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer>
        <p className={`${utilStyles.textCenter} ${utilStyles.textSmall} ${utilStyles.lightText}`}>
          &copy; 2020 <strong>CreatedbyWing</strong>, powered by <a href="https://www.nextjs.org">Next.js</a>, icon by <a href="https://www.flaticon.com/free-icon/chef_526190" title="Those Icons">Those Icons</a>
        </p>
      </footer>
    </div>
  )
}