<template>
  <div class="patient-settings">
    <div class="patient-settings__form">
      <div
        v-for="(item, index) in inputs"
        :key="index"
        :class="`patient-settings__grid-item-${item.id}`"
      >
        <RFCheckbox
          v-if="item.type === 'checkbox'"
          :id="item.id"
          :value="false"
        >
          {{ item.label }}
        </RFCheckbox>
        <RFInput
          v-else
          :id="item.id"
          :v-model="item.val"
          :type="item.type"
          :is-error="item.showError"
          @change="checkField(item, $event)"
        >
          <template #label>
            {{ item.label }}
          </template>
          <template #message>
            {{ item.errorMessage }}
          </template>
        </RFInput>
      </div>
      <button class="patient-settings__grid-item-9">Сохранить</button>
    </div>
    <div class="patient-settings__card">
      <RFText variant="medium" class="patient-settings__card__text"
        >Пользовательское соглашение принято и подписано вами {{ date }}</RFText
      >
      <button>Посмотреть</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RFInput from 'atoms/RFInput/index.vue'
import RFText from 'atoms/RFText/index.vue'
import RFCheckbox from 'atoms/RFCheckbox/index.vue'
import EmailValidator from 'services/common/EmailValidator'

export default Vue.extend({
  name: 'PatientSettings',
  components: { RFInput, RFCheckbox, RFText },
  props: {
    date: {
      type: String,
      default: '23 февраля 2018',
    },
  },
  data() {
    return {
      inputs: [
        {
          id: '1',
          label: 'Адрес',
          type: 'text',
          errorMessage: 'Введите адрес',
          showError: false,
          val: '',
        },
        {
          id: '2',
          label: 'Номер телефона',
          type: 'number',
          errorMessage: 'Введите номер телефона',
          showError: false,
          val: '',
        },
        {
          id: '3',
          label: 'Эл. почта',
          type: 'email',
          errorMessage: 'Введите правильную электронную почту',
          showError: false,
          val: '',
        },
        {
          id: '4',
          label: 'Дополнительный номер телефона',
          type: 'number',
          errorMessage: 'Введите дополнительный номер телефона',
          showError: false,
          val: '',
        },
        {
          id: '5',
          label: 'Подписка на Email-рассылку',
          type: 'checkbox',
        },
        {
          id: '6',
          label: 'Подписка на SMS-рассылку',
          type: 'checkbox',
        },
        {
          id: '7',
          label: 'Новый пароль',
          type: 'password',
          errorMessage: 'Введите пароль',
          showError: false,
          val: '',
        },
        {
          id: '8',
          label: 'Новый пароль повторно',
          type: 'password',
          errorMessage: 'Повторите пароль',
          showError: false,
          val: '',
        },
      ],
    }
  },
  methods: {
    handleSubmit() {
      console.log('submit')
    },
    checkEmail(element) {
      const validEmail = new EmailValidator()
      return validEmail.emailValidator(element)
    },
    checkField(element, val) {
      element.val = val
      if (
        !element.val ||
        (element.type === 'email' && !this.checkEmail(element.val)) ||
        (element.id === 8 && element.val !== this.inputs[6].val)
      )
        element.showError = true
      else element.showError = false
    },
  },
})
</script>

<style lang="scss" scoped>
.patient-settings {
  margin: 0 auto;
  max-width: 1440px;
  padding: 50px 50px 100px;
  gap: 40px;
  justify-content: space-between;
  @include flex-row();
  @include small-laptop {
    padding: 30px 30px 80px;
  }
  @include medium-tablet {
    flex-direction: column-reverse;
  }
  @include phone {
    padding: 20px 16px 60px;
    gap: 30px;
  }
  &__grid-item {
    &-1 {
      @include phone {
        order: 1;
      }
    }
    &-2 {
      @include phone {
        order: 2;
      }
    }
    &-3 {
      @include phone {
        order: 5;
      }
    }
    &-4 {
      @include phone {
        order: 3;
      }
    }
    &-5 {
      @include phone {
        order: 6;
      }
    }
    &-6 {
      @include phone {
        order: 4;
      }
    }
    &-7 {
      @include phone {
        order: 7;
      }
    }
    &-8 {
      @include phone {
        order: 8;
      }
    }
    &-9 {
      @include phone {
        order: 9;
      }
    }
  }
  &__form {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    @include phone {
      grid-template-columns: 1fr;
      grid-gap: 20px;
    }
    button {
      margin-top: 46px;
      color: $c-white;
      padding: 12.5px;
      background: $c-primary;
      border: none;
      cursor: pointer;
      border-radius: 4px;
      @include font-size(20px, 28px);
      @include medium-tablet {
        margin-top: 30px;
        @include font-size(16px, 20px);
      }
      @include phone {
        margin-top: 15px;
        padding: 14px;
      }
    }
  }
  &__card {
    background: $c-light-blue;
    border-radius: 8px;
    max-width: 26rem; //416px
    padding: 30px;
    height: fit-content;
    @include medium-tablet {
      max-width: 21.5rem;
    }
    @include phone {
      padding: 28px 16px;
      max-width: 100%;
      width: 100%;
    }
    &__text {
      @include small-phone {
        @include font-size(16px, 22px);
      }
    }
    button {
      padding: 6.5px 12px 7.5px 12px;
      color: $c-primary;
      margin-top: 60px;
      border: 1px solid $c-primary;
      box-sizing: border-box;
      border-radius: 4px;
      background: none;
      cursor: pointer;
      @include font-size(16px, 24px);
      @include phone {
        margin-top: 16px;
        border: none;
        padding: 0;
        text-decoration: underline;
      }
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
