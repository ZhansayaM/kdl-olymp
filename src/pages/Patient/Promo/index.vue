<template>
  <PersonalCabinet />
</template>

<script lang="ts">
import Vue from 'vue'
import PersonalCabinet from 'templates/PersonalCabinet/Patient/index.vue'

export default Vue.extend({
  name: 'PatientPromoPage',
  components: {
    PersonalCabinet,
  },
  head() {
    return {
      title: 'Ваши промо-коды',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Ваши промо-коды',
        },
      ],
    }
  },
})
</script>
