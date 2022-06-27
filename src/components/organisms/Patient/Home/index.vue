<template>
  <section class="patient-content">
    <div class="patient-results">
      <Slider
        :items="results"
        title="Результаты анализов"
        :variant="'result'"
      />
    </div>
    <div class="patient-promo">
      <RFHeading class="patient-promo__heading" tag="h2">
        Промо-коды
      </RFHeading>
      <div class="patient-promo__cards">
        <MakingAnalyzesCard
          v-for="promo in promoData"
          :key="promo.id"
          :title="promo.title"
          :discount="promo.discount"
          :old-price="promo.oldPrice"
          :price="promo.price"
          :data="promo.data"
          :is-active="promo.isActive"
          :is-disabled="promo.isDisabled"
        />
      </div>
      <Button
        class="patient-promo__btn"
        variant="secondary"
        @click="$router.push('/patient/promo')"
        >Все промокоды</Button
      >
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import Slider from 'molecules/Slider/index.vue'
import MakingAnalyzesCard from 'molecules/Cards/MakingAnalyzesCard/index.vue'
import Button from 'atoms/Button/index.vue'

export default Vue.extend({
  name: 'PatientTemplate',
  components: {
    RFHeading,
    Slider,
    Button,
    MakingAnalyzesCard,
  },
  data() {
    return {
      results: [
        {
          id: 1,
          date: '23 мая',
          name: 'Алексеев Дмитрий Алексеевич',
          number: '№97000003',
          results: '02.05.2022',
        },
        {
          id: 2,
          date: '24 мая',
          name: 'Алексеев Дмитрий Алексеевич',
          number: '№97000003',
        },
        {
          id: 3,
          date: '25 мая',
          name: 'Алексеев Дмитрий Алексеевич',
          number: '№97000003',
        },
        {
          id: 4,
          date: '25 апреля',
          name: 'Алексеев Дмитрий Алексеевич',
          number: '№97000003',
          results: '02.05.2022',
        },
      ],
      promoData: [
        {
          id: 1,
          title: 'ПЦР анализ на коронавирус',
          discount: 10,
          oldPrice: '7000',
          price: '6300',
          data: '02.04.2022',
          isActive: false,
          isDisabled: false,
        },
        {
          id: 2,
          title: 'Анализ на суммарные антитела к коронавирусу ЭХЛ методом',
          discount: 10,
          oldPrice: '5400',
          price: '4060',
          data: '02.04.2022',
          isActive: true,
          isDisabled: false,
        },
        {
          id: 3,
          title: 'ПЦР анализ на коронавирус',
          discount: 10,
          oldPrice: '7000',
          price: '6300',
          data: '02.04.2022',
          isDisabled: false,
          isActive: false,
        },
        {
          id: 4,
          title: 'ПЦР анализ на коронавирус',
          discount: 10,
          oldPrice: '7000',
          price: '6300',
          data: '02.04.2022',
          isActive: false,
          isDisabled: false,
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

  &-results {
    padding-bottom: 60px;

    @include phone {
      padding-bottom: 40px;
    }
  }

  &-promo {
    > h2 {
      margin: 0 !important;
      padding-bottom: 40px;
      @include font-size(28px !important, 34px !important, 500 !important);

      @include phone {
        padding-bottom: 30px;
        @include font-size(22px !important, 26px !important, 500 !important);
      }
    }

    &__cards {
      justify-content: space-between;
      padding-bottom: 50px;
      flex-wrap: wrap;
      @include flex-row();

      @include wide-tablet {
        justify-content: flex-start;
        gap: 30px;
      }

      @include phone {
        justify-content: center;
        padding-bottom: 30px;
      }
    }

    &__btn {
      @include phone {
        width: 100%;
        margin: 0 auto 30px;
        @include flex-row();
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
