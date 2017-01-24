<template>
  <div class="hello">
    <h1>Nepohualtzintzin<br>
      <small>Ábaco Maya</small>
    </h1>
    <abacus></abacus>
    <div class="mt3">
      <h2 class="fl w-50">Vigesimal: {{ value | toBaseTwenty }}</h2>
      <h2 class="fl w-50">
        Decimal:
        <input type="text"
              :value="value"
              @input="setNumber($event.target.value)">
      </h2>
    </div>
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
  font-size: 14px;
  color: #DA0A5B;
}

input {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  color: #131A32;
  
  border: none;
  outline: none;
  width: 200px;
  border-bottom: 1px solid #DA0A5B;
}
</style>
