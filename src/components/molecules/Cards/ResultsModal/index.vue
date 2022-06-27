<template>
  <div class="modal">
    <div class="modal__wrap">
      <RFHeading tag="h3">{{ title }}</RFHeading>
      <RFInput :id="1" :type="'email'" class="modal__wrap__input"> </RFInput>
      <Button class="modal__wrap__send"> {{ send }} </Button>
      <Button class="modal__wrap__cancel" @click="$emit('close')">
        {{ cancel }}
      </Button>
      <Button class="modal__wrap__close" @click="$emit('close')">
        <svg-icon name="close-light-gray"></svg-icon>
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import RFInput from 'atoms/RFInput/index.vue'

/**
 * 'PAGES/Main'
 * @displayName ResultsModal
 */
export default Vue.extend({
  name: 'ResultsModal',
  components: { RFInput, RFHeading },
  data() {
    return {
      show: false,
      title: 'Укажите email, на который будут отправлены результаты анализов',
      send: 'Отправить',
      cancel: 'Отмена',
    }
  },
})
</script>

<style lang="scss" scoped>
.modal {
  background: $c-dark-gray;
  width: 100%;
  height: 100%;
  z-index: 11;
  position: fixed;
  left: 0;
  top: 0;
  &__wrap {
    z-index: 12;
    width: 37.5rem;
    background: $c-white;
    border-radius: 10px;
    position: fixed;
    align-items: center;
    padding: 79px 67px 48px 67px;
    left: calc(50% - 18.75rem);
    top: calc(50% - 13.2rem);
    @include flex-column();
    @include tablet {
      width: 28rem;
      left: calc(50% - 14rem);
    }
    @include phone {
      width: 22rem;
      left: calc(50% - 11rem);
      padding: 30px;
    }
    h3.rf-heading {
      margin-bottom: 30px;
      text-align: center;
      @include font-size(20px, 28px);
      @include phone {
        @include font-size(18px, 24px);
      }
    }
    .rf-input {
      width: 25rem;
      @include phone {
        width: 100%;
      }
    }
    &__close {
      border-radius: 50%;
      position: absolute;
      top: 0;
      right: -3rem;
      cursor: pointer;
      border: none;
      width: 40px;
      height: 40px;
      background: $c-darker-gray;
      justify-content: center;
      align-items: center;
      @include flex-row();
      svg {
        width: 14px;
        height: fit-content;
      }
      @include phone {
        right: -4rem;
      }
      @include small-phone {
        top: -4rem;
        right: -1rem;
      }
    }
    &__send {
      margin: 28px 0 48px 0;
      padding: 10px 0;
      color: $c-white;
      background: $c-primary;
      border-radius: 4px;
      border: none;
      display: block;
      width: 25rem;
      cursor: pointer;
      @include font-size(20px, 28px);
      @include phone {
        width: 100%;
        margin-bottom: 28px;
        @include font-size(18px, 24px);
      }
    }
    &__cancel {
      display: block;
      text-decoration: underline;
      border: none;
      background: none;
      color: $c-primary;
      cursor: pointer;
      @include font-size(16px, 23px);
    }
  }
}
</style>
