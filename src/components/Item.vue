<template>
  <button @click="toogle"
          class="item "
          :class="{ active: active }">
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
  cursor: pointer;
  display: block;
  padding: 0;
  margin: 5px auto;
  background-color: transparent;
  border: none;
  border-radius: 3px;
  outline: none;
}

.item.active {
  transform: rotateX(180deg);
  transform-origin: 100% 100%;
}

.item > .corn-icon {
  margin-top: -30px;
}

.item > .corn-icon {
  margin-top: -30px;
}

.item.flip {
  margin-top: -50px;
}

.corn-icon {
  width: 50%;
}
</style>