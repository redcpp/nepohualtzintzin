<template>
  <div class="hello">
    <h1>
      Nepohualtzintzin<br>
      <small>Ábaco Maya por Diego Said Anaya Mancilla</small>
    </h1>
    <abacus :initCols="cols" @numberChange="changeNumber"></abacus>
    <h2 class="fl w-50">Vigecimal: {{ number | toUpperCase }}</h2>
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
  font-size: 10px;
  color: #42b983;
}
</style>
