import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Gif from "../assets/happy-birthday.gif"
import Styles from "../styles/Accept.module.css"

function Accept() {
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    try {
      if (!location.state.fromLink) {
        navigate("/", {
          state: {
            remount: true
          }
        })
      }
      console.log(location)
    } catch {
      navigate("/", {
        state: {
          remount: true
        }
      })
    }
  }, [location, navigate])

  return <div className={Styles.mainDiv}>
    <div className={Styles.gifContainer}>
      <img src={Gif}  />
    </div>
    <div className={Styles.buttonContainer}>
      <button className={Styles.button} onClick={() => navigate("/choice", { state: {
        fromLink: true
      }, })}>Proceed</button>
    </div>
  </div>
}

export default Accept;
