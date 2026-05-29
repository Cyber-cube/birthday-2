import { useState } from "react"
import { Outlet } from "react-router"

function GiftsOutlet() {
  const [keyCount, setKeyCount] = useState(0)
  const [IsHidden, setIsHidden] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false
  })
  const [opened, setOpened] = useState([])

  return <Outlet context={{keyCount, setKeyCount, IsHidden, setIsHidden, opened, setOpened}}/>
}

export default GiftsOutlet
