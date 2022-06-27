<template>
  <PersonalCabinet />
</template>

<script lang="ts">
import Vue from 'vue'
import PersonalCabinet from 'templates/PersonalCabinet/Patient/index.vue'

export default Vue.extend({
  name: 'PatientSettingsPage',
  components: {
    PersonalCabinet,
  },
  head() {
    return {
      title: 'Настройки личного кабинета',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Настройки личного кабинета',
        },
      ],
    }
  },
})
</script>
