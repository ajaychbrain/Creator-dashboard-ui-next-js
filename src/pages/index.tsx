
import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { ChartBox, ChartNumber, Earnings, MainContain, MainHeaderButton } from '@/components/Header/HeaderStyle';
import curvedLine from "../../public/Vector3.svg";

// const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
  
      <MainContain>
        <MainHeaderButton>
      <Link href="#" className={styles.buttonShap}>
        <span className={styles.menu}>This week</span>
      </Link>
      <Link href="#" className={styles.buttonShap}>
        <span className={styles.menu}> Yesterday </span>
      </Link>
      <Link href="#" className={styles.buttonShap}>
       <span className={styles.menu}>Last week</span> 
      </Link>
      <Link href="#" className={styles.buttonShap}>
        <span className={styles.menu}>Last month</span>
      </Link>
      <Link href="#" className={styles.buttonShap}>
        <span className={styles.menu1}>1st Aug - 31st Aug <Image src="/short-icon.svg"  width={12}
      height={12}
      alt="icon" /></span>
      </Link>
      </MainHeaderButton>
  </MainContain>
  <ChartBox>
      <Earnings><span>Earning</span></Earnings>
      <Image src={curvedLine} className='linechart' alt="icons" />
      <ChartNumber><h3 className='chartnumber'>SEK 2,582</h3></ChartNumber>
  </ChartBox>
    </>
  )
}
export default Home;