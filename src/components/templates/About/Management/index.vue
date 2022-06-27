<template>
  <div class="about-company__info">
    <ManagementSlider :items="managers" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ManagementSlider from 'organisms/Slider/ManagementSlider/index.vue'

export default Vue.extend({
  name: 'AboutManagementTemplate',
  components: {
    ManagementSlider,
  },
  computed: {
    managers() {
      return this.$store.getters['leadership/getAllLeadership']
    },
  },
})
</script>

<style lang="scss" scoped>
.about-company__info {
  padding: 60px 50px 100px;
  @include tablet {
    padding: 40px 20px 80px;
  }
  @include phone {
    padding: 28px 16px 60px;
  }
}
</style>
