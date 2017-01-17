<template>
  <button class="item" @click="toogleAndChangeColumn" :class="{ active: active }">
    {{value}}
  </button>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'item',
  props: ['col', 'value'],
  data () {
    return {
      active: 0
    }
  },
  methods: {
    toogleAndChangeColumn () {
      this.active ^= 1
      this.addToColumn({
        column: this.col,
        increment: (this.active ? this.value : -this.value)
      })
    },
    ...mapMutations([
      'addToColumn'
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