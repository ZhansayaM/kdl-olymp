<template>
  <div class="info">
    <div v-for="item in data" :key="item" class="info__block">
      <p class="info__block__title">{{ item.title }}</p>
      <div class="info__block__patientData">
        <p>{{ item.patientData }}</p>
        <Button v-if="item.email !== ''" @click="showModal = true">
          {{ item.email }}
        </Button>
        <ResultsModal v-if="showModal" @close="showModal = false" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ResultsModal from 'molecules/Cards/ResultsModal/index.vue'
/**
 * 'PAGES/Main'
 * @displayName ResultsInfo
 */
export default Vue.extend({
  name: 'ResultsInfo',
  components: { ResultsModal },
  data() {
    return {
      showModal: false,
      data: [
        {
          title: 'ФИО пациента:',
          patientData: 'Фамилия Имя Отчество',
          email: '',
        },
        {
          title: '№ заявки:',
          patientData: '9999999901',
          email: '',
        },
        {
          title: 'Лаборатория и заказчик:',
          patientData: 'Процедурный кабинет Темиртау - Тестовая лаборатория',
          email: '',
        },
        {
          title: 'Дата рождения:',
          patientData: '01.01.2012',
          email: '',
        },
        {
          title: 'Дата заказа:',
          patientData: '20.01.2021 12:02:16',
          email: '',
        },
        {
          title: 'Дата взятия:',
          patientData: '20.01.2021 12:01:00',
          email: '',
        },
        {
          title: 'Дата получения:',
          patientData: '20.01.2021 12:03:45',
          email: '',
        },
        {
          title: 'Планируемая дата:',
          patientData: '21.01.2021 18:00:00',
          email: '',
        },
        {
          title: 'Дата выполнения:',
          patientData: '20.01.2021 12:03:51',
          email: '',
        },
        {
          title: 'Телефон:',
          patientData: '(000)000-00-00',
          email: '',
        },
        {
          title: 'Эл. почта:',
          patientData: 'test@test.kz',
          email: 'Отправить по эл. почте',
        },
        {
          title: 'Сообщения:',
          patientData: '(нет)',
          email: '',
        },
        {
          title: 'Способ оплаты:',
          patientData: 'Hаличные',
          email: '',
        },
        {
          title: 'Итого по заявке:',
          patientData: '2160.0 ₸ (без скидки:2400.0 ₸, сумма скидки: 240 ₸)',
          email: '',
        },
        {
          title: 'Оплачено:',
          patientData: '2160.0 ₸',
          email: '',
        },
        {
          title: 'Направление:',
          patientData: 'Нет',
          email: '',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.info {
  &__block {
    display: grid;
    grid-template-columns: 1fr 4fr;
    @include medium-tablet {
      grid-template-columns: 2fr 4fr;
    }
    &__title {
      color: $c-gray;
      @include font-size(18px, 38px, 400);
      @include medium-tablet {
        @include font-size(16px, 36px, 400);
      }
    }
    &__patientData {
      display: flex;
      gap: 2rem;
      p {
        @include font-size(20px, 38px, 400);
        @include medium-tablet {
          @include font-size(16px, 36px, 400);
        }
      }
      button {
        border: none;
        background: none;
        color: #31b0ed;
        text-decoration: underline;
        cursor: pointer;
        @include font-size(16px, 38px, 400);
        @include medium-tablet {
          @include font-size(16px, 36px, 400);
        }
      }
    }
  }
}
</style>
