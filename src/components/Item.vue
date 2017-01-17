<template>
  <button class="item " @click="toogle" :class="{ active: active }">
    <slot></slot>
  </button>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'item',
  props: ['row', 'col', 'bar'],
  computed: mapState({
    active (state) {
      return state.abacus[this.bar][this.row][this.col]
    }
  }),
  methods: {
    toogle () {
      this.toogleRowCol({
        column: this.col,
        row: this.row,
        bar: this.bar
      })
    },
    ...mapMutations([
      'toogleRowCol'
    ])
  }
}
</script>

<style scoped>
.item {
  cursor: pointer;
  display: block;
  padding: 15px;
  margin: 5px auto;
  background-color: transparent;
  border: none;
  border-radius: 3px;
  outline: none;
}

.item.active {
  color: #fff;
  font-weight: bold;
  background-color: #42b983;
}
</style>