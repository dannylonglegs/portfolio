import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentView from "../components/content/contentView"
import Gallery from "../components/content/gallery"

class ProjectTemplate extends React.Component {
  render() {
    const project = this.props.data.contentfulProject
    const siteTitle = this.props.data.site.siteMetadata.title
    const skills = this.props.data.site.siteMetadata.skills
    const siteDescription = this.props.data.site.siteMetadata.description
    const projects = this.props.data.allContentfulProject.edges
    const position = this.props.data.site.siteMetadata.position
    const email = this.props.data.site.siteMetadata.email
    const phoneInt = this.props.data.site.siteMetadata.phoneInt
    const phoneStr = this.props.data.site.siteMetadata.phoneStr

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
        <SEO title={project.projectTitle} />
        <Gallery project={project}/>
      </Layout>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query projectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        skills
        phoneInt
        phoneStr
        description
        skills
        email
      }
    }
    allContentfulProject {
      edges {
        node
         {
          projectTitle
          slug
        }
      }
    }
    contentfulProject(slug: { eq: $slug }) {
      projectTitle
      gallery {
        fluid(maxWidth: 800) {
          src
          sizes
          srcSet
          aspectRatio 
        }
      }
    }
  }
`
