<template>
  <!-- // ! Временная модалка для Пользовательского соглашения -->
  <Modal :show="show" @close="closeModal">
    <div slot="content" class="modal-message">
      <div
        class="modal-message__subtitle text-normalize"
        v-html="terms[1].attributes.description"
      ></div>
      <RFCheckbox id="agreement-checkbox" v-model="agreement">
        {{ terms[1].attributes.agreement }}
      </RFCheckbox>
      <RFButton
        class="modal-message__btn"
        :disabled="!agreement"
        @click="handleClick"
      >
        Заполнить анкету
      </RFButton>
    </div>
  </Modal>
</template>

<script>
import Vue from 'vue'
import Modal from 'molecules/Modal/index.vue'
import RFButton from 'atoms/RFButton/index.vue'
import RFCheckbox from 'atoms/RFCheckbox/index.vue'

/**
 * Модальное окно добавление
 * @displayName CovidTestTermsModal
 */
export default Vue.extend({
  name: 'CovidTestTermsModal',
  components: {
    Modal,
    RFButton,
    RFCheckbox,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      agreement: false,
      showModal: true,
    }
  },
  computed: {
    terms() {
      return this.$store.getters['terms/getTerms']
    },
  },
  watch: {
    agreement(val) {
      this.$store.commit('covid/setAcceptTerms', val)
    },
  },
  methods: {
    handleClick() {
      const accepted = this.$store.getters['covid/getAllAccepted']
      if (accepted) this.$router.push({ name: 'covid-19-questionnaire' })

      this.closeModal()
    },
    closeModal() {
      this.$store.dispatch('modals/closeModals')
    },
  },
})
</script>

<style lang="scss" scoped>
.modal-message {
  margin: 55px 46px 47px;
  overflow-y: auto;
  overflow-x: hidden;
  @include medium-tablet {
    margin: 0;
  }

  &__subtitle {
    ::v-deep {
      * {
        color: $c-dark;
      }
      p {
        margin-bottom: 20px;
        @include phone {
          margin-bottom: 28px;
        }
        span {
          font-weight: 600;
          @include phone {
            font-weight: 400;
          }
        }
      }
      h6 {
        margin-bottom: 20px;
        @include font-size(16px, 24px);
        @include phone {
          margin-bottom: 12px;
          @include font-size(18px, 26px);
        }
      }
      h5 {
        margin-bottom: 20px;
        @include font-size(16px, 24px);
        @include phone {
          margin: 28px 0 12px;
          @include font-size(22px, 27px);
        }
      }
      div {
        padding-top: 10px;
        @include phone {
          padding: 0;
        }
      }
      div:last-child {
        > p {
          @include phone {
            margin-bottom: 10px;
          }
        }
      }
      ul:first-child li:first-child {
        margin-top: -16px;
      }
      ul:last-child li:last-child {
        margin-bottom: 28px;
      }
    }
  }
  &__btn {
    align-self: flex-start;
    width: 370px;
    height: 55px;
    margin-top: 46px;
    border-radius: 4px;
    @include font-size(20px, 28px);
    @include phone {
      margin-top: 36px;
      width: 100%;
      height: 50px;
      @include font-size(16px, 22px);
    }
  }
  .rf-checkbox {
    align-items: flex-start;
    padding-top: 50px;
    @include phone {
      padding-top: 16px;
      @include font-size(14px, 20px);
    }
  }
}
</style>
