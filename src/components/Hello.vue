<template>
  <div class="hello">
    <h1>Nepohualtzintzin<br>
      <small>Ábaco Maya</small>
    </h1>
    <abacus :initCols="cols" @numberChange="changeNumber"></abacus>
    <h2 class="fl w-50">Vigesimal: {{ number | toUpperCase }}</h2>
    <h2 class="fl w-50">Decimal: {{ number | toBaseTen }}</h2>
  </div>
</template>

<script>
import Abacus from './Abacus'

export default {
  name: 'hello',
  components: {
    Abacus
  },
  data () {
    return {
      number: '0',
      cols: 10
    }
  },
  methods: {
    changeNumber: function (n) {
      this.number = n
    }
  },
  filters: {
    toUpperCase: function (str) {
      return str.toUpperCase()
    },
    toBaseTen: function (n) {
      return parseInt(n, 20).toString(10)
    }
  }
}
</script>

<style scoped>
.hello {
  text-align: center;
}

small {
  font-size: 11px;
  color: #42b983;
}
</style>
