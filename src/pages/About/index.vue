<template>
  <AboutTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import AboutTemplate from 'templates/About/index.vue'

export default Vue.extend({
  name: 'AboutPage',
  components: {
    AboutTemplate,
  },
  async asyncData({ store }) {
    await store.dispatch('news/fetchAllNews')
    await store.dispatch('about/fetchAbout')
    await store.dispatch('partners/fetchPartners')
    await store.dispatch('pages/fetchAllPages')
    await store.dispatch('equipment/fetchAllEquipment')
    await store.dispatch('licence/fetchLicence')
    await store.dispatch('leadership/fetchAllLeadership')
    await store.dispatch('responsibility/fetchResponsibility')
  },
  head() {
    return {
      title: 'О нас',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'О нас',
        },
      ],
    }
  },
})
</script>
