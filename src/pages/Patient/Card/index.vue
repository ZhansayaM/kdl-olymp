<template>
  <PersonalCabinet />
</template>

<script lang="ts">
import Vue from 'vue'
import PersonalCabinet from 'templates/PersonalCabinet/Patient/index.vue'

export default Vue.extend({
  name: 'PatientCardDiscountPage',
  components: {
    PersonalCabinet,
  },
  head() {
    return {
      title: 'Дисконтная карта',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Дисконтная карта',
        },
      ],
    }
  },
})
</script>
