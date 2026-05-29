import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router"
import Gif from "../assets/choicePage.gif"
import Styles from "../styles/ChoicePath.module.css"

function ChoicePath() {
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
      Are You Ready For The Surprise ?
    </div>
    <div className={Styles.gifContainer}>
      <img src={Gif} />
    </div>
    <div className={Styles.buttonContainer}>
      <button className={`${Styles.yes} ${Styles.button}`} onClick={() => navigate("/choice/yes", { state: {
        fromLink: true
      } })}>Yes</button>
      <button className={`${Styles.no} ${Styles.button}`} onClick={() => navigate("/choice/no", { state: {
        fromLink: true
      } })}>No</button>
    </div>
    
  </div>
}

export default ChoicePath
