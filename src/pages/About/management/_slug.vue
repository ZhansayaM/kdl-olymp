<template>
  <div class="main">
    <ButtonBack />
    <ManagementInfo />
  </div>
</template>

<script>
import ButtonBack from 'atoms/Button/ButtonBack/index.vue'
import ManagementInfo from 'molecules/ManagementInfo/index.vue'

export default {
  name: 'AboutManagerSlug',
  components: {
    ButtonBack,
    ManagementInfo,
  },
  async asyncData({ store, route }) {
    await store.dispatch('leadership/fetchLeadership', route.params.slug)
  },
  head: 'Руководство',
}
</script>

<style lang="scss" scoped>
.main {
  padding: 50px 50px 80px;
  max-width: 1440px;
  margin: 0 auto;
  @include tablet {
    padding: 21px 16px 38px;
  }
}
</style>
