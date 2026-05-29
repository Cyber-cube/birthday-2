import { useEffect, useState } from "react"
import { useLocation, useNavigate, useNavigationType, useOutletContext } from "react-router"
import svg from "../../assets/KeyYellow.svg"
import gif from "../../assets/ForYou.gif"
import Styles from "../../styles/gifts/Two.module.css"

function Two() {
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
    <img src={gif} className={Styles.gif} />
    <div className={Styles.forwardBtnContainer}>
      <button onClick={() => {
        console.log("navigating", updateCount, IsHidden)
        navigate('/choice/yes/gifts', {
          state: {
            fromLink: true,
            updateCount: updateCount && IsHidden.two,
            fromGift: "two"
          }
        })
      }} className={Styles.forwardBtn}>Go Back</button>
    </div>
    <img onClick={() => {
      setIsHidden({ ...IsHidden, two: true })
      setUpdateCount(true)
    }} style={{
      display: `${IsHidden.two ? "none" : "block"}`
    }} className={Styles.key} src={svg} />
  </div>
}

export default Two;
