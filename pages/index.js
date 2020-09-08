import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout home title="Meikai-sa | Karate Project">
      <img src="/logo-2-meikaisa.svg" className="top-image"></img>
  
      <p>
      <span className="font-big font-bold">
      "The more understanding you have about Karate, the less you need to change or modify it." </span> <small> – <strong>Tsuguo Sakumoto</strong> (mantan juara Karate Dunia and guru besar Karate Ryuei-ryu ) </small>
      </p>
      <br/>

      <h1>Perkenalan</h1>
      <p className="justify">
        <strong>Meika-sa (明快さ = Clarity)</strong> adalah proyek pendalaman ilmu beladiri Karate yang dibuat oleh Malik Aljun (praktisi Karate aliran Wadokai Indonesia). Berawal dari keraguannya dalam melanjutkan aliran Karate Indonesia di Dojo yang diikutinya, Ia menemukan ketidaksesuaian dan kesalahan makna yang diajarkan terhadap Karate sejatinya. 
        <br/>
        <br/>
        Didukung oleh teman sejawatnya, terbentuklah ide untuk mempelajari Karate tanpa mengikuti aliran perguruan Indonesia. Dengan harapan untuk bisa memahami esensi dari beladiri Karate. Proyek ini berfokus untuk eksplorasi <strong>True Karate</strong> tanpa terikat aliran perguruan manapun.
        </p>
        <br/>
        <br/>

      <ul className="styled-list font-big">
        <li>
          <Link href="/posts/cara-bergabung">Bergabung Sekarang</Link>
        </li>
        <li>
          <Link href="/posts/jadwal-latihan">Jadwal Latihan</Link>
        </li>
      </ul>
    </Layout>
  )
}
