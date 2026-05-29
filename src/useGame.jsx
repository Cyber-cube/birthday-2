import { useState } from "react"

/* eslint-disable no-unused-vars */

function checkContinuity(input, grid, i, cellRow, cellColumn, originCell) {
  let row = cellRow - 2
  let column = cellColumn - 1
  let index = 0
  for (let x = 0; x < 3; x++) {
    row++
    for (let y = 0; y < 3; y++) {
      if (y === 0) {
        column = cellColumn - 1
      }
      if (i === index) {
        console.log("Index is matching", row, column, input, grid[`${row}-${column}`])
        try {
          if (grid[`${row}-${column}`] === input) {
            console.log(`${input} won!`)
            stopGame = true
            return {wonGame: true, initialCell: originCell, finalCell: `${row}-${column}`}
          }
        } catch { /* empty */ }

      }
      column++
      index++
    }
  }
}

// let input = "x"
let stopGame = false

const checkGame = (input, grid) => {
  const keys = Object.keys(grid)
  let outcome = 0
  console.log(keys)
  // console.log(checkContinuity)
  keys.forEach((v, i) => {
    if (grid[v] !== input) {
      return
    }
    /* if (i === 8) {
      stopGame = false
      return
    } */
    if (stopGame) {
      return
    }
    const data = v.split("-")
    let row = data[0]
    let column = data[1]
    let rotationNo = 0
    let centralCell
    // console.log(row, column, data)

    row -= 2
    // console.log(row, column)
    for (let index = 0; index < 3; index++) {
      row++
      // console.log(row)
      // console.log(row, i)
      for (let jindex = 0; jindex < 3; jindex++) {
        try {
          if (jindex === 0) {
            column = data[1] - 1
          }
          if (grid[`${row}-${column}`] === input) {
            // console.log(row, column, 1)
            if (v === `${row}-${column}`) {
              centralCell = v
              // console.log(v === `${row}-${column}`)
            } else {
              // console.log("Oiia Oiia", row, column, grid[`${row}-${column}`], rotationNo)
              outcome = checkContinuity(input, grid, rotationNo, row, column, v)
              console.log("Meow from hook", outcome)
              
              if (row===2 && column ===2) {
                console.log("working", rotationNo)
              }
              console.log(outcome)
              if (typeof outcome !== "undefined") {
                console.log("returning")
              }

            }
          }
        } catch {
          // console.log("Meow")
        }
        rotationNo++
        column++
      }
    }
  })
  stopGame = false
  return outcome
}

const useGame = () => {
  const [grid, setGrid] = useState({
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

  return {checkGame, grid, setGrid}
}

export default useGame;
