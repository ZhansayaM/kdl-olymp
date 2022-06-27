<template>
  <section class="patient-content">
    <div class="patient-promo">
      <Tabs v-model="selectedTab" :tabs="tabs" class="patient-promo__tabs" />
      <div class="patient-promo__cards">
        <MakingAnalyzesCard
          v-for="(promo, index) in changeTypeCards"
          :key="promo.id"
          :title="promo.title"
          :discount="promo.discount.value"
          :old-price="promo.oldPrice"
          :price="promo.price"
          :data="promo.data"
          :is-active="promo.isActive"
          :is-disabled="promo.isDisabled"
          :modal-data="changeTypeCards[index]"
          class="patient-promo-cards"
        />
      </div>
      <!-- //* Пока пуш на акции -->
      <Button
        class="patient-promo__btn"
        variant="secondary"
        @click="$router.push('/promotions')"
        >Все результаты</Button
      >
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from 'atoms/Button/index.vue'
import Tabs from 'molecules/Tabs/index.vue'
import MakingAnalyzesCard from 'molecules/Cards/MakingAnalyzesCard/index.vue'

export default Vue.extend({
  name: 'PatientPromo',
  components: {
    Button,
    Tabs,
    MakingAnalyzesCard,
  },
  data() {
    return {
      promoData: [
        {
          id: 1,
          title: 'ПЦР анализ на коронавирус',
          discount: {
            value: 10,
            text: 'промо-код',
          },
          oldPrice: '7000',
          price: '6300',
          data: '02.04.2022',
          isActive: false,
          isDisabled: false,
        },
        {
          id: 2,
          title: 'Анализ на суммарные антитела к коронавирусу ЭХЛ методом',
          discount: {
            value: 15,
            text: 'промо-код',
          },
          oldPrice: '5400',
          price: '4060',
          data: '02.04.2022',
          isActive: true,
          isDisabled: false,
        },
        {
          id: 3,
          title: 'ПЦР анализ на коронавирус',
          discount: {
            value: 20,
            text: 'промо-код',
          },
          oldPrice: '7000',
          price: '6300',
          data: '02.04.2022',
          isDisabled: false,
          isActive: false,
        },
        {
          id: 4,
          title: 'ПЦР анализ на коронавирус',
          discount: {
            value: 30,
            text: 'промо-код',
          },
          oldPrice: '7000',
          price: '6300',
          data: '02.04.2022',
          isActive: false,
          isDisabled: false,
        },
        {
          id: 5,
          title: 'ПЦР анализ на коронавирус',
          discount: {
            value: 35,
            text: 'промо-код',
          },
          oldPrice: '7000',
          price: '6300',
          data: '02.04.2022',
          isActive: false,
          isDisabled: false,
        },
        {
          id: 6,
          title: 'Анализ на суммарные антитела к коронавирусу ЭХЛ методом',
          discount: {
            value: 40,
            text: 'промо-код',
          },
          oldPrice: '5400',
          price: '4060',
          data: '02.04.2022',
          isActive: true,
          isDisabled: false,
        },
        {
          id: 7,
          title: 'ПЦР анализ на коронавирус',
          discount: {
            value: 45,
            text: 'промо-код',
          },
          oldPrice: '7000',
          price: '6300',
          data: '02.04.2022',
          isDisabled: false,
          isActive: false,
        },
        {
          id: 8,
          title: 'ПЦР анализ на коронавирус',
          discount: {
            value: 50,
            text: 'промо-код',
          },
          oldPrice: '7000',
          price: '6300',
          data: '02.04.2022',
          isActive: false,
          isDisabled: false,
        },
      ],
      selectedTab: 1,
      tabs: [
        { id: 1, title: 'Все' },
        { id: 2, title: 'Активированные' },
      ],
    }
  },
  computed: {
    changeTypeCards(): {} {
      if (this.selectedTab === 2) {
        return this.takeActiveCard()
      }
      return this.promoData
    },
  },
  methods: {
    // TODO: Вынести логику в стор, при подключении апи
    takeActiveCard() {
      const activeCards = this.promoData.filter((item) => {
        return item.isActive === true
      })
      return activeCards
    },
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

  &-promo {
    &__btn {
      margin-top: 50px;

      @include phone {
        width: 290px;
        margin: 28px auto 40px;
        @include flex-row();
      }
    }

    &__tabs {
      max-width: 420px;
      width: 100%;
    }

    &__cards {
      padding-top: 54px;
      grid-gap: 38px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);

      @include small-laptop {
        grid-column-gap: 10px;
      }

      @include wide-tablet {
        grid-template-columns: repeat(3, 1fr);
      }
      @include tablet {
        grid-template-columns: repeat(2, 1fr);
      }
      @include phone {
        grid-gap: 18px;
        padding-top: 18px;
        justify-items: center;
        grid-template-columns: 1fr;
      }

      // * стили для промо карточек

      &::v-deep .cards {
        width: 100%;

        @include small-laptop {
          max-width: 290px;
        }
      }
    }
  }
}

// * стили для табов

::v-deep .tab.active.primary {
  background: $c-white !important;
  border: none;
  color: $c-primary !important;
}
</style>
