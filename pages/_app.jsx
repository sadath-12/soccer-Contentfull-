import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (<>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
