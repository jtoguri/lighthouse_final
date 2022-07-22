import Head from 'next/head'

//import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Lighthouse Labs Final Project</title>
        <meta name="description" content="A mix between Turo and Uhaul" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  )
}
