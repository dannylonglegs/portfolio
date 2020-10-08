import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const skills = data.site.siteMetadata.skills
    const projects = data.allContentfulProject.edges
    const position = data.site.siteMetadata.position
    const email = data.site.siteMetadata.email
    const phoneInt = data.site.siteMetadata.phoneInt
    const phoneStr = data.site.siteMetadata.phoneStr

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        description={siteDescription}
        projects={projects}
        skills={skills}
        position={position}
        phoneInt={phoneInt}
        phoneStr={phoneStr}
        email={email}
      >
        <SEO title="All posts" />
        {/* {posts.map(({ node }) => {
          const title = node.projectTitle || node.slug
          return (
            <article key={node.slug}>
              <section>
              </section>
            </article>
          )
        })} */}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        position
        phoneInt
        phoneStr
        description
        skills
        email
      }
    }
    allContentfulProject {
      edges {
        node {
          projectTitle
          slug
        }
      }
    }
  }
`
