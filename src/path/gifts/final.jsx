import { useEffect } from "react"
import { useLocation, useNavigate, useNavigationType } from "react-router"
import Styles from "../../styles/gifts/Final.module.css"

function Final() {
  const navigate = useNavigate()
  const location = useLocation()
  const navigationType = useNavigationType()

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
      <span className={Styles.text1}>So here's my favourite moment with you</span>
      <span className={Styles.text2}>It's actually a moment where others were there too. It was the say when you sat in front of me with Suhani in this session and I was with Naitik. The whole day was great and sorry for that high law view thing that naitik showed to you. Anyways on that day, especially those two continuous classes where no teachers came and we were talking. It was pretty fun and I also rememver that I complimented your Mehendi that day. <br /> Anyways you've reached the end of the website. You can click the button below to go to the start. Hapoy birthday again and there will most likely be another website for your birthday next year!</span>
    </div>
    <div className={Styles.forwardBtnContainer}>
      <button onClick={() => {
        navigate("/", {
          state: {
            remount: true
          }
        })}} className={Styles.forwardBtn}>Go To Home Page</button>
    </div>
  </div>
}

export default Final;
