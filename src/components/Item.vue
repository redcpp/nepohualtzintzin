<template>
  <button class="item" @click="toogleActive" :class="{ active: active }">
    {{value}}
  </button>
</template>

<script>
export default {
  name: 'item',
  props: ['col', 'value', 'initActive'],
  data () {
    return {
      active: this.initActive
    }
  },
  methods: {
    toogleActive: function () {
      this.active ^= 1
      this.$emit('toogle', this.col, this.active, this.value)
    }
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