import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Nepohualtzintzin from '../model'

let model = Nepohualtzintzin()

export default new Vuex.Store({
  state: {
    abacus: getAbacusNewState(),
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
      state.abacus = getAbacusNewState()
    },
    setAbacusNumber (state, {number}) {
      model.setValue(number)
      state.abacus = getAbacusNewState()
    }
  }
})

function getAbacusNewState () {
  return {
    top: model._getTopMatrix(),
    bottom: model._getBottomMatrix(),
    value: model.getValue()
  }
}
