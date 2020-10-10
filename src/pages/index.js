import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Description from "../components/layout/description"
import ProjectLinks from "../components/layout/projectLinks"

class BlogIndex extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      document.getElementById("main").classList.add("fade-in")
    }, 1000)
  }

  componentWillUnmount() {
    document.getElementById("main").classList.remove("fade-in")
  }

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
    const skillsLength = skills.length

    let skillsList = (
      <p>
        {skills.map((skill, i) => {
          if (skillsLength === i + 1) {
            return <span>{skill}</span>
          } else {
            return <span>{skill} / </span>
          }
        })}
      </p>
    )

    return (
      <Layout location={this.props.location}>
        <Description
          title={siteTitle}
          email={email}
          position={position}
          phoneInt={phoneInt}
          phoneStr={phoneStr}
        />
        <h1>Contact:</h1>
        <a class="telephone" href={"tel:" + phoneStr}>
          ✆ {phoneStr}
        </a>
        <a class="email" href={"to:" + email}>
          ✉ {email}
        </a>
        <a class="email" href={"https://www.instagram.com/danny_long_legs_"}>
           @danny_long_legs_
        </a>
        <a class="email" href={"https://github.com/dannylonglegs"}>
           Github: dannylonglegs
        </a>
        <br />
        <h1>Skills:</h1>
        <div class="skills">{skillsList}</div>
        <br />
        <h1>Featured Projects:</h1>
        <ProjectLinks projects={projects} />
        <SEO title="All posts" />
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
          featuredImage {
            fluid {
              base64
              src
              srcSet
            }
          }
        }
      }
    }
  }
`
