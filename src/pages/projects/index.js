import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../style/projects.module.css' 
import { Link, graphql } from 'gatsby';

export const query = graphql`
  query ProjectPage {
    allMdx {
      nodes {
        frontmatter {
          Slug
          stack
          title
          hero_image
        }
        id
      }
    }
    site {
      siteMetadata {
        contact
      }
    }
  }
`;

export default function Project({ data }) {
  console.log('project data', data)
  const projects = data.allMdx.nodes
  const email = data.site.siteMetadata.contact

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2 className={styles.folioTitle}>Portfolio</h2>
        <h3>Projects & Website I've created</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={'/projects/' + project.frontmatter.Slug} key={project.id}>
              <div>
                <div>
                  <img src={project.frontmatter.hero_image} alt='project-details' className={styles.img}/>
                </div>
                <h3 className={styles.proTitle}>{ project.frontmatter.title }</h3>
                <p className={styles.proStack}>{ project.frontmatter.stack }</p>
              </div>
            </Link>
          ))}
        </div>
        <div>
          <p>What do you think about my project? Email me at {email}</p>
        </div>
      </div>
    </Layout>
  );
}
