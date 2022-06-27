<template>
  <div class="main">
    <ButtonBack />
    <EquipmentInfo />
  </div>
</template>

<script>
import ButtonBack from 'atoms/Button/ButtonBack/index.vue'
import EquipmentInfo from 'molecules/EquipmentInfo/index.vue'

export default {
  name: 'AboutEquipmentSlug',
  components: {
    ButtonBack,
    EquipmentInfo,
  },
  async asyncData({ store, route }) {
    await store.dispatch('equipment/fetchEquipment', route.params.slug)
  },
  head: {
    title: 'Оборудования',
  },
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
