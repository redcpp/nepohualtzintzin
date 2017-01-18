'use strict'

function Nepohualtzintzin () {
  let topMatrix = []
  let bottomMatrix = []
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
      toogleOnTopMatrixAt({row, col})
    } else if (bar === 'bottom') {
      toogleOnBottomMatrixAt({row, col})
    }
  }

  let toogleOnTopMatrixAt = function ({ row, col }) {
    if (!topMatrix[row][col]) {
      toogleOnAndBelowOf({bar: 'top', row, col})
    } else if (topMatrix[row][col]) {
      toogleOnAndOnAboveOf({bar: 'top', row, col})
    }
  }

  let toogleOnBottomMatrixAt = function ({ row, col }) {
    if (!bottomMatrix[row][col]) {
      toogleOnAndOnAboveOf({bar: 'bottom', row, col})
    } else if (bottomMatrix[row][col]) {
      toogleOnAndBelowOf({bar: 'bottom', row, col})
    }
  }

  function toogleOnAndOnAboveOf ({ bar, row, col }) {
    let matrix = getMatrixForBar(bar)
    let value = matrix[row][col]

    for (let i = row; i >= 0; i--) {
      if (matrix[i][col] === !value) break

      matrix[i][col] = !value
    }
  }

  function toogleOnAndBelowOf ({ bar, row, col }) {
    let matrix = getMatrixForBar(bar)
    let value = matrix[row][col]

    for (let i = row; i < matrix.length; i++) {
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
          value += Math.pow(20, exponet)
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
    toogleOnTopMatrixAt,
    toogleOnBottomMatrixAt,
    getStateAt,

    getCols () {
      return COLS
    },

    _getTopMatrix () {
      return topMatrix
    },
    _getBottomMatrix () {
      return bottomMatrix
    }
  }
}

module.exports = Nepohualtzintzin
