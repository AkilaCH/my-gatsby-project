import React from 'react'
import Layout from '../components/Layout'
import JSONData from '../about/aboutme.json'
import * as styles from '../style/about-me.module.css'

export default function About() {

  return (
    <Layout>
      <div className={styles.imageWrapper}>
        <img src={JSONData.image} alt='my-img' className={styles.imageMe}/>
      </div>
      <div className={styles.paragaraph}>
        <h1 className={styles.titleMe}>About Me</h1>
        <div>
          {JSONData.content.map((data, index) => {
            console.log('JSON Data' ,data)
            return <p key={`content_item_${index}`}>{data.item}</p>
          })}
        </div>
      </div>
    </Layout>
  );
}
