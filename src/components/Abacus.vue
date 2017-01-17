<template>
  <div class="abacus w-90">
    <div v-for="col in cols" class="stick w-10">
      <span v-for="row in topRows">
        <item :value="5" :col="col"></item>
      </span>
    </div>
    <div v-for="col in cols" class="stick w-10">
      <span v-for="row in bottomRows">
        <item :value="1" :col="col"></item>
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
      topRows: 3,
      bottomRows: 4
    }
  },
  computed: mapState({
    number: state => state.number,
    cols: state => state.cols
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