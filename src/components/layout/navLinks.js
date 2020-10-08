import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const NavLinks = props => {
  let links = props.projects.map(project => {
    // console.log(project)
    return (
      <li class="work-link">
        {/* <Link to={project.node.slug}>{project.node.projectTitle}</Link> */}
        {/* <TransitionLink
          exit={{
            length: 1,
            state: { pass: "this to the exiting page" },
            trigger: ({ node, e, exit, entry }) =>
              console.log(node, e, exit, entry, "NODE"),
          }}
          entry={{
            delay: 0.6,
            state: { you: "can add anything you want here" },
            trigger: ({ node, e, exit, entry }) =>
              console.log(node, e, exit, entry, "NODE"),
          }}
        ></TransitionLink> */}
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
