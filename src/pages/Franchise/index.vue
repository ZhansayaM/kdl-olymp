<template>
  <div class="main">
    <FranchiseInfo />
  </div>
</template>

<script>
import FranchiseInfo from 'templates/FranchiseInfo/index.vue'

export default {
  name: 'Franchise',
  components: {
    FranchiseInfo,
  },
  head: {
    title: 'Франшиза',
  },
}
</script>
