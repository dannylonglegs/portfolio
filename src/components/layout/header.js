import React, { useEffect, useState } from "react"
import Name from "../content/name"

const Description = props => {
  return (
    <header>
      <p class="description">
        My name is <Name /> and I am currently a freelance front-end web
        developer and artist from Winnipeg, MB currently located in Montreal,
        QC. I am especially interested in simple website design, UI/UX, and
        React. The websites I make usually use the jamstack of
        Gatsby/React/Contentful/Netlify.
      </p>
      <br />
    </header>
  )
}

export default Description
