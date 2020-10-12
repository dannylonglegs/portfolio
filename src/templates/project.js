import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/content/gallery"
// import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import RichText from "../components/content/richText"

class ProjectTemplate extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      document.getElementById("main").classList.add("fade-in")
    }, 1000)
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
          <h1>{project.projectTitle}</h1>
          <div class="project-info">
            <RichText
              content={
                project.childContentfulProjectProjectDescriptionRichTextNode
                  .projectDescription
              }
            />
            <div class="links">
              {project.link ? <a href={project.link}>→ Visit Site</a> : null}
              {project.githubLink ? <a href={project.githubLink}>→ Github Repository</a> : null }
            </div>
          </div>
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
          childContentfulProjectProjectDescriptionRichTextNode {
            projectDescription
          }
        }
      }
    }
    contentfulProject(slug: { eq: $slug }) {
      projectTitle
      childContentfulProjectProjectDescriptionRichTextNode {
        projectDescription
      }
      link
      githubLink
      gallery {
        fluid(maxWidth: 800) {
          src
          sizes
          srcSet
          aspectRatio
        }
      }
      galleryTags {
        title
        tag
        image {
          fluid {
            src
            sizes
            srcSet
            aspectRatio
          }
        }
        description {
          description
        }
      }
    }
  }
`
