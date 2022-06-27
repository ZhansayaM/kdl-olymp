<template>
  <form @submit.prevent="handleSubmit">
    <section>
      <RFHeading tag="h5">
        Показатели для принятия инвестиционного решения
      </RFHeading>

      <MessageCard class="message_card" card-mode="light">
        <div class="message_card_col">
          <RFHeading tag="h4">0,17%</RFHeading>
          <RFText>Внутренняя норма прибыли по проекту</RFText>
        </div>
        <div class="message_card_col">
          <RFHeading tag="h4">6 месяцев</RFHeading>
          <RFText>Окупаемость проекта</RFText>
        </div>
      </MessageCard>
    </section>

    <CalculatorTable />

    <section>
      <RFInput id="city_input"><template slot="label">Город</template></RFInput>
      <RFInput id="name_input"><template slot="label">Имя</template></RFInput>
      <RFInput id="phone_input">
        <template slot="label">Телефон</template>
      </RFInput>
      <RFInput id="email_input">
        <template slot="label">E-mail</template>
      </RFInput>
    </section>
    <RFButton type="submit">Отправить заявку</RFButton>
    <button type="button" class="link" @click="backPage">
      Вернуться к вводу данных
    </button>
  </form>
</template>

<script>
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import RFText from 'atoms/RFText/index.vue'
import RFButton from 'atoms/RFButton/index.vue'
import MessageCard from 'atoms/MessageCard/index.vue'
import RFInput from 'atoms/RFInput/index.vue'

import CalculatorTable from 'molecules/Calculator/Table/index.vue'

export default Vue.extend({
  name: 'CalculatorForm',
  components: {
    RFHeading,
    RFText,
    MessageCard,
    RFInput,
    RFButton,
    CalculatorTable,
  },
  methods: {
    handleSubmit() {
      console.log('submit')
    },
    backPage() {
      this.$router.push({
        name: 'calculator',
        query: {
          page: 1,
        },
      })
    },
  },
})
</script>

<style lang="scss" scoped>
form {
  .message_card {
    width: 100%;
    max-width: 660px;
    justify-content: space-between;
    gap: 50px;
    @include flex-row();

    &_col {
      @include flex-column();
    }

    @include phone {
      gap: 24px;
      flex-direction: column;

      &_col p {
        order: 1;
      }
      &_col h4 {
        font-size: rem(28);
        order: 2;
      }
    }
  }
  section {
    flex-wrap: wrap;
    margin-bottom: 50px;
    gap: 30px;
    max-width: 800px;
    @include flex-row();

    h5.rf-heading {
      display: block;
      margin: 0 0 20px;
    }

    .rf-input {
      margin-bottom: 30px;
    }

    @include phone {
      margin-bottom: 30px;

      h5.rf-heading {
        margin-bottom: 10px;
      }

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
}
</style>
