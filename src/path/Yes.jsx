import { useNavigate, useLocation } from "react-router"
import { useEffect, useState } from "react"
import RotatingComponent from "./RotatingComponent.jsx"
import Styles from "../styles/Yes.module.css"

function Yes() {
  const navigate = useNavigate()
  const location = useLocation()
  const [deg, setDeg] = useState(0)
  const [deg2, setDeg2] = useState(72)
  const [deg3, setDeg3] = useState(144)
  const [deg4, setDeg4] = useState(216)
  const [deg5, setDeg5] = useState(288)
  const [progress, setProgress] = useState(0)

  // const [width, height] = "50"

  useEffect(() => {
    try {
      if (!location.state.fromLink) {
        navigate("/")
      }
    } catch {
      navigate("/")
    }
  }, [location, navigate])

  useEffect(() => {
    setInterval(() => {
      setDeg(c => c + 1)
      setDeg2(c => c + 1)
      setDeg3(c => c + 1)
      setDeg4(c => c + 1)
      setDeg5(c => c + 1)
    }, 25)
  }, [])


  return <div className={Styles.mainDiv}>
    <div className={Styles.textContainer}>But first, click on the hearts to proceed forward!</div>
    <div className={Styles.mainContainer}>
      <div className={Styles.progressContainer}>
        <div className={Styles.progress} style={{
          width: `${progress/5 * 100}%`
        }}></div>
      </div>
    </div>
    <div className={Styles.circleContainer}>
      <div className={Styles.container}>
        <div className={Styles.children}></div>
        <div className={Styles.children}>
          <RotatingComponent degree={deg} updaterFunc={setProgress}/>
          <RotatingComponent degree={deg2} updaterFunc={setProgress}/>
          <RotatingComponent degree={deg3} updaterFunc={setProgress}/>
          <RotatingComponent degree={deg4} updaterFunc={setProgress}/>
          <RotatingComponent degree={deg5} updaterFunc={setProgress}/>
        </div>
        <div className={Styles.children}></div>
        <div className={Styles.children}></div>
      </div>
    </div>
    <div className={Styles.buttonContainer}>
      <button className={Styles.button} onClick={() => {
        navigate("/choice/yes/gifts/", {
          state: {
            fromLink: true
          }
        })
      }} disabled={progress !== 5}>Go forward</button>
    </div>
  </div>
}

export default Yes
