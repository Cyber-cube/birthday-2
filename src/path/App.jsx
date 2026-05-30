/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import useGame from "../useGame.jsx";
import Styles from "../styles/HomePage.module.css"
import { useNavigate } from "react-router";
/* import one from "../assets/CakeBlown.png"
import two from "../assets/CakeNotBlown.png"
import three from "../assets/ForYou.gif"
import four from "../assets/KeyYellow.svg"
import five from "../assets/choicePage.gif"
import six from "../assets/gift.png"
import seven from "../assets/happy-birthday.gif"
import eight from "../assets/heart.svg"
import nine from "../assets/noPage.gif" */

function App() {
  const { checkGame, grid, setGrid } = useGame()
  const gameFinished = useRef(false)
  const wait = useRef(false)
  const [triggerBotMove, setTriggerBotMove] = useState(0)
  const [status, setStatus] = useState()
  const canvas = useRef(null)
  const cellSide = 30
  const usedCells = useRef([])
  const navigate = useNavigate()
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [triggerRefresh, setTriggerRefresh] = useState(0)

  const assets = import.meta.glob("../assets/*.{png,jpg,svg,gif}", { eager: true })
  useEffect(() => {
    for (const img in assets) {
      assets[img]().then((mod) => {
        const img = new Image()
        img.src = mod.default
      })
    }
    console.log(assets)
  }, [assets])

  function drawLine(r1, c1, r2, c2) {
    const ctx = canvas.current.getContext("2d")
    const coordinate = (n) => { return cellSide * ((2 * n - 1) / 2) }
    const x1 = coordinate(c1)
    const y1 = coordinate(r1)
    const x2 = coordinate(c2)
    const y2 = coordinate(r2)
    ctx.lineWidth = 10
    ctx.lineCap = "round"
    ctx.lineJoin = "round"
    for (let i = 0; i <= 1000; i++) {
      setTimeout(() => {
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo((x1 * (1000 - i) + x2 * i) / (1000), (y1 * (1000 - i) + y2 * i) / (1000))
        ctx.stroke()
      }, 500)
    }
  }


  useEffect(() => {
    if (triggerBotMove !== 0 && !gameFinished.current) {
      const remainingChoices = []
      Object.keys(grid).forEach((v, i) => {
        if (grid[v] === "blank") {
          remainingChoices.push(v)
        }
      })
      const choice = remainingChoices[Math.floor(Math.random() * (remainingChoices.length - 1))]
      setGrid((g) => ({ ...g, [choice]: "O" }))
      usedCells.current.push(choice)

    }

  }, [triggerBotMove])
  useEffect(() => {
    /* try {
      if (location.state.refresh) {

      }
    } catch {  }  */
    console.log("Functioning")
    const outcome = checkGame("X", grid)

    console.log(outcome, "oiia", checkGame)
    if (typeof outcome !== "undefined") {
      if (outcome.wonGame) {
        gameFinished.current = true
        const initialCell = outcome.initialCell.split("-")
        const r1 = initialCell[0]
        const c1 = initialCell[1]

        const finalCell = outcome.finalCell.split("-")
        const r2 = finalCell[0]
        const c2 = finalCell[1]
        drawLine(r1, c1, r2, c2)

        setStatus("X Won!")
        setButtonDisabled(false)
      }
    }
    const outcome2 = checkGame("O", grid)
    if (typeof outcome2 !== "undefined") {
      if (outcome2.wonGame) {
        gameFinished.current = true
        const initialCell = outcome2.initialCell.split("-")
        const r1 = initialCell[0]
        const c1 = initialCell[1]

        const finalCell = outcome2.finalCell.split("-")
        const r2 = finalCell[0]
        const c2 = finalCell[1]
        drawLine(r1, c1, r2, c2)


        setStatus("O Won!")
        setButtonDisabled(true)
      }
    }
    if (usedCells.current.length === 9 && !gameFinished.current) {
      gameFinished.current = true
      setStatus("Game Resulted in a tie")
    }
  }, [grid, setGrid, checkGame])

  useEffect(() => {
    if (triggerRefresh !== 0) {
      window.location.reload()
    }
  }, [triggerRefresh])

  function updateGrid(key) {
    if (grid[key] === "blank" && !gameFinished.current && !wait.current) {
      setGrid({ ...grid, [key]: "X" })
      console.log(grid)
      usedCells.current.push(key)
      wait.current = true
      setTimeout(() => {
        if (!gameFinished.current) {
          setTriggerBotMove(c => c + 1)
          wait.current = false
        }
      }, 1000)

    }
  }


  return <div className={Styles.mainBox}>
    <div className={Styles.textContainer}>
      Tic Tac Toe
    </div>
    <div className={Styles.tictactoe}>
      <div className={Styles.tictactoeContainer}>
        <div className={Styles.container}>
          {Object.keys(grid).map((v, i) => {
            return <div className={Styles.box} key={i} onClick={() => updateGrid(v)}>{grid[v] === "blank" ? "" : grid[v]}</div>
          })}
        </div>
      </div>
    </div>
    <div className={Styles.canvasContainer}>
      <canvas className="canvas" ref={canvas} width={cellSide * 3} height={cellSide * 3}></canvas>
    </div>
    <div className={Styles.statusBar}>{status}</div>
    <div className={Styles.buttonContainer}>
      <button className={`${Styles.refreshButton} ${Styles.button}`} onClick={() => setTriggerRefresh(c => c + 1)}>Restart</button>
      <button disabled={buttonDisabled} onClick={() => {
        navigate("/accept",
          {
            state: {
              fromLink: true
            }
          })
        setGrid({
          "1-1": "blank",
          "1-2": "blank",
          "1-3": "blank",

          "2-1": "blank",
          "2-2": "blank",
          "2-3": "blank",

          "3-1": "blank",
          "3-2": "blank",
          "3-3": "blank",
        })
      }} className={`${Styles.redirectButton} ${Styles.button}`}>Go forward</button>
    </div>
  </div>
}

export default App;
