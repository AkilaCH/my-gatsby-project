import { Link } from "gatsby";
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../style/home.module.css'
import { StaticImage } from 'gatsby-plugin-image'

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2 className={styles.heroTitle}>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & Web developer based in Sri Lanka</p>
          <Link className={styles.btn} to='/projects'>My Portfolio Projects</Link>
        </div>
        <StaticImage 
        alt="hero-image"
        src="https://i.ibb.co/Rg1cR5J/Hero-image.png" />
      </section>
    </Layout>
  );
}

