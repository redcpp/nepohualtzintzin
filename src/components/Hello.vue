<template>
  <div class="hello">
    <h1>Current value: {{ number }}</h1>
    <div class="abacus w-90">
      <div v-for="stick in data.top" class="stick w-10">
        <span v-for="item in stick" class="coin">
          {{item.value}}
        </span >
      </div>
      <hr>
      <div v-for="stick in data.bottom" class="stick w-10">
        <span v-for="item in stick" class="coin">
          {{item.value}}
        </span >
      </div>
    </div>
  </div>
</template>

<script>
const COLS = 10
export default {
  name: 'hello',
  data () {
    return {
      number: 0,
      data: {
        top: Array(COLS).fill(Array(3).fill({value: 5, active: 0})),
        bottom: Array(COLS).fill(Array(4).fill({value: 1, active: 0}))
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app {
  text-align: center;
}

.abacus {
  margin: auto;
  border: 2px solid #aaa;
}

.stick {
  display: inline-block;
  background-color: #f9f7e8;
  border: 1px solid rgba(0,0,0,.3);
}

.coin {
  cursor: pointer;
  display: block;
  padding: 15px;
  margin: 5px;
}

.coin.active {
  background-color: #b7e3e4;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
