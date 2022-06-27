<template>
  <div class="login">
    <section class="login-wrapper">
      <div class="login-top-button">
        <Button
          v-for="item in items"
          :key="item.id"
          :class="[
            `login-top-button__btn-${item.id}`,
            { 'btn-disabled': activeBtn !== item.id },
          ]"
          @click="toggleBtn(item.id)"
          >{{ item.title }}</Button
        >
      </div>
      <section class="login-title">
        <RFHeading tag="h2" class="login__title">
          {{ checkId ? 'Войти в личный кабинет' : 'Регистрация' }}
        </RFHeading>
        <RFText v-if="!checkId" class="login__subtitle">
          Регистрация доступна только владельцам
          <a
            href="#"
            title="Ссылка на дисконтную карту"
            class="login__subtitle-link"
            >дисконтной карты</a
          >
        </RFText>
      </section>
      <DataInput
        v-if="checkId"
        id="login"
        v-model="login"
        class="login__field-login"
        :value="login"
        placeholder=""
        type="text"
        title="Логин"
        error="Это поле обязательно к заполнению"
      >
      </DataInput>
      <DataInput
        v-else
        id="login"
        v-model="card"
        is-mask="### ### ### ### ###"
        class="login__field-login"
        :value="card"
        placeholder=""
        type="tel"
        title="Номер дисконтной карты"
        error="Это поле обязательно к заполнению"
      >
      </DataInput>
      <DataInput
        id="password"
        v-model="password"
        class="login__field-pass"
        :value="password"
        placeholder=""
        type="password"
        title="Пароль"
        error="Это поле обязательно к заполнению"
      >
      </DataInput>
      <Button class="login__post-button" @click="enter">{{
        checkId ? 'Войти' : 'Зарегистрироваться'
      }}</Button>
      <a
        v-if="checkId"
        href="#"
        class="login__reset-password"
        title="Ссылка на востановление пароля"
        >Восстановить пароль</a
      >
    </section>
    <ModalTerm
      v-if="show"
      :show="show"
      @click.once="
        (click) => {
          show = !show
        }
      "
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import RFText from 'atoms/RFText/index.vue'
import Button from 'atoms/Button/index.vue'
import DataInput from 'atoms/RFInput/DataInput/index.vue'
import ModalTerm from 'molecules/Modals/TermOfUse/index.vue'

export default Vue.extend({
  name: 'LoginTemplate',
  components: {
    RFHeading,
    RFText,
    Button,
    DataInput,
    ModalTerm,
  },
  props: {
    items: {
      type: Array,
      default: () => [
        {
          title: 'Вход',
          id: 1,
        },
        {
          title: 'Регистрация',
          id: 2,
        },
      ],
    },
    /**
     * Показать тогл кнопки
     */
    isButton: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isActive: true,
      activeBtn: 1,
      login: '',
      password: '',
      card: '',
      show: false,
    }
  },
  computed: {
    checkId(): boolean {
      if (this.activeBtn === 1) {
        return true
      }
      return false
    },
  },
  methods: {
    enter() {
      if (this.checkId) {
        this.$router.push('/patient')
        this.$store.commit('tabs/changeTabsActive', '')
      } else this.showModal()
    },
    toggleBtn(el) {
      this.activeBtn = el
      this.clearFields()
    },
    clearFields() {
      this.login = ''
      this.password = ''
      this.card = ''
    },
    showModal() {
      this.show = !this.show
    },
  },
})
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  background-color: $c-primary-bgcolor;
  &-wrapper {
    margin: 0 auto;
    padding: 64px 0;
    max-width: 1340px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: $c-white;
    align-items: center;
    @include flex-column();

    @include wide-tablet {
      justify-content: center;
    }
    @include phone {
      padding: 28px 16px;
    }
  }

  &-top-button {
    padding-bottom: 54px;
    @include flex-row();

    &__btn {
      margin-left: 20px;
      background-color: $c-button-active;
      color: $c-white;

      &-1 {
        border-radius: 5px 0 0 5px;
      }

      &-2 {
        border-radius: 0 5px 5px 0;
      }

      &-1,
      &-2 {
        box-sizing: border-box;
        width: 200px;
        height: 52px;
        @include font-size(16px, 22px);
        @include phone {
          width: 150px;
        }
      }
    }
  }

  &-title {
    min-height: 132px;
  }

  &__title {
    margin: 0 !important;
    max-width: 300px;
    @include font-size(36px !important, 46px !important, 700 !important);
  }

  &__subtitle {
    padding: 28px 0;
    width: 340px;
    color: #6d7b82;
    @include font-size(16px, 24px);

    @include phone {
      max-width: 300px;
      width: 100%;
    }

    &-link {
      text-decoration: none;
      color: $c-button-active;
    }
  }

  &__field {
    &-login {
      margin-bottom: 20px;
      max-width: 400px;
      width: 100%;
    }
    &-pass {
      margin-bottom: 46px;
      max-width: 400px;
      width: 100%;
    }
  }

  &__post-button {
    max-width: 400px;
    width: 100%;
    height: 52px;
    color: $c-white;
    margin-bottom: 34px;
  }
}

.btn-disabled {
  background-color: $c-white;
  color: $c-button-active;
  border: 1px solid $c-button-active;

  &:hover {
    background-color: $c-white;
  }
}

// * Стили для инпутов

::v-deep .data-input {
  > p {
    color: $c-disabled-input-text;
    padding-bottom: 5px;
    @include font-size(16px, 22px);
  }
  > input {
    width: 100%;

    // * Скрываем стрелки у инпутом с типом number

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
}
</style>
