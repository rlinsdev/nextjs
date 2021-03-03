import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
 
export default function Home() {
  return (
    <div>
      <h1 className={styles.title} >HomePage</h1>
      <p className={styles.text}>tese!</p>
      <p className={styles.text}>tese2</p>
      <p>tese!</p>
      <Link href="/ninjas">
        <a className={styles.btn}> jhow! </a>

      </Link>
    </div>
  )
}