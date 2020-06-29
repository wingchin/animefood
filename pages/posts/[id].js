import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
      	<h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <img src={`/uploads/${postData.id}.gif`} width="100%" height="100%" alt={postData.title} />
      	<p>{postData.date}</p>
        <p>{postData.category}</p>
        <p>{postData.act}</p>
        <ul>
          {postData.tags.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}