<template>
  <div class="hello">
    <h1>Número representado: {{ number }}</h1>
    <abacus :initCols="cols" @numberChange="reload"></abacus>
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
      number: 0,
      cols: 10
    }
  },
  methods: {
    reload: function (n) {
      this.number = n
    }
  }
}
</script>

<style scoped>
.hello {
  text-align: center;
}

a {
  color: #42b983;
}
</style>
