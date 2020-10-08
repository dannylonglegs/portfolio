import React from "react"
import { Link } from "gatsby"
import Nav from "./layout/projectLinks"
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
    
        <main id="main">{children}</main>
      
      </div>
    )
  }
}

export default Layout
