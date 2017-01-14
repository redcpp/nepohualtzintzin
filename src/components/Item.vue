<template>
  <button class="item" @click="toogleActive" :class="{ active: active }">
    {{value}}
  </button>
</template>

<script>
export default {
  name: 'item',
  props: ['value', 'initActive'],
  data () {
    return {
      active: this.initActive
    }
  },
  methods: {
    toogleActive: function () {
      this.active ^= 1
      this.$emit('toogle', this.active, this.value)
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
  outline: none;
}

.item.active {
  background-color: #b7e3e4;
}
</style>