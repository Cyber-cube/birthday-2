import { useEffect } from "react"
import { useLocation, useNavigate, useOutletContext } from "react-router"
import Image from "../../assets/gift.png"
import Styles from "../../styles/gifts/Index.module.css"

function Index() {
  const navigate = useNavigate()
  const location = useLocation()
  const {keyCount, setKeyCount, opened, setOpened, IsHidden} = useOutletContext()

  useEffect(() => {
    console.log(keyCount, opened, IsHidden)
    try {
      if (location.state.updateCount && !opened.includes(location.state.fromGift)) {
        setKeyCount(c => c + 1)
        setOpened([...opened, `${location.state.fromGift}`])
      }
    } catch { /* empty */ }
    try {
      if (!location.state.fromLink) {
        navigate("/")
      }
    } catch {
      navigate("/")
    }
  }, [location, navigate, opened, setKeyCount, setOpened])

  const redirect = (index) => {
    navigate(`/choice/yes/gifts/${index}`, {
      state: {
        fromLink: true
      }
    })
  }
  return <div className={Styles.mainDiv}>
    <div className={Styles.textDiv}>Open the gifts and find a key to unlock the last page</div>
    <div className={Styles.progressContainer}>
      <div className={Styles.progress} style={{
        width: `${keyCount/6 * 100}%`
      }}></div>
    </div>
    <div className={Styles.giftsContainer}>
      <button className={Styles.btn} onClick={() => redirect(1)}><img src={Image} /></button>
      <button className={Styles.btn} onClick={() => redirect(2)}><img src={Image} /></button>
      <button className={Styles.btn} onClick={() => redirect(3)}><img src={Image} /></button>
      <button className={Styles.btn} onClick={() => redirect(4)}><img src={Image} /></button>
      <button className={Styles.btn} onClick={() => redirect(5)}><img src={Image} /></button>
      <button className={Styles.btn} onClick={() => redirect(6)}><img src={Image} /></button>
      <div className={Styles.final}>
        <button className={Styles.btnFinal} disabled={keyCount !== 6} onClick={() => redirect("final")}>Final</button>
      </div>
    </div> 
  </div>
}

export default Index;
