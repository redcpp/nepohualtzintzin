<template>
  <div class="abacus w-90">
    <div v-for="col in cols" class="stick w-10">
      <span v-for="row in topRows">
        <item :value="5" :initActive="0" @toogle="sumChange" :col="col"></item>
      </span>
    </div>
    <div v-for="col in cols" class="stick w-10">
      <span v-for="row in bottomRows">
        <item :value="1" :initActive="0" @toogle="sumChange" :col="col"></item>
      </span>
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
      cols: this.initCols,
      topRows: 3,
      bottomRows: 4,
      values: Array(this.initCols + 1).fill(0)
    }
  },
  methods: {
    sumChange: function (col, active, value) {
      let inc = active ? value : -value
      this.values[col] += inc
      this.$emit('numberChange', this.currentNumber())
    },
    currentNumber: function () {
      let current = this.values.reduce(this.concatWithFormat, 0)
      return this.removeLeadingZeros(current)
    },
    concatWithFormat: function (a, b) {
      return this.giveFormat(a) + this.giveFormat(b)
    },
    removeLeadingZeros: function (n) {
      return this.giveFormat(parseInt(n, 20))
    },
    giveFormat: function (n) {
      return n.toString(20)
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
  border: 1px solid rgba(0,0,0,.3);
}
</style>