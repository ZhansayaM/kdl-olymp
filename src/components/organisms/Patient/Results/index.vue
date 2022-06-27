<template>
  <section class="patient-content">
    <div class="patient-search-results">
      <ResultsSearch />
    </div>
    <div v-if="!isSearch" class="patient-results">
      <Slider
        :items="results"
        title="Последние результаты"
        :variant="'result'"
      />
      <Button
        class="patient-results__btn"
        variant="secondary"
        @click="isSearch = !isSearch"
        >Все результаты</Button
      >
    </div>
    <div v-else class="patient-show-results">
      <RFHeading tag="h3" class="patient-show-results__title"
        >Результаты анализов</RFHeading
      >
      <div class="patient-show-results__cards">
        <ResultsCard
          v-for="item in items"
          :key="item.id"
          :date="item.date"
          :name="item.name"
          :number="item.number"
          :results="item.results"
          :link="item.link"
        />
      </div>
    </div>
    <div class="patient-terms-block">
      <div class="patient-terms-block__wrapper">
        <RFText class="patient-terms-block__title">
          Пользовательское соглашение принято и подписано вами 23 февраля 2022
        </RFText>
        <Button class="patient-terms-block__btn" variant="secondary"
          >Посмотреть</Button
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import RFText from 'atoms/RFText/index.vue'
import Slider from 'molecules/Slider/index.vue'
import Button from 'atoms/Button/index.vue'
import ResultsCard from 'molecules/Cards/ResultsCard/index.vue'
import ResultsSearch from 'molecules/Cards/ResultsSearch/index.vue'

export default Vue.extend({
  name: 'PatientTemplate',
  components: {
    RFHeading,
    RFText,
    Slider,
    Button,
    ResultsCard,
    ResultsSearch,
  },
  data() {
    return {
      isSearch: false,
      results: [
        {
          id: 1,
          date: '23 мая',
          name: 'Алексеев Дмитрий Алексеевич',
          number: '№97000003',
          results: '02.05.2022',
          link: '/',
        },
        {
          id: 2,
          date: '24 мая',
          name: 'Алексеев Дмитрий Алексеевич',
          number: '№97000003',
          link: '/results-ready',
        },
        {
          id: 3,
          date: '25 мая',
          name: 'Алексеев Дмитрий Алексеевич',
          number: '№97000003',
          link: '/results-ready',
        },
        {
          id: 4,
          date: '25 апреля',
          name: 'Алексеев Дмитрий Алексеевич',
          number: '№97000003',
          results: '02.05.2022',
          link: '/',
        },
      ],
      items: [
        {
          id: 1,
          date: '23 мая',
          name: 'Алексеев Дмитрий Алексеевич',
          number: '№97000003',
          results: '02.05.2022',
          link: '/',
        },
        {
          id: 2,
          date: '24 мая',
          name: 'Алексеев Дмитрий Алексеевич',
          number: '№97000003',
          link: '/results-ready',
        },
        {
          id: 3,
          date: '25 мая',
          name: 'Алексеев Дмитрий Алексеевич',
          number: '№97000003',
          link: '/results-ready',
        },
        {
          id: 4,
          date: '25 апреля',
          name: 'Алексеев Дмитрий Алексеевич',
          number: '№97000003',
          results: '02.05.2022',
          link: '/',
        },
        {
          id: 5,
          date: '25 мая',
          name: 'Алексеев Дмитрий Алексеевич',
          number: '№97000003',
          link: '/results-ready',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.patient {
  &-content {
    padding: 60px 50px 100px;
    max-width: 1440px;
    margin: 0 auto;

    @include phone {
      padding: 28px 16px;
    }
  }
  &-search-results {
    margin-bottom: 54px;
  }

  &-results {
    padding-bottom: 60px;

    @include phone {
      padding-bottom: 40px;
    }

    &__btn {
      margin-top: 45px;
    }
  }

  &-terms-block {
    &__wrapper {
      padding: 28px 30px;
      max-width: 950px;
      width: 100%;
      height: 130px;
      border-radius: 8px;
      background: $c-disabled-bg;

      @include wide-tablet {
        height: max-content;
      }
    }
    &__title {
      color: $c-dark !important;
      @include font-size(18px !important, 24px !important);
    }
    &__btn {
      margin-top: 15px;
      max-width: 120px;
      padding: 6px 12px;
      height: 40px;
      @include font-size(16px, 18px);
    }
  }

  &-show-results {
    &__title {
      padding-bottom: 40px;
      @include font-size(28px !important, 34px !important, 500);
    }
    &__cards {
      padding-bottom: 60px;
      grid-column-gap: 40px;
      grid-row-gap: 30px;
      flex-wrap: wrap;
      @include flex-row();

      @include tablet {
        grid-column-gap: 30px;
        grid-row-gap: 20px;
      }
    }
  }
}

//* Стили для блока слайдера

::v-deep .popular-top__title {
  @include font-size(28px !important, 34px !important, 500 !important);

  @include phone {
    @include font-size(22px !important, 26px !important, 500 !important);
  }
}
</style>
