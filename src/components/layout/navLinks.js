import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const NavLinks = props => {
  let links = props.projects.map(project => {
    return (
      <li class="work-link">
        <AniLink fade to={"/" + project.node.slug}>
          → {project.node.projectTitle}
        </AniLink>
      </li>
    )
  })

  return (
    <div class="nav-links">
      <ul class="project-links">{links}</ul>
    </div>
  )
}

export default NavLinks
