// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'

Vue.use(Vuex)

const COLS = 10

const zip = rows =>
  rows[0].map((_, c) => rows.map(row => row[c]))


// TODO: Refactor!
const store = new Vuex.Store({
  state: {
    abacus: {
      top: Array(4).fill(undefined).map(row =>
        Array(COLS + 1).fill(undefined).map(col => 0)
      ),
      bottom: Array(5).fill(undefined).map(row =>
        Array(COLS + 1).fill(undefined).map(col => 0)
      )
    },
    cols: COLS
  },
  getters: {
    number: state => {
      let topSum = zip(state.abacus.top).map((arr) =>
        arr.reduce((a, b) => a + b) * 5
      )
      let bottomSum = zip(state.abacus.bottom).map((arr) =>
        arr.reduce((a, b) => a + b)
      )
      let values = topSum.map((n, i) =>
        n + bottomSum[i]
      )
      let number = parseInt(
        values.reduce(concatDecimals),
        20
      )
      return number
    },
    value: (state, getters, { bar, col, row }) => {
      return state.abacus[bar][row][col]
    }
  },
  mutations: {
    toogleRowCol (state, { column, row, bar }) {
      let newBar = state.abacus[bar].slice()
      newBar[row][column] ^= 1
      state.abacus[bar] = newBar
    }
  }
})

const concatDecimals = (a, b) => {
  return a.toString(20) + b.toString(20)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
