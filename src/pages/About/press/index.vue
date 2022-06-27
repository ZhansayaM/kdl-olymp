<template>
  <Press />
</template>

<script lang="ts">
import Vue from 'vue'
import Press from 'organisms/Press/index.vue'

export default Vue.extend({
  name: 'AboutPressSlug',
  components: {
    Press,
  },
  head() {
    return {
      title: 'Пресса о нас',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Пресса о нас',
        },
      ],
    }
  },
})
</script>
