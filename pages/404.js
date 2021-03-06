import Head from 'next/head'
import Layout from '../components/layout'

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <article>
      	<h1>Uh oh...</h1>
      	<p>Error 404. Sadly, the page you are looking for cannot be found.</p>
      </article>
    </Layout>
  )
}