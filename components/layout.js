import Head from 'next/head'
import Link from 'next/link'

export const siteTitle = 'AnimeFood'
export const siteDescription = 'Project dedicated to showcasing the most mouthwatering, delicious food your favorite anime characters are eating'

export default function Layout({ children, home }) {
  return (
    <div className="max-w-4xl px-5 mx-auto text-center">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteDescription} />
        <meta property="og:image" content={`https://og-image.now.sh/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="my-8">
        <>
          <img src="/chef.svg" className={`${home ? 'w-56' : 'w-48'} mx-auto`} alt={siteTitle} />
          <h1 className={`${home ? 'text-5xl' : 'text-4xl'} font-bold`}>{siteTitle}</h1>
        </>
      </header>
      <main>{children}</main>
      {!home && (
        <div className="my-8">
          <Link href="/">
            <a class="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full">&larr; Back to home</a>
          </Link>
        </div>
      )}
      <footer class="my-8">
        <p className="text-xs">
          &copy; 2020 <strong>CreatedbyWing</strong>, powered by <a href="https://www.nextjs.org">Next.js</a>, icon by <a href="https://www.flaticon.com/free-icon/chef_526190" title="Those Icons">Those Icons</a>
        </p>
      </footer>
    </div>
  )
}