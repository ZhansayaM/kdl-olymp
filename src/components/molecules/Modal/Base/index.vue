<template>
  <ModalWrapper>
    <ModalContainer
      class="modal-message"
      :show="showPromoModal"
      :name="'close-light-gray'"
      @click.once="
        (click) => {
          $emit('close')
        }
      "
    >
      <slot></slot>
    </ModalContainer>
    <ModalMask
      :show="showPromoModal"
      @click.once="
        (click) => {
          $emit('close')
        }
      "
    />
  </ModalWrapper>
</template>

<script lang="ts">
import Vue from 'vue'
import ModalWrapper from 'atoms/Modal/ModalWrapper/index.vue'
import ModalContainer from 'atoms/Modal/ModalContainer/index.vue'
import ModalMask from 'atoms/Modal/ModalMask/index.vue'
import { mapState } from 'vuex'

/**
 * Модальное окно база
 * @displayName ModalBase
 */
export default Vue.extend({
  name: 'ModalBase',
  components: {
    ModalWrapper,
    ModalMask,
    ModalContainer,
  },
  computed: {
    ...mapState({
      showPromoModal: (state: any) => state.modals.modal_promo.open,
      showModalCovidTerms: (state: any) => state.modals.modal_covid_terms.open,
    }),
  },
})
</script>

<style lang="scss" scoped>
.modal-message {
  padding: 30px 42px;
  min-height: 288px;
  @include flex-column();

  @include phone {
    padding: 30px 16px;
  }
}

// cтили для иконки закрытия модалки
// TODO: перенести их в atoms/modalContainer после того, как все модалки будут переведены на эту базу

::v-deep .modal-container__close {
  top: 0;
  right: -58px;
  width: 40px;
  z-index: 10;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);

  @include phone {
    top: -48px;
    right: 0;
  }

  &-svg {
    z-index: 20;
    width: 14px;
    height: 14px;
    top: 32%;
    right: 32%;
    position: absolute;
  }
}
</style>
