<template>
  <div class="abacus w-90">
    <div v-for="col in cols" class="stick w-10">
      <span v-for="row in topRows">
        <item :bar="top" :row="row" :col="col">5</item>
      </span>
    </div>
    <div v-for="col in cols" class="stick w-10">
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
  border: 2px solid #aaa;
}

.stick {
  display: inline-block;
  border: 1px solid rgba(0,0,0,.3);
}
</style>