<template>
  <form @submit.prevent="handleSubmit">
    <RFHeading tag="h2"> Получить дисконтную карту </RFHeading>
    <RFText variant="mid">
      После регистрации своих данных вы сможете получить дисконтную карту в
      любом процедурном кабинете сети КДЛ «ОЛИМП».
    </RFText>
    <nuxt-link to="/">
      Я уже заполнял анкету и хочу внести в неё изменения
    </nuxt-link>
    <section>
      <RFInput id="iin_input" v-model="iin" :required="true">
        <template slot="label">ИИН</template>
      </RFInput>
      <RFInput id="id_num_input" v-model="idNum" :required="true">
        <template slot="label">Номер удостоверения личности</template>
      </RFInput>
      <RFInput id="name_input" v-model="name" :required="true">
        <template slot="label">Имя</template>
      </RFInput>
      <RFInput id="surname_input" v-model="surname" :required="true">
        <template slot="label">Фамилия</template>
      </RFInput>
      <RFInput id="middlename_input" v-model="middlename" :required="false">
        <template slot="label">Отчество (при наличии)</template>
      </RFInput>
      <RFDatepicker id="birthDate_input" v-model="birthDate" :required="true">
        <template slot="label">Дата рождения</template>
      </RFDatepicker>
      <RFInput id="sex_input" v-model="sex" :required="true">
        <template slot="label">Пол</template>
      </RFInput>
      <RFInput id="address_input" v-model="address" :required="true">
        <template slot="label">Домашний адрес*</template>
      </RFInput>
      <RFInput id="phone_input" v-model="phone" :required="true">
        <template slot="label">Телефон</template>
      </RFInput>
      <RFInput id="addPhone_input" v-model="addPhone" :required="false">
        <template slot="label">Дополнительный номер телефона</template>
      </RFInput>
      <RFInput id="email_input" v-model="email" :required="true">
        <template slot="label">Эл.почта</template>
      </RFInput>
      <RFInput id="addEmail_input" v-model="addEmail" :required="false">
        <template slot="label">Фамилия</template>
      </RFInput>
      <RFCheckbox id="email-subscribe-checkbox" v-model="subscribeEmail">
        Подписка на Email-рассылку
      </RFCheckbox>
      <RFCheckbox id="phone-sms-subscribe-checkbox" v-model="subscribePhone">
        Подписка на SMS-рассылку
      </RFCheckbox>
      <RFTextArea
        v-model="comments"
        title="Ваши дополнения и пожелания к анкете"
      />
      <RFText variant="small" style-type="hint">
        По введённому ниже логину и паролю вы сможете отредактировать анкету
        после сохранения. Пароль также будет использоваться для входа в ваш
        личный кабинет на сайте после получения вами карты скидок.
      </RFText>
      <RFInput id="username_input" v-model="username" :required="true">
        <template slot="label">Логин</template>
      </RFInput>
      <RFInput id="hidden_input" class="hidden_input" />
      <RFInput
        id="password_input"
        v-model="password"
        :required="true"
        autocomplete="off"
        type="password"
      >
        <template slot="label">Пароль</template>
      </RFInput>
      <RFInput
        id="re_password_input"
        v-model="rePassword"
        :required="true"
        autocomplete="off"
        type="password"
      >
        <template slot="label">Пароль еще раз</template>
      </RFInput>
      <RFCheckbox id="policy-acceptance-checkbox" v-model="policy">
        Я согласен на передачу личной информации для регистрации в дисконтной
        программе КДЛ "ОЛИМП"<span class="required-star"></span>
      </RFCheckbox>
    </section>
    <RFButton type="submit">Отправить заявку</RFButton>
    <button type="button" class="link" @click="clear">Очистить</button>
    <RFText variant="small" style-type="hint">
      <span class="required-star"></span>
      Поля, помеченные звездочкой, обязательны для заполнения.
    </RFText>
  </form>
</template>

<script>
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import RFText from 'atoms/RFText/index.vue'
import RFButton from 'atoms/RFButton/index.vue'
import RFInput from 'atoms/RFInput/index.vue'
import RFTextArea from 'atoms/RFTextarea/index.vue'
import RFDatepicker from 'atoms/RFDatepicker/index.vue'
import RFCheckbox from 'atoms/RFCheckbox/index.vue'

export default Vue.extend({
  name: 'AcquireDiscountCardTemplate',
  components: {
    RFHeading,
    RFText,
    RFInput,
    RFButton,
    RFCheckbox,
    RFDatepicker,
    RFTextArea,
  },
  data() {
    return {
      iin: '',
      idNum: '',
      name: '',
      surname: '',
      middlename: '',
      birthDate: new Date().toISOString().slice(0, 10),
      sex: '',
      address: '',
      phone: '',
      addPhone: '',
      email: '',
      addEmail: '',
      subscribeEmail: false,
      subscribePhone: false,
      comments: '',
      username: '',
      password: '',
      rePassword: '',
      policy: false,
    }
  },
  methods: {
    handleSubmit() {
      console.log('submit')
    },
    clear() {
      this.iin = ''
      this.idNum = ''
      this.name = ''
      this.surname = ''
      this.middlename = ''
      this.birthDate = new Date().toISOString().slice(0, 10)
      this.sex = ''
      this.address = ''
      this.phone = ''
      this.addPhone = ''
      this.email = ''
      this.addEmail = ''
      this.subscribeEmail = false
      this.subscribePhone = false
      this.comments = ''
      this.username = ''
      this.password = ''
      this.rePassword = ''
      this.policy = false
    },
  },
})
</script>

<style lang="scss" scoped>
form {
  max-width: 1000px;
  .text--mid {
    font-weight: 400;
  }
  section {
    display: flex;
    flex-wrap: wrap;
    margin: 50px 0;
    row-gap: 30px;
    column-gap: 60px;

    .rf-input {
      width: 100%;
      max-width: 420px;
    }

    .hidden_input {
      opacity: 0;

      @include wide-tablet {
        display: none;
      }
    }

    @include phone {
      margin-bottom: 30px;
      row-gap: 20px;

      .rf-input {
        width: 100%;
        margin-bottom: 0;
      }
    }
  }
  button,
  .rf-btn {
    display: block;
    width: 222px;
    margin-bottom: 30px;
    font-size: rem(16);

    &.link {
      padding: 12px auto;
      background: transparent;
      text-decoration: underline;
      border: none;
      color: $c-primary;

      &:hover {
        cursor: pointer;
      }
    }

    @include phone {
      width: 100%;
    }
  }

  span.required-star::before {
    content: '*';
    color: $c-error;
  }
}
</style>
