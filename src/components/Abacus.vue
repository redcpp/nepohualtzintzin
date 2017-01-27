<template>
  <div class="abacus w-90">
    <div v-for="col in cols" class="stick w-10 top">
      <span v-for="row in topRows">
        <item :bar="top" :row="row" :col="col">5</item>
      </span>
    </div>
    <div v-for="col in cols" class="stick w-10 bottom">
      <span v-for="row in bottomRows">
        <item :bar="bottom" :row="row" :col="col">1</item>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Item from './Item'

export default {
  name: 'abacus',
  components: {
    Item
  },
  data () {
    return {
      top: 'top',
      bottom: 'bottom'
    }
  },
  computed: mapState({
    cols: state => state.cols,
    topRows: state => state.abacus.top.length,
    bottomRows: state => state.abacus.bottom.length
  })
}
</script>

<style scoped>
.abacus {
  margin: auto;
  border: 2px solid #39405E;
  border-radius: 3px;
  -webkit-box-shadow: 0px 5px 50px -15px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 5px 50px -15px rgba(0,0,0,0.75);
  box-shadow: 0px 5px 50px -15px rgba(0,0,0,0.75);
}

.stick {
  display: inline-block;
  border: 1px solid #39405E;
  padding-top: 33px;
  padding-bottom: 25px;
}

.stick.top:nth-child(3n+1) {
  box-shadow:inset -5px 0px 0px 0px #39405E;
}

.stick.bottom:nth-child(3n-1) {
  box-shadow:inset -5px 0px 0px 0px #39405E;
}

.stick.top:nth-child(10) {
  box-shadow: none;
}

.stick.bottom:nth-child(20) {
  box-shadow: none;
}

</style>