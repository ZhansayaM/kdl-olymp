<template>
  <Card class="patient__card" card-mode="light">
    <RFText :class="!extended && 'label'" variant="medium">
      Данные пациента
    </RFText>
    <template v-if="!extended">
      <div class="patient__card__row">
        <RFText>{{ `${user.name} ${user.surname}, ${user.phone}` }}</RFText>
        <RFButton variant="link" size="small" @click="toggleExtend">
          Изменить
        </RFButton>
      </div>
    </template>
    <template v-else>
      <form @submit.prevent="changePatient">
        <RFInput id="name_input" v-model="name" :required="true">
          <template slot="label">Имя</template>
        </RFInput>
        <RFInput id="surname_input" v-model="surname" :required="true">
          <template slot="label">Фамилия</template>
        </RFInput>
        <RFInput id="middlename_input" v-model="middlename" :required="false">
          <template slot="label">Отчество (при наличии)</template>
        </RFInput>
        <RFRadio
          v-for="radio in documentType"
          :id="`document-type-radio-${radio.value}`"
          :key="radio.value"
          :value="radio.value"
          name="document-type"
          @change="checkDocumentType"
        >
          {{ radio.title }}
        </RFRadio>
        <RFInput id="document_id_input" v-model="idNum">
          <template slot="label">{{ documentIdTitle }}</template>
        </RFInput>
        <RFInput id="email_input" v-model="email" :required="true">
          <template slot="label">Эл.почта</template>
        </RFInput>
        <RFInput id="phone_input" v-model="phone" :required="true">
          <template slot="label">Телефон</template>
        </RFInput>
        <RFButton type="submit" size="small">Сохранить</RFButton>
        <RFButton variant="link" size="small" @click="toggleExtend">
          Отменить
        </RFButton>
      </form>
    </template>
  </Card>
</template>

<script>
import Vue from 'vue'
import RFText from 'atoms/RFText/index.vue'
import Card from 'atoms/Card/index.vue'
import RFButton from 'atoms/RFButton/index.vue'
import RFInput from 'atoms/RFInput/index.vue'
import RFRadio from 'atoms/RFRadio/index.vue'

/**
 * 'MOLECULES/CheckoutPatientCard'
 * @displayName CheckoutPatientCard
 */
export default Vue.extend({
  name: 'CheckoutPatientCard',
  components: {
    Card,
    RFText,
    RFButton,
    RFInput,
    RFRadio,
  },
  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      extended: false,
      idNum: '',
      name: this.user.name,
      surname: this.user.surname,
      middlename: '',
      phone: this.user.phone,
      email: this.user.email,
      document: 'iin',
      documentType: [
        {
          value: 'iin',
          title: 'ИИН',
        },
        {
          value: 'id',
          title: 'Удостоверение личности',
        },
        {
          value: 'passport',
          title: 'Загран. паспорт',
        },
      ],
    }
  },
  computed: {
    documentIdTitle() {
      switch (this.document) {
        case 'iin':
          return 'ИИН'
        case 'passport':
          return 'Номер удостоверения личности'
        case 'id':
          return 'Номер паспорта'
        default:
          return ''
      }
    },
  },
  methods: {
    toggleExtend() {
      this.extended = !this.extended
    },
    checkDocumentType(val) {
      this.document = val
    },
    clear() {
      this.idNum = ''
      this.name = ''
      this.surname = ''
      this.middlename = ''
      this.phone = ''
      this.email = ''
    },
    changePatient() {
      const newUser = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        phone: this.phone,
        idType: this.document,
        documentId: this.idNum,
      }

      if (this.middlename) newUser.middlename = this.middlename

      this.$emit('change', newUser)
      this.extended = false
    },
  },
})
</script>

<style lang="scss" scoped>
.patient__card {
  ::v-deep .content {
    width: 100%;
    margin: 0;
    padding: 28px 40px;
    transition: 0.3s ease-in-out;
    height: auto;
  }
  &__row {
    justify-content: space-between;
    align-items: flex-end;
    @include flex-row();
    .rf-btn--link {
      color: $c-primary;
    }
  }
  .label {
    color: $c-gray;
    margin-bottom: 6px;
  }

  form {
    @include flex-column();

    margin: 30px 0;
    row-gap: 30px;

    .rf-input {
      width: 100%;
      max-width: 420px;
    }
    button.rf-btn {
      width: 208px;
    }

    @include phone {
      margin-bottom: 30px;
      row-gap: 20px;

      .rf-input {
        width: 100%;
        margin-bottom: 0;
      }
      button.rf-btn {
        width: 100%;
      }
    }
  }
}
</style>
