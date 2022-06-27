<template>
  <ModalWrapper>
    <ModalContainer class="modal-message" :show="show">
      <p
        :class="[
          'modal-message__title',
          { checkMessage: 'modal-message__title-error' },
        ]"
      >
        {{ terms[0].attributes.title }}
      </p>
      <div
        v-html="terms[0].attributes.description"
        class="modal-message__subtitle"
      ></div>
      <!-- -->
      <RFButton class="modal-message__btn" @click="closeModal">
        Принять условия
      </RFButton>
    </ModalContainer>
    <ModalMask :show="show" @click="closeModal" />
  </ModalWrapper>
</template>

<script lang="ts">
import Vue from 'vue'
// import { mapState } from 'vuex'

import ModalWrapper from 'atoms/Modal/ModalWrapper/index.vue'
import ModalContainer from 'atoms/Modal/ModalContainer/index.vue'
import ModalMask from 'atoms/Modal/ModalMask/index.vue'
import RFButton from 'atoms/RFButton/index.vue'

/**
 * Модальное окно добавление
 * @displayName ModalAdd
 */
export default Vue.extend({
  name: 'ModalAdd',
  components: {
    ModalWrapper,
    ModalMask,
    ModalContainer,
    RFButton,
  },
  data() {
    return {
      show: false,
    }
  },
  // computed: {
  //   ...mapState({
  //     show: (state: any) => state.modals.modal_message.open,
  //     message: (state: any) => state.modals.modal_message.message,
  //   }),
  // },
  computed: {
    terms() {
      return this.$store.getters['terms/getTerms']
    },
  },
  methods: {
    closeModal() {
      this.$store.dispatch('modals/closeModals')
    },
  },
})
</script>

<style lang="scss" scoped>
.modal-message {
  justify-content: center;
  align-items: center;
  min-height: 288px;
  @include flex-column();

  &__title {
    max-width: 400px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    color: #000;
    margin: 10px 0 12px 0;
    @include font-size(24px, 31px, 700);
    &-error {
      @include font-size(32px, 36px, 700);
    }
  }
  &__subtitle {
    max-width: 300px;
    text-align: center;
    margin-bottom: 24px;
    ::v-deep p {
      color: $c-black;
      @include font-size(20px, 24px);
    }
  }
  &__btn {
    @include small-phone {
      min-width: 100%;
    }
  }
}
</style>
