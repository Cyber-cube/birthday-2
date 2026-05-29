import { useEffect, useState } from "react"
import { useLocation, useNavigate, useNavigationType, useOutletContext } from "react-router"
import svg from "../../assets/KeyYellow.svg"
import CakeNotBlown from "../../assets/CakeNotBlown.png"
import CakeBlown from "../../assets/CakeBlown.png"
import Styles from "../../styles/gifts/One.module.css"

function One() {
  const navigate = useNavigate()
  const location = useLocation()
  const navigationType = useNavigationType()
  const [updateCount, setUpdateCount] = useState(false)
  const { IsHidden, setIsHidden } = useOutletContext()
  const [displayNext, setDisplayNext] = useState(false)

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
    <div className={Styles.cakeContainer}>
      <img src={CakeNotBlown} className={Styles.cake} style={{
        display: `${!displayNext ? "block" : "none"}`
      }} />
      <img src={CakeBlown} className={Styles.cake} style={{
        display: `${displayNext ? "block" : "none"}`
      }} />
    </div>
    <div className={Styles.textContainer}>
      <span className={Styles.text1} style={{
        display: `${!displayNext ? "inline" : "none"}`
      }}>Happy Birthday Lakshita! Here's a virtual cake, full of love, for you.</span>
      <span className={Styles.text3} style={{
        display: `${displayNext ? "inline" : "none"}`
      }}>Happy</span>
      <span className={Styles.text4} style={{
        display: `${displayNext ? "inline" : "none"}`
      }}>Birthday</span>
    </div>
    <div className={Styles.textContainer}>
      <span className={Styles.text2} style={{
        display: `${!displayNext ? "inline" : "none"}`
      }}>Blow the candle and make your wish!</span>
      <p className={Styles.text5} style={{
        display: `${displayNext ? "inline" : "none"}`
      }}>Hey Lakshita! Happy Birthday for your 15th birthday and hey it's me again with another website for your birthday. I hope you have enjoyed it till now. Happy Birthday to you. Hope you stay forever healthy and happy. I hoppe that you don't face sadness. I hope so that you are viewing this website on your birthday. Anyways keep collecting keys to unlock the final gift and I'll talk to you again at the 6th gift!</p>
    </div>
    <div className={Styles.buttonContainer}>
      <button className={Styles.blowBtn} style={{
        display: `${!displayNext ? "block" : "none"}`
      }} onClick={() => {
        setDisplayNext(true)
      }}>Blow</button>
      <button onClick={() => {
        navigate('/choice/yes/gifts', {
          state: {
            fromLink: true,
            updateCount: updateCount && IsHidden.one,
            fromGift: "one"
          }
        })
      }} style={{
        display: `${displayNext ? "block" : "None"}`
      }
      } className={Styles.nextBtn}>Go Back</button>
    </div>
    <img onClick={() => {
      setIsHidden({ ...IsHidden, one: true })
      setUpdateCount(true)
    }} style={{
      display: `${!IsHidden.one && displayNext ? "block" : "none"}`
    }} src={svg} className={Styles.key} />
  </div >
}

export default One;
