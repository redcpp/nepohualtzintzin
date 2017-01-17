// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'

Vue.use(Vuex)

const COLS = 10

const store = new Vuex.Store({
  state: {
    number: 0,
    values: Array(COLS + 1).fill(0),
    cols: COLS
  },
  mutations: {
    addToColumn (state, { column, increment }) {
      state.values[column] += increment
      state.number = parseInt(
        state.values.reduce(concatDecimals),
        20
      )
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
