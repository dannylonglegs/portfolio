import React, { useState, useEffect } from "react"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import Img from "gatsby-image"

const Gallery = props => {
  // const indexLimit = props.project.galleryTags.length
  // let indexLimit
  const [currentIndex, setCurrentIndex] = useState(0)
  let images

  if (props.project.galleryTags) {
    images = props.project.galleryTags.map((img, i) => {
      return <Img className={img.tag} fluid={img.image.fluid} />
    })
  }

  // useEffect(() => {
  //   window.document.onkeydown = checkKey
  // }, [checkKey])

  // function checkKey(e) {
  //   const buttonNext = document.getElementById("increase")
  //   const buttonBack = document.getElementById("decrease")
  //   e = e || window.event
  //   if (e.keyCode == "37") {
  //     buttonBack.click()
  //   } else if (e.keyCode == "39") {
  //     buttonNext.click()
  //   }
  // }

  // const increaseIndex = () => {
  //   if (currentIndex < indexLimit - 1) {
  //     setCurrentIndex(currentIndex + 1)
  //   } else {
  //     return null
  //   }
  // }

  // const decreaseIndex = () => {
  //   if (currentIndex === 0) {
  //     return null
  //   } else {
  //     setCurrentIndex(currentIndex - 1)
  //   }
  // }

  return <div class="gallery"> {images ? images : null}</div>
}
export default Gallery
