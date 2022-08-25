import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import ProductList from '../components/ProductList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Domot foods</title>
        <meta name="description" content="Best Food Store In Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Hero />
     <ProductList />
    </div>
  )
}
