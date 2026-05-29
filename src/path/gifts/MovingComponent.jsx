
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
// import "./main.css"

function MovingComponent({ id, info, progressObj }) {

  const [posTop, setPosTop] = useState(125)
  const [posLeft, setPosLeft] = useState(50)
  const [isHeld, setIsHeld] = useState(false)
  // const [offsetX, setOffsetX] = useState()
  const offsetX = useRef()
  // const [offsetY, setOffsetY] = useState()
  const offsetY = useRef()
  // const [mainOffsetX, setMainOffsetX] = useState()
  const mainOffsetX = useRef()
  // const [mainOffsetY, setMainOffsetY] = useState()
  const mainOffsetY = useRef()
  // const [isTouchDevice, setIsTouchDevice] = useState()
  const isTouchDevice = useRef()

  const divElemRef = useRef()

  function touchDevice() {
    try {
      document.createEvent("TouchEvent")
      // setIsTouchDevice(true)
      isTouchDevice.current = true

    } catch (e) {
      // setIsTouchDevice(false)
      isTouchDevice.current = false
    }
  }

  useEffect(() => {
    const div = document.querySelector('.div')

    offsetX.current = div.offsetLeft
    offsetY.current = div.offsetTop

    /* setTimeout(() => {
      divElemRef.current.style.transform = 'rotate(90deg)'
    }, 5000) */

    touchDevice()
    // setInterval(() => {console.log(document.querySelector('div').style.zIndex)}, 3000)

    console.log("meow")
  }, [])

  /* useEffect(() => {
    const div = document.querySelector('.div')

    div.style.animation = 'rotating 0s 1'
  }) */

  function handleMove(event) {
    if (isHeld) {
      setPosTop(event.clientY - mainOffsetY.current)
      setPosLeft(event.clientX - mainOffsetX.current)
      console.log(progressObj, info)
      /* console.log("Movement")
      console.log(offsetX, offsetY, posLeft, posTop, event) */
      offsetX.current = posLeft
      offsetY.current = posTop

      if (!info.data[id].moved) {
        progressObj.setValue(() => progressObj.value + 1)
        info.setData({ ...info.data, [id]: { ...info.data[id], moved: true } })
        console.log(info)
      }
    }
    else {
      console.log("Mewo not working")
    }
  }

  function mouseDown(event) {
    event.preventDefault()

    divElemRef.current.style.animation = 'rotating 0.5s linear infinite'
    // console.log("start")
    setIsHeld(true)
    mainOffsetX.current = event.clientX - offsetX.current
    mainOffsetY.current = event.clientY - offsetY.current
    /* console.log(isTouchDevice)
    console.log(isHeld, mainOffsetX, mainOffsetY, event) */
  }

  function handleTouchMove(event) {
    if (isHeld) {
      setPosTop(event.touches[0].clientY - mainOffsetY.current)
      setPosLeft(event.touches[0].clientX - mainOffsetX.current)
      /* console.log("Movement")
      console.log(offsetX, offsetY, posLeft, posTop, event) */
      offsetX.current = posLeft
      offsetY.current = posTop
      if (!info.data[id].moved) {
        progressObj.setValue(() => progressObj.value + 1)
        info.setData({ ...info.data, [id]: { ...info.data[id], moved: true } })
        console.log(info)
      }
    }
  }

  function handleTouchEnd(event) {
    if (isHeld) {
      divElemRef.current.style.animation = 'none'
      console.log(progressObj.value)
      // setIsHeld(false)
    }
  }

  function handleTouchDown(event) {
    console.log(isHeld)
    setIsHeld(true)
    console.log("meow", divElemRef.current.style)

    divElemRef.current.style.animation = 'rotating 0.5s linear infinite'
    console.log(divElemRef, divElemRef.current.style.animation)

    mainOffsetX.current = event.touches[0].clientX - offsetX.current
    mainOffsetY.current = event.touches[0].clientY - offsetY.current
    // console.log(zIndex)
    // console.log("started", offsetX, offsetY)
  }

  return (
    <div style={{
      "display": "grid",
      "placeItems": "center"
    }}>
      <div
        ref={divElemRef}
        // draggable="true"
        className={`div`}
        onMouseDown={() => !isTouchDevice.current ? mouseDown(event) : null}
        onMouseMove={() => !isTouchDevice.current ? handleMove(event) : null}
        onMouseUp={() => {
          !isTouchDevice.current ? () => {
            setIsHeld(false)

            divElemRef.current.style.animation = 'none'
          } : null
        }}
        
        onMouseLeave={() => {
          !isTouchDevice.current ? () => {
            setIsHeld(false)

            divElemRef.current.style.animation = 'none'
          } : null
        }}

        onTouchStart={() => isTouchDevice.current ? handleTouchDown(event) : null}
        onTouchMove={() => isTouchDevice.current ? handleTouchMove(event) : null}
        onTouchEnd={() => isTouchDevice.current ? handleTouchEnd(event) : null}

        style={
          {
            position: "absolute",
            top: `${posTop}px`,
            left: `${posLeft}px`,
            cursor: 'grab',
            userSelect: 'none',
            border: 'solid 2px #7A1C1C',
            height: '14rem',
            width: '14rem',
            display: 'grid',
            placeItems: 'center',
            color: '#7A1C1C',
            padding: '10px',
            // boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            // backgroundColor: '#EDF4FA',
            // backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp0eVdpQMiMRETnZGdBo4ccgZ5-9X-grezNg&usqp=CAU')",
            // zIndex: zIndex,
            // transform: `translate(${posLeft}px, ${posTop}px)`,
            ...info.data[id].style
          }}
      ><p>{info.data[id].text}</p></div>
    </div>
  )
}

MovingComponent.propTypes = {
  id: PropTypes.string.isRequired,
  info: PropTypes.shape({
    data: PropTypes.object.isRequired,
    setData: PropTypes.func.isRequired,
  }).isRequired,
  progressObj: PropTypes.shape({
    value: PropTypes.number.isRequired,
    setValue: PropTypes.func.isRequired
  })
}

export default MovingComponent
