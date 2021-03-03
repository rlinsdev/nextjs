import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './comps/Footer'
import Navbar from './comps/navBar'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1>HomePage</h1>
      <p>tese!</p>
      <p>tese2</p>
      <p>tese!</p>
      <p>tese2</p>
      <Footer />
    </div>
  )
}