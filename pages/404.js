import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title> <h1>404 - Page Not Found</h1></title>
      </Head>
      <article>
      	<h1 className={utilStyles.headingXl}>Uh oh...</h1>
      	<p>Sadly, the page you are looking for cannot be found.</p>
      </article>
    </Layout>
  )
}