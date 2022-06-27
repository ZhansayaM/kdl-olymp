<template>
  <div>
    <Main />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Main from 'templates/WhereToTake/index.vue'

/**
 * PAGES/Main
 * @displayName WhereToTakeTests
 */
export default Vue.extend({
  name: 'WhereToTakeTests',
  components: {
    Main,
  },
  head: {
    title: 'Где сдать?',
  },
})
</script>
