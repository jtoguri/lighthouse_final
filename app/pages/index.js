import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lighthouse Labs Final Project</title>
        <meta name="description" content="A mix between Turo and Uhaul" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main> 
        <h1> 
          Lighthouse Labs Final Project
        </h1>

        <form>
          <input type="search" placeholder="Search" />
          <input type="submit" value="Search Rentals" />
        </form>

        <div>
          <h2>Section for different types of rentals</h2>
          <ul>
            <li>type 1</li>
            <li>type 2</li>
            <li>type 3</li>
            <li>type 4</li>
            <li>type 5</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
