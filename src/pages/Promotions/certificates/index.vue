<template>
  <CertificatesContent />
</template>

<script lang="ts">
import Vue from 'vue'
import CertificatesContent from 'organisms/CertificatesContent/index.vue'
export default Vue.extend({
  name: 'Certificates',
  components: {
    CertificatesContent,
  },
  async asyncData({ store }) {
    await store.dispatch('certificate/fetchCertificate')
  },
  head() {
    return {
      title: 'Сертификаты',
    }
  },
})
</script>
