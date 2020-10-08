import React from "react"
import { Link } from "gatsby"
import Nav from "./layout/nav"
import Footer from "./layout/footer"

import { rhythm, scale } from "../utils/typography"
import "../styles/main.scss"

class Layout extends React.Component {
  render() {
    const {
      location,
      title,
      description,
      projects,
      children,
      skills,
      position,
      phoneInt,
      phoneStr,
      email
    } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div class="layout">
        <Nav
          title={title}
          projects={projects}
          description={description}
          skills={skills}
          position={position}
          phoneInt={phoneInt}
          phoneStr={phoneStr}
          email={email}
        />
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default Layout
