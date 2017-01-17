<template>
  <div class="hello">
    <h1>Nepohualtzintzin<br>
      <small>Ábaco Maya</small>
    </h1>
    <abacus></abacus>
    <h2 class="fl w-50">Vigesimal: {{ number | toBaseTwenty }}</h2>
    <h2 class="fl w-50">Decimal: {{ number }}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Abacus from './Abacus'

export default {
  name: 'hello',
  components: {
    Abacus
  },
  computed: {
    ...mapGetters([
      'number'
    ])
  },
  filters: {
    toBaseTwenty (n) {
      return n.toString(20).toUpperCase()
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
