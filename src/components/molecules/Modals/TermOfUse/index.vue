<template>
  <!-- // ! Временная модалка для Пользовательского соглашения -->
  <ModalWrapper>
    <ModalContainer
      class="modal-message"
      :show="show"
      @click.once="
        (click) => {
          $emit('click')
        }
      "
    >
      <p class="modal-message__title">
        {{ terms[0].attributes.title }}
      </p>
      <div
        v-html="terms[0].attributes.description"
        class="modal-message__subtitle"
      ></div>
      <RFButton class="modal-message__btn" @click="$emit('click')">
        Принять условия
      </RFButton>
    </ModalContainer>
    <ModalMask :show="show" @click="$emit('click')" />
  </ModalWrapper>
</template>

<script>
import Vue from 'vue'
import ModalWrapper from 'atoms/Modal/ModalWrapper/index.vue'
import ModalContainer from 'atoms/Modal/ModalContainer/index.vue'
import ModalMask from 'atoms/Modal/ModalMask/index.vue'
import RFButton from 'atoms/RFButton/index.vue'

/**
 * Модальное окно добавление
 * @displayName ModalAdd
 */
export default Vue.extend({
  name: 'ModalTerm',
  components: {
    ModalWrapper,
    ModalMask,
    ModalContainer,
    RFButton,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showModal: true,
    }
  },
  computed: {
    terms() {
      return this.$store.getters['terms/getTerms']
    },
  },
})
</script>

<style lang="scss" scoped>
.modal-message {
  padding: 60px 105px 75px;
  @include flex-column();
  &__title {
    max-width: 450px;
    padding-bottom: 32px;
    @include font-size(48px, 60px, 700);

    @include tablet {
      @include font-size(30px, 32px, 700);
    }
  }
  &__subtitle {
    max-width: 614px;
    color: $c-black;
    padding-bottom: 50px;
    ::v-deep p {
      @include font-size(16px, 25.6px);
    }
  }
  &__btn {
    background: $c-button-active;
    box-shadow: 0 4px 8px rgba(38, 174, 243, 0.24);
    border-radius: 3px;
    align-self: flex-start;
    width: 260px;
    height: 48px;
    @include font-size(16px, 22px);
  }
}
</style>
