import { useEffect, useState } from "react"
import { useLocation, useNavigate, useNavigationType, useOutletContext } from "react-router"
import svg from "../../assets/KeyYellow.svg"
import Styles from "../../styles/gifts/Five.module.css"

function Five() {
  const navigate = useNavigate()
  const location = useLocation()
  const navigationType = useNavigationType()
  const [updateCount, setUpdateCount] = useState(false)
  const { IsHidden, setIsHidden } = useOutletContext()

  useEffect(() => {
    try {
      if (!location.state.fromLink) {
        navigate("/")
      }
    } catch {
      navigate("/")
    }
    /* if (navigationType === "POP") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUpdateCount(false)
    } */
  }, [location, navigate, navigationType])
  return <div className={Styles.mainDiv}>
    <div className={Styles.textContainer}>
      <span className={Styles.text}>This one is... well a free key as a gift</span>
    </div>
    <div className={Styles.forwardBtnContainer}>
      <button onClick={() => {
        console.log("navigating", updateCount, IsHidden)
        navigate('/choice/yes/gifts', {
          state: {
            fromLink: true,
            updateCount: updateCount && IsHidden.five,
            fromGift: "five"
          }
        })
      }} className={Styles.forwardBtn}>Go Back</button>
    </div>
    <img onClick={() => {
      setIsHidden({ ...IsHidden, five: true })
      setUpdateCount(true)
    }} style={{
      display: `${IsHidden.five ? "none" : "block"}`
    }} className={Styles.key} src={svg} />
  </div>
}

export default Five;
