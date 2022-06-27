<template>
  <PersonalCabinet />
</template>

<script lang="ts">
import Vue from 'vue'
import PersonalCabinet from 'templates/PersonalCabinet/Patient/index.vue'

export default Vue.extend({
  name: 'Patient',
  components: {
    PersonalCabinet,
  },
  head() {
    return {
      title: 'Личный кабинет',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Личный кабинет',
        },
      ],
    }
  },
})
</script>
