import React, { useEffect, useState } from "react"

const Name = props => {
  const [animating, setAnimating] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    animate()
  }, [])

  const animate = async () => {
    setAnimating(true)

    document.getElementById("name-1").classList.add("animate")
    setTimeout(() => {
      document.getElementById("name-2").classList.add("animate")
    }, 50)
    setTimeout(() => {
      document.getElementById("name-3").classList.add("animate")
    }, 100)
    setTimeout(() => {
      document.getElementById("name-4").classList.add("animate")
    }, 150)
    setTimeout(() => {
      document.getElementById("name-5").classList.add("animate")
    }, 200)
    setTimeout(() => {
      document.getElementById("name-6").classList.add("animate")
    }, 250)
    setTimeout(() => {
      document.getElementById("name-7").classList.add("animate")
    }, 300)
    setTimeout(() => {
      document.getElementById("name-8").classList.add("animate")
    }, 350)
    setTimeout(() => {
      document.getElementById("name-9").classList.add("animate")
    }, 400)
    setTimeout(() => {
      document.getElementById("name-10").classList.add("animate")
    }, 450)
    setTimeout(() => {
      document.getElementById("name-11").classList.add("animate")
    }, 500)
    setTimeout(() => {
      document.getElementById("name-12").classList.add("animate")
    }, 550)
    setTimeout(() => {
      document.getElementById("name-13").classList.add("animate")
    }, 600)
    setTimeout(() => {
      document.getElementById("name-14").classList.add("animate")
    }, 650)
    setTimeout(() => {
      document.getElementById("name-14").classList.add("animate")
    }, 700)
    setTimeout(() => {
      document.getElementById("name-15").classList.add("animate")
    }, 750)
    setTimeout(() => {
      document.getElementById("name-1").classList.remove("animate")
      document.getElementById("name-2").classList.remove("animate")
      document.getElementById("name-3").classList.remove("animate")
      document.getElementById("name-4").classList.remove("animate")
      document.getElementById("name-5").classList.remove("animate")
      document.getElementById("name-6").classList.remove("animate")
      document.getElementById("name-7").classList.remove("animate")
      document.getElementById("name-8").classList.remove("animate")
      document.getElementById("name-9").classList.remove("animate")
      document.getElementById("name-10").classList.remove("animate")
      document.getElementById("name-11").classList.remove("animate")
      document.getElementById("name-12").classList.remove("animate")
      document.getElementById("name-13").classList.remove("animate")
      document.getElementById("name-14").classList.remove("animate")
      document.getElementById("name-15").classList.remove("animate")
      setAnimating(false)
      // setReadyToAnimate(true)
    }, 2000)
  }

  const hoverHandler = e => {
    if (e.type === "mouseenter") {
      setIsHovering(true)
      triggerAnimation()
    }
    if (e.type === "mouseleave") {
      setIsHovering(false)
    }
  }

  const triggerAnimation = () => {
    if (animating) {
      return null
    } else {
      animate()
    }
  }

  return (
    <span
      class="name-wrapper"
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}
    >
      <span class="name">
        <span class="daniel">
          <span id="name-1">D</span>
          <span id="name-2">a</span>
          <span id="name-3">n</span>
          <span id="name-4">i</span>
          <span id="name-5">e</span>
          <span id="name-6">l</span>
        </span>
        <span class="fernandes">
          <span id="name-7">F</span>
          <span id="name-8">e</span>
          <span id="name-9">r</span>
          <span id="name-10">n</span>
          <span id="name-11">a</span>
          <span id="name-12">n</span>
          <span id="name-13">d</span>
          <span id="name-14">e</span>
          <span id="name-15">s</span>
        </span>
      </span>
    </span>
  )
}

export default Name
