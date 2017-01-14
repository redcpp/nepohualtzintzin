<template>
  <div class="abacus w-90">
    <div v-for="col in cols" class="stick w-10">
      <span v-for="row in topRows">
        <item :value="5" :initActive="0" @toogle="sum"></item>
      </span >
    </div>
    <hr>
     <div v-for="col in cols" class="stick w-10">
      <span v-for="row in bottomRows">
        <item :value="1" :initActive="0" @toogle="sum"></item>
      </span >
    </div>
  </div>
</template>

<script>
import Item from './Item'

export default {
  name: 'abacus',
  props: ['initCols'],
  components: {
    Item
  },
  data () {
    return {
      number: 0,
      cols: this.initCols,
      topRows: 3,
      bottomRows: 4
    }
  },
  methods: {
    sum: function (active, value) {
      let inc = active ? value : -value
      this.number += inc
      this.$emit('numberChange', this.number)
    }
  }
}
</script>

<style scoped>
.abacus {
  margin: auto;
  border: 2px solid #aaa;
}

.stick {
  display: inline-block;
  background-color: #f9f7e8;
  border: 1px solid rgba(0,0,0,.3);
}
</style>