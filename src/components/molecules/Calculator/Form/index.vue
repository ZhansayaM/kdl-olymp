<template>
  <form @submit.prevent="handleSubmit">
    <section>
      <RFHeading tag="h5">
        Показатели по работе Процедурного кабинета
      </RFHeading>
      <InputAdditional
        label="Кол-во пациентов в день в первый месяц"
        variable="чел."
      />
      <InputAdditional label="Кол-во рабочих дней в месяце" variable="дн." />
    </section>
    <section>
      <RFHeading tag="h5">
        Показатели — условия работы франчайзи с КДЛ
      </RFHeading>
      <InputAdditional label="Средний чек без забора в день" variable="₸" />
      <InputAdditional
        label="Период рассрочки по паушальному взносу"
        variable="чел."
      />
    </section>
    <section>
      <RFHeading tag="h5">
        Показатели — условия работы франчайзи с КДЛ
      </RFHeading>
      <InputAdditional label="Ремонт" variable="₸" />
      <InputAdditional label="Площадь помещений" variable="кв. м" />
      <InputAdditional label="Аренда помещения" variable="₸" />
      <InputAdditional label="Коммунальные услуги в месяц" variable="₸" />
      <InputAdditional label="Канцелярские и хоз. товары" variable="₸" />
      <InputAdditional label="Реклама" variable="₸" />
      <InputAdditional label="Услуги банка (инкассация)" variable="%" />
    </section>
    <section>
      <RFHeading tag="h5">
        Показатели для расчетов расходов на оплату труда
      </RFHeading>
      <InputAdditional label="Регистратор" variable="₸" />
      <InputAdditional label="Медсестра" variable="₸" />
      <InputAdditional label="Санитарка" variable="₸" />
    </section>
    <RFButton type="submit">Рассчитать</RFButton>
    <button type="reset" class="link">Очистить</button>
  </form>
</template>

<script>
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import RFButton from 'atoms/RFButton/index.vue'
import InputAdditional from 'molecules/InputAdditional/index.vue'

export default Vue.extend({
  name: 'CalculatorForm',
  components: {
    RFHeading,
    InputAdditional,
    RFButton,
  },
  methods: {
    handleSubmit() {
      console.log('submit')
      this.$router.push({
        name: 'calculator',
        query: {
          page: 2,
        },
      })
    },
  },
})
</script>

<style lang="scss" scoped>
form {
  section {
    flex-wrap: wrap;
    margin-bottom: 50px;
    @include flex-row();

    .rf-heading {
      display: block;
      width: 100%;
      margin-bottom: 30px;
    }
    .additional {
      margin-right: 30px;
      margin-bottom: 30px;
    }

    @include phone {
      margin-bottom: 30px;

      .rf-heading {
        margin-bottom: 20px;
      }
      .additional {
        margin-right: 0;
        margin-bottom: 20px;
        width: 100%;

        &::v-deep .additional__input {
          width: 100%;
        }
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
