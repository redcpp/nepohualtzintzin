'use strict'

function Nepohualtzintzin () {
  let topMatrix = []
  let bottomMatrix = []
  const BASE = 20
  let COLS = 10

  ;(function init () {
    topMatrix = Array(3).fill([]).map(() =>
      Array(COLS).fill(false)
    )
    bottomMatrix = Array(4).fill([]).map(() =>
      Array(COLS).fill(false)
    )
  })()

  let toogleAt = function ({ bar, row, col }) {
    if (bar === 'top') {
      toogleOnTopAt({row, col})
    } else if (bar === 'bottom') {
      toogleOnBottomAt({row, col})
    }
  }

  let toogleOnTopAt = function ({ row, col }) {
    if (!topMatrix[row][col]) {
      toogleOnAndUndernead({bar: 'top', row, col})
    } else if (topMatrix[row][col]) {
      toogleOnAndOnTopOf({bar: 'top', row, col})
    }
  }

  let toogleOnBottomAt = function ({ row, col }) {
    if (!bottomMatrix[row][col]) {
      toogleOnAndOnTopOf({bar: 'bottom', row, col})
    } else if (bottomMatrix[row][col]) {
      toogleOnAndUndernead({bar: 'bottom', row, col})
    }
  }

  function toogleOnAndUndernead ({ bar, row, col }) {
    let matrix = getMatrixForBar(bar)
    let value = matrix[row][col]

    for (let i = row; i < matrix.length; i++) {
      if (matrix[i][col] === !value) break

      matrix[i][col] = !value
    }
  }

  function toogleOnAndOnTopOf ({ bar, row, col }) {
    let matrix = getMatrixForBar(bar)
    let value = matrix[row][col]

    for (let i = row; i >= 0; i--) {
      if (matrix[i][col] === !value) break

      matrix[i][col] = !value
    }
  }

  function getMatrixForBar (bar) {
    if (bar === 'top') {
      return topMatrix
    }
    if (bar === 'bottom') {
      return bottomMatrix
    }
  }

  let getValue = function () {
    let value = 0
    value += calculateValueForMatrix(topMatrix) * 5
    value += calculateValueForMatrix(bottomMatrix)

    return value
  }

  function calculateValueForMatrix (matrix) {
    let value = 0
    let exponet = 0

    for (let col = COLS - 1; col >= 0; col--) {
      for (let row = 0; row < matrix.length; row++) {
        if (matrix[row][col]) {
          value += Math.pow(BASE, exponet)
        }
      }
      exponet++
    }

    return value
  }

  let getStateAt = function ({ bar, row, col }) {
    let matrix = getMatrixForBar(bar)

    return matrix[row][col]
  }

  return {
    getValue,

    toogleAt,
    toogleOnTopAt,
    toogleOnBottomAt,
    getStateAt,

    getCols () {
      return COLS
    },

    _getTop () {
      return topMatrix
    },
    _getBottom () {
      return bottomMatrix
    }
  }
}

module.exports = Nepohualtzintzin
