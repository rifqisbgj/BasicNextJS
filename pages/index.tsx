import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <h1 className="title">Welcome Ripki</h1>
    </>
  )
}

export default Home
