<template>
  <button @click="toogle"
          class="item "
          :class="{ active: active, rotate: rotate }">
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
      return state.abacus[this.bar][this.row - 1][this.col - 1]
    },
    rotate () {
      return this.bar === 'bottom'
    }
  }),
  methods: {
    toogle () {
      this.toogleRowCol({
        col: this.col - 1,
        row: this.row - 1,
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
  background-color: #137893;
}

.item.rotate {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
</style>