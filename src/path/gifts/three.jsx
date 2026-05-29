import { useEffect, useState } from "react"
import { useLocation, useNavigate, useNavigationType, useOutletContext } from "react-router"
import svg from "../../assets/KeyYellow.svg"
import Styles from "../../styles/gifts/Three.module.css"

function Three() {
  const navigate = useNavigate()
  const location = useLocation()
  const navigationType = useNavigationType()
  const [updateCount, setUpdateCount] = useState(false)
  const { IsHidden, setIsHidden } = useOutletContext()
  const [imgUrl, setImgUrl] = useState(false)
  const [counter, setCounter] = useState(0)

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
    let url

    async function fetchImage() {
      const response = await fetch("https://cataas.com/cat/says/Happy%20Birthday?position=center&font=Impact&fontSize=50&fontColor=%23fff&fontBackground=none", {
        method: "GET",
        headers: { "Content-Type": "image/*" }
      })
      const img = await response.blob()
      url = URL.createObjectURL(img)
      setImgUrl(url)
    }
    fetchImage()
    
    return () => {
      URL.revokeObjectURL(url)
    }
  }, [counter])
  return <div className={Styles.mainDiv}>
    <div className={Styles.textContainer}>Here's a random cat for you saying Happy Birthday</div>
    {
      imgUrl ? <img src={imgUrl} className={Styles.cat} alt="" /> : <div className={Styles.textContainer}><span className={Styles.altText}>Loading...</span></div>
    }
    <div className={Styles.forwardBtnContainer}>
      <button onClick={() => {
        setImgUrl(false)
        setCounter(c => c + 1)
      }} className={Styles.forwardBtn}>Change Cat</button>
      <button onClick={() => {
        navigate('/choice/yes/gifts', {
          state: {
            fromLink: true,
            updateCount: updateCount && IsHidden.three,
            fromGift: "three"
          }
        })
      }} className={Styles.forwardBtn}>Go Back</button>
    </div>
    <img onClick={() => {
      setIsHidden({ ...IsHidden, three: true })
      setUpdateCount(true)
    }} style={{
      display: `${IsHidden.three ? "none" : "block"}`
    }} className={Styles.key} src={svg} />
  </div>
}

export default Three;
