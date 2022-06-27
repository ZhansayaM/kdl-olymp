<template>
  <PersonalCabinet />
</template>

<script lang="ts">
import Vue from 'vue'
import PersonalCabinet from 'templates/PersonalCabinet/Patient/index.vue'

export default Vue.extend({
  name: 'PatientResultsPage',
  components: {
    PersonalCabinet,
  },
  head() {
    return {
      title: 'Ваши результаты анализов',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Ваши результаты анализов',
        },
      ],
    }
  },
})
</script>
