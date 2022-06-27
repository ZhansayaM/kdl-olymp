<template>
  <div>
    <ModalPromo v-if="showPromoModal" />
    <CovidTestTermsModal
      v-if="showCovidTermsModal"
      :show="showCovidTermsModal"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import ModalPromo from 'organisms/Modals/Promo/index.vue'
import CovidTestTermsModal from 'organisms/Modals/CovidTestTerms/index.vue'

/**
 * Модальные окна
 * @displayName Modals
 */
export default Vue.extend({
  name: 'Modals',
  components: {
    ModalPromo,
    CovidTestTermsModal,
  },
  computed: {
    ...mapState({
      showPromoModal: (state: any) => state.modals.modal_promo.open,
      showCovidTermsModal: (state: any) => state.modals.modal_covid_terms.open,
    }),
  },
})
</script>
