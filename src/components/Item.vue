<template>
  <button @click="toogle"
          class="item "
          :class="{ active: active }"
          :style="{ zIndex: !active ? row : 10-row }">
    <img src="../assets/conr2.svg" class="corn-icon">
  </button>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'item',
  props: ['row', 'col', 'bar'],
  computed: mapState({
    active (state) {
      let active = state.abacus[this.bar][this.row - 1][this.col - 1]
      return (this.bar !== 'bottom' && active) || (this.bar === 'bottom' && !active)
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
  position: relative;
  cursor: pointer;
  display: block;
  padding: 0;
  margin: 5px auto;
  background-color: transparent;
  border: none;
  border-radius: 3px;
  margin-top: -30px;
  outline: none;
  
  -webkit-transition: -webkit-transform 150ms;
  transition: transform 150ms;
  transform-origin: 0% 70%;
  -webkit-filter: drop-shadow( 0px -2px 3px rgba(0,0,0,0.6) );
          filter: drop-shadow( 0px -2px 3px rgba(0,0,0,0.6) );
}

.item.active {
  transform: rotateX(180deg);
}

.corn-icon {
  width: 40%;
}
</style>