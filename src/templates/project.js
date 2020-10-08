import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/content/gallery"
// import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class ProjectTemplate extends React.Component {
  componentDidMount() {
    setTimeout(() => {document.getElementById("main").classList.add("fade-in")}, 1000);
  }

  componentWillUnmount() {
    document.getElementById("main").classList.remove("fade-in")
  }
  
  render() {
    const project = this.props.data.contentfulProject

    console.log(this.props, "props in project")
    return (
      <Layout location={this.props.location}>
        <SEO title={project.projectTitle} />
        <div id="project-content" class="project-content">
          <AniLink className="page-back" fade to={"/"}>
            ←
          </AniLink>
          <Gallery project={project} />
        </div>
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
        node {
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
