import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <style>{`
          /* Define global styles here */
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

          body {
            font-family: 'Poppins', sans-serif;
          }
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
