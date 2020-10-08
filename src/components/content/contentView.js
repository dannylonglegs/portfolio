import React, { useState } from "react"
import ImageWrapper from "./imageWrapper"
import {
  CarouselProvider,
  Slider,
  Slide,
  Image,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

const ContentView = props => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const indexLimit = props.project.gallery.length - 1;
  let images = <div> No images </div>

  const increaseIndex = () => {
    if (currentIndex < indexLimit) {
      setCurrentIndex(currentIndex + 1)
    } else {
      return null
    }
  }

  const decreaseIndex = () => {
    if (currentIndex === 0) {
      return null
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  if (props.project.gallery) {
    images = props.project.gallery.map((image, i) => {
      console.log(image)
      return <ImageWrapper image={image} />
    })
  }
  console.log(images)
  return (
    <div class="carousel">
      {images[currentIndex]}
      <button onClick={decreaseIndex} disabled={currentIndex === 0 ? true : false}>Back</button>
      <button onClick={increaseIndex} disabled={currentIndex === indexLimit ? true : false}>Next</button>
    </div>
  )
}
export default ContentView
