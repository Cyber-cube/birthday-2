import { useNavigate, useLocation } from "react-router"
import { useEffect } from "react"
import Styles from "../styles/ChoicePath.module.css"
import Gif from "../assets/noPage.gif"

function No() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    try {
      if (!location.state.fromLink) {
        navigate("/")
      }
    } catch { 
      navigate("/")
    }
  }, [location, navigate])

  return <div className={Styles.mainDiv}>
    <div className={Styles.textDiv}>
      Why ?
    </div>
    <div className={Styles.gifContainer}>
      <img src={Gif} />
    </div>
    <div className={Styles.buttonContainer}>
      <button className={Styles.button} onClick={() => navigate("/choice", { state: {
        fromLink: true
      } })}>Go Back</button>
    </div>
  </div>
}

export default No
