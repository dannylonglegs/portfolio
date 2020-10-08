import React from "react"
import Header from "./header"
import NavLinks from "./navLinks"

const Nav = props => {
  let projects = props.projects
  let skillsLength = props.skills.length
  let skills = (
    <p>
      {props.skills.map((skill, i) => {
        if (skillsLength === i + 1) {
          return <span>{skill}</span>
        } else {
          return <span>{skill} / </span>
        }
      })}
    </p>
  )

  return (
    <div id="nav">
      <Header
        title={props.title}
        email={props.email}
        position={props.position}
        phoneInt={props.phoneInt}
        phoneStr={props.phoneStr}
      />
      <h1>Skills:</h1>
      <div class="skills">{skills}</div>
      <br />
      <h1>Work:</h1>
      <NavLinks projects={projects} />
    </div>
  )
}

export default Nav
