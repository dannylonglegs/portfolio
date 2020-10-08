import React from "react"
import Header from "./description"
import NavLinks from "./navLinks"

const ProjectLinks = props => {
  let projects = props.projects

  return (
    <div id="nav">
      <NavLinks projects={projects} />
    </div>
  )
}

export default ProjectLinks
