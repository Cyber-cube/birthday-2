import { useEffect, useState } from "react"
import { useLocation, useNavigate, useNavigationType, useOutletContext } from "react-router"
import useCustomInterval from "../../hooks/customInterval.jsx"
import svg from "../../assets/KeyYellow.svg"
import heart from "../../assets/heart.svg"
import Styles from "../../styles/gifts/Four.module.css"

function Four() {
  const navigate = useNavigate()
  const location = useLocation()
  const navigationType = useNavigationType()
  const [updateCount, setUpdateCount] = useState(false)
  const { IsHidden, setIsHidden } = useOutletContext()
  const [timeLeft, setTimeLeft] = useState(20)
  const { startInterval, stopInterval } = useCustomInterval(() => {
    setTimeLeft(t => t - 1)
  }, 1000)
  const [won, setWon] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [gameEnded, setGameEnded] = useState()
  const [x, setX] = useState(50)
  const [y, setY] = useState(50)
  const [count, setCount] = useState(0)

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

  useEffect(() => {
    if (timeLeft === 0) {
      stopInterval()
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setGameEnded(true)

      setWon(count === 30 ? true : false)

    }
  }, [count, stopInterval, timeLeft])

  useEffect(() => {
    if (count === 30 && timeLeft !== 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setGameEnded(true)
      stopInterval()
      setWon(true)
    }
  }, [count, stopInterval, timeLeft])

  return <div className={Styles.mainDiv}>
    <div className={Styles.progressContainer}>
      <div className={Styles.progress} style={{
        width: `${count/30 * 100}%`
      }}></div>
    </div>
    <div className={Styles.textContainer}>
      <span className={Styles.text1} style={{
        display: `${gameStarted ? "none" : "inline"}`
      }}>This one is a clicking game, collect 30 hearts in {timeLeft} seconds to get the key. The hearts will teleport here and there. Click on the button below to start the game</span>
      <span className={Styles.timer} style={{
        display: `${gameStarted && !gameEnded ? "block" : "none"}`
      }}>Time left: {timeLeft}</span>
      {
        won ? <span className={Styles.outcome} style={{
          display: `${gameEnded ? "inline" : "none"}`
        }}>Congratulations! You won in {20-timeLeft} seconds</span> : <span className={Styles.outcome} style={{
            display: `${gameEnded ? "inline" : "none"}`
          }}>Unfortunately, you lost. But no worries, you can try again!</span>
      }
    </div>
    <div className={Styles.forwardBtnContainer}>
      <button onClick={() => {
        console.log("navigating", updateCount, IsHidden)
        navigate('/choice/yes/gifts', {
          state: {
            fromLink: true,
            updateCount: updateCount && IsHidden.four,
            fromGift: "four"
          }
        })
      }} className={Styles.forwardBtn} style={{
        display: `${gameEnded ? "block" : "none"}`
      }
      }>Go Back</button>
      <button className={Styles.startBtn} style={{
        display: `${gameStarted ? "none" : "block"}`
      }} onClick={() => {
        startInterval()
        setGameStarted(true)
      }}>Start</button>

    </div>
    <div className={Styles.gameArea}>
      <img src={heart} style={{
        display: `${gameStarted && !gameEnded ? "block" : "none"}`,
        position: "relative",
        top: `${y}px`,
        left: `${x}px`
      }} className={Styles.heart} onClick={() => {
        setX(Math.floor(Math.random() * 201))
        setY(Math.floor(Math.random() * 201))
        setCount(c => c + 1)
      }
      } />
    </div>
    <img onClick={() => {
      setIsHidden({ ...IsHidden, four: true })
      setUpdateCount(true)
    }} style={{
      display: `${!IsHidden.four && won ? "block" : "none"}`
    }} className={Styles.key} src={svg} />
  </div>
}

export default Four;
