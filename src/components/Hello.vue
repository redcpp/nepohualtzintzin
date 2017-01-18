<template>
  <div class="hello">
    <h1>Nepohualtzintzin<br>
      <small>Ábaco Maya</small>
    </h1>
    <abacus></abacus>
    <h2 class="fl w-50">Vigesimal: {{ value | toBaseTwenty }}</h2>
    <h2 class="fl w-50">
      Decimal:
      <input type="text"
            :value="value"
            @input="setNumber($event.target.value)">
    </h2>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
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
  },
  methods: {
    setNumber (number) {
      this.setAbacusNumber({
        number: number
      })
    },
    ...mapMutations([
      'setAbacusNumber'
    ])
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

input {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  color: #2c3e50;
  
  border: none;
  outline: none;
  width: 200px;
  border-bottom: 1px solid #2c3e50;
}
</style>
