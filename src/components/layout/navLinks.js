import React from "react"
import { Link } from "gatsby"

const NavLinks = props => {

  let links = props.projects.map(project => {
    return (
      <li class="work-link">→ 
        <Link to={project.node.slug}>{project.node.projectTitle}</Link>
      </li>
    )
  })

  return (
    <div class="nav-links">
      <ul class="project-links">
        {links}
      </ul>
    </div>
  )
}

export default NavLinks
