<template>
  <PersonalCabinet />
</template>

<script lang="ts">
import Vue from 'vue'
import PersonalCabinet from 'templates/PersonalCabinet/Patient/index.vue'

export default Vue.extend({
  name: 'PatientDiscountPage',
  components: {
    PersonalCabinet,
  },
  head() {
    return {
      title: 'Ваша дисконтная карта',
    }
  },
})
</script>
