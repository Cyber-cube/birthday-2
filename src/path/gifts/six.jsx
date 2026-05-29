import { useEffect, useState, useRef } from "react"
import { useLocation, useNavigate, useNavigationType, useOutletContext } from "react-router"
import svg from "../../assets/KeyYellow.svg"
import Styles from "../../styles/gifts/Six.module.css"
import Progress from "./Progress.jsx"
import MovingComponent from "./MovingComponent.jsx"

function Six() {
  const navigate = useNavigate()
  const location = useLocation()
  const navigationType = useNavigationType()
  const [updateCount, setUpdateCount] = useState(false)
  const { IsHidden, setIsHidden } = useOutletContext()
  const divRef = useRef()
  const [progress, setProgress] = useState(0)
  const [data, setData] = useState({
    one: {
      moved: false,
      style: {
        backgroundColor: '#D4A874',
        zIndex: 16,
      },
      text: "Hii Lakshita! Happy Birthday again! So after seeing this card, did you remember the previous year birthday website ? Well I sort of reused the part of it into this website. Let's continue forward"
    },

    two: {
      moved: false,
      style: {
        backgroundColor: '#D3A771',
        zIndex: 15,
      },
      text: 'So first of all, While I am writing this, 35 minutes are left till your birthday. I started preparing for this after the finals'
    },

    three: {
      moved: false,
      style: {
        backgroundColor: '#D7AD79',
        zIndex: 14,
      },
      text: 'I got the idea from an instagram reel 5-6 months ago. I just tweaked many things and wrote this all by myself. Now a fun fact that the hearts you clicked on (the ones that were moving in a circular path) had trignometry used in it'
    },

    four: {
      moved: false,
      style: {
        backgroundColor: '#D8B280',
        zIndex: 13,
      },
      text: (<>The source code is available <a href="https://github.com/Cyber-cube/birthday-2">Here</a> btw. I don't know if you're reading this on your birthday or after your birthday but I hope that you've enjoyed this year's website till now.</>)
    },

    five: {
      moved: false,
      style: {
        backgroundColor: '#DBB681',
        zIndex: 12,
      },
      text: 'So let\'s talk about what things happened between this and previous year. First of all, we were able to move to the same section in this year (I feared section change).'
    },

    six: {
      moved: false,
      style: {
        backgroundColor: '#D9B483',
        zIndex: 11,
      },
      text: 'And I\'m glad that we all came into sanskrit section (except emad)'
    },

    seven: {
      moved: false,
      style: {
        backgroundColor: '#D8B27F',
        zIndex: 10,
      },
      text: 'Actually many things have changed, but I guess, during the October-Feburary phase, we became great friends. That is what I\'m happy for.'
    },

    eight: {
      moved: false,
      style: {
        backgroundColor: '#E3C295',
        zIndex: 9,
      },
      text: 'Now many people suggested me to stop the development of this website cuz you wouldn\'t see it but I continued. I sometimes felt the urge to stop but I continued developing with breaks. And now here I am, with this year\'s website completed'
    },

    nine: {
      moved: false,
      style: {
        backgroundColor: '#E8CFA6',
        zIndex: 8,
      },
      text: 'While I\'m changing the text of this content, I\'m just getting nostalgic feeling from it. Anyways Lakshita I hope you enjoyed this till now'
    },

    ten: {
      moved: false,
      style: {
        backgroundColor: '#F1D9B2',
        zIndex: 7,
      },
      text: 'I tried my best again at this website so I hope that you liked it but after school opens, if you are willing to then you can tell me about the website. Whether you genuinely liked it or not.'
    },

    eleven: {
      moved: false,
      style: {
        backgroundColor: '#EBD2AB',
        zIndex: 6,
      },
      text: 'I just saw that I completed the previous year\'s website also on 29th XD.'
    },

    twelve: {
      moved: false,
      style: {
        backgroundColor: '#F6E2C3',
        zIndex: 5,
      },
      text: 'I\'ll try making the next year website even better. Anyways if you were wondering the point of collecting the keys and progressing. The response is in next card'
    },

    thirteen: {
      moved: false,
      style: {
        backgroundColor: '#F9E7CF',
        zIndex: 4,
      },
      text: 'Well, it unlocks the last gift and that has my favourite moment with you in the time period of your previous year\'s birthday and this year\'s birthday'
    },

    fourteen: {
      moved: false,
      style: {
        backgroundColor: '#FBEAD5',
        zIndex: 3,
      },
      text: 'So yeah, my talk with you on this website is almost about to end. Thank you for staying this far.'
    },

    fifteen: {
      moved: false,
      style: {
        backgroundColor: '#FDF1DE',
        zIndex: 2,
      },
      text: 'Happy birthday again and may you live a long, happy, and wonderful life — full of beautiful memories and success in everything you do.'
    },

    sixteen: {
      moved: false,
      style: {
        backgroundColor: '#FFF6E6',
        zIndex: 1,
      },
      text: 'See you at the final gift'
    },
  })

  useEffect(() => {
    if (progress == 16) {
      // divRef.current.style.display = "block"
      divRef.current.style.opacity = "100%"
    }
  }, [progress])

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
    <Progress value={progress} />
    <div style={{
      display: `${progress === 16 ? "none" : "block"}`
    }}>
      <MovingComponent id={'one'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />

      <MovingComponent id={'two'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />

      <MovingComponent id={'three'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />

      <MovingComponent id={'four'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />


      <MovingComponent id={'five'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />
      <MovingComponent id={'six'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />
      <MovingComponent id={'seven'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />
      <MovingComponent id={'eight'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />
      <MovingComponent id={'nine'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />

      <MovingComponent id={'ten'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />
      <MovingComponent id={'eleven'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />
      <MovingComponent id={'twelve'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />
      <MovingComponent id={'thirteen'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />
      <MovingComponent id={'fourteen'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />
      <MovingComponent id={'fifteen'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />
      <MovingComponent id={'sixteen'} info={{
        data: data,
        setData: setData,
      }} progressObj={{ value: progress, setValue: setProgress }} />
    </div>
    <div style={{
      display: `${progress === 16 ? "grid" : "none"}`,
      width: "100%",
      height: "100%",
      placeContent: "center"
    }}>
      <div className={Styles.forwardBtnContainer}>
        <button onClick={() => {
          console.log("navigating", updateCount, IsHidden)
          navigate('/choice/yes/gifts', {
            state: {
              fromLink: true,
              updateCount: updateCount && IsHidden.six,
              fromGift: "six"
            }
          })
        }} className={Styles.forwardBtn}>Go Back</button>
      </div>
      <img onClick={() => {
        setIsHidden({ ...IsHidden, six: true })
        setUpdateCount(true)
      }} style={{
        display: `${IsHidden.six ? "none" : "block"}`
      }} className={Styles.key} src={svg} ref={divRef} />
    </div>
  </div>
}

export default Six;
