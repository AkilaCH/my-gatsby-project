import React from 'react'
import Layout  from '../components/Layout'
import * as styles from '../style/project-details.module.css'
import { graphql } from 'gatsby'


export const query = graphql`
{
  allMdx {
    nodes {
      frontmatter {
        title
        hero_image
        hero_image_alt
        Slug
      }
      body
      id
    }
  }
}
`;

export default function ProjectDetails({ data }) {
  console.log('data :', data)
      return (
        <Layout className={styles.html}>
          {
            data.allMdx.nodes.map(node => {
              <div>
                <div>
                  <img src={node.frontmatter.hero_image} alt={node.frontmatter.hero_image_alt}/>
                </div>
                <h2 className={styles.title}>{node.frontmatter.title}</h2>
                <h3 className={styles.details}>{node.body}</h3>
              </div>
            })
          }
        </Layout>
      )
  }


