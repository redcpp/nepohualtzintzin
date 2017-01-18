<template>
  <div class="hello">
    <h1>Nepohualtzintzin<br>
      <small>Ábaco Maya</small>
    </h1>
    <abacus></abacus>
    <h2 class="fl w-50">Vigesimal: {{ value | toBaseTwenty }}</h2>
    <h2 class="fl w-50">Decimal: {{ value }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Abacus from './Abacus'

export default {
  name: 'hello',
  components: {
    Abacus
  },
  computed: mapState({
    value (state) {
      return state.abacus.value
    }
  }),
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
