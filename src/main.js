// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import Nepohualtzintzin from './model'

let model = Nepohualtzintzin()
// model.toogleAt({bar: 'top', row: 1, col: 7})
// model.setValue(120)

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    abacus: {
      top: model._getTopMatrix(),
      bottom: model._getBottomMatrix(),
      value: model.getValue()
    },
    cols: model.getCols()
  },
  getters: {
    number: (state, getters) => model.getValue(),
    valueAt: (state, getters, { bar, col, row }) => {
      return model.getStateAt({bar, row, col})
    }
  },
  mutations: {
    toogleRowCol (state, { col, row, bar }) {
      model.toogleAt({bar, row, col})

      state.abacus = {
        top: model._getTopMatrix().slice(),
        bottom: model._getBottomMatrix().slice(),
        value: model.getValue()
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
