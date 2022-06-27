<template>
  <PatientPromoSlugTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import PatientPromoSlugTemplate from 'templates/PersonalCabinet/Patient/_promoSlug.vue'

export default Vue.extend({
  name: 'PatientPromoSlugPage',
  components: {
    PatientPromoSlugTemplate,
  },
  head() {
    return {
      // TODO: Заменить title + content при подключении апи на title промокода
      title: 'Выбранный промокод',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Выбранный промокод',
        },
      ],
    }
  },
})
</script>
