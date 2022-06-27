<template>
  <div class="promo-slug">
    <ButtonBack class="promo-slug__back" />
    <div class="promo-slug-wrapper">
      <div class="promo-slug-left">
        <TabsBlock
          :tabs="tabs"
          class="promo-slug-tabs"
          @selectedTab="changeTab"
        >
          <template #heading>
            <section class="promo-slug__heading">
              <RFHeading tag="h2">
                {{ getCardData.title }}
              </RFHeading>
            </section>
          </template>
        </TabsBlock>
        <div class="promo-slug-main">
          <RFText
            variant="small"
            class="promo-slug-main__text"
            v-html="changeTabData"
          >
          </RFText>
        </div>
      </div>
      <div class="promo-slug-right">
        <DiscountBadge
          v-if="getCardData.discount"
          variant="big"
          :value="getCardData.discount.value"
          class="promo-slug-right__badge"
        />
        <PopularCard
          :price="getEndPrice.endPrice"
          :old-price="getCardData.oldPrice"
          :btn-name="btnName"
          :tags="tags"
          is-button
          class="promo-slug-right__popular"
        />
        <PromoPriceCard
          :price="getCardData.oldPrice"
          :discounts="getCardData.discount"
          class="promo-slug-right__price"
        />
        <AlertActivateTag
          v-if="getCardData.discount"
          :active="activateDate.active"
          :valid="activateDate.valid"
          class="promo-slug-right__tag"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ButtonBack from 'atoms/Button/ButtonBack/index.vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import TabsBlock from 'organisms/TabsBlock/index.vue'
import DiscountBadge from 'atoms/RFBadge/Discount/index.vue'
import AlertActivateTag from 'atoms/Tag/AlertActivateTag/index.vue'
import RFText from 'atoms/RFText/index.vue'
import PromoPriceCard from 'molecules/Cards/Promo/Price/index.vue'
import PopularCard from 'molecules/Cards/PopularCard/index.vue'

export default Vue.extend({
  name: 'PatientPromoSlugTemplate',
  components: {
    ButtonBack,
    RFHeading,
    RFText,
    TabsBlock,
    DiscountBadge,
    PromoPriceCard,
    AlertActivateTag,
    PopularCard,
  },
  data() {
    return {
      tabs: [
        {
          id: 'description',
          title: 'Описание',
        },
        {
          id: 'testimony',
          title: 'Показания',
        },
        {
          id: 'preparation',
          title: 'Подготовка к исследованию',
        },
        {
          id: 'results',
          title: 'Интерпретация результатов',
        },
      ],
      activateDate: {
        active: '02.05.2022',
        valid: '02.06.2022',
      },
      btnName: 'Активировать промо-код',
      endPrice: 0,
      tags: [
        {
          id: 1,
          name: '1 день',
        },
        {
          id: 2,
          name: 'Доступно с выездом на дом',
        },
      ],
      mockTextTestimony: '' as string,
      mockTextPreparation: '' as string,
      mockTextResults: '' as string,
    }
  },
  computed: {
    getCardData() {
      return this.$store.state.modals.modal_promo.data
    },
    getEndPrice() {
      return this.$store.state.patient.endPrice
    },
    changeTabData(): any {
      switch (this.$store.state.tabs.tabsActive) {
        case 'description':
          return `<span>Цитруллинированный пептид – это белок организма. При нарушении работы иммунной системы этот белок начинает «атаковаться» собственными защитными силами – антителами. То есть обнаружение этих антител к циклическому цитруллинированному пептиду свидетельствует о наличии у пациента аутоиммунных заболеваний – ревматоидного артрита или системной красной волчанки.
      <br> <br>
      Ревматоидный артрит – тяжелое аутоиммунное заболевание, которое проявляется симметричным воспалением суставов (как мелких, так и крупных). Характерным признаком является чувство скованности по утрам длительностью более одного часа. Суставы начинают болеть, деформироваться, становятся припухлыми
      <br> <br>
      Анализ имеет ряд преимуществ по сравнению с ревматоидным фактором (см. ревматоидный фактор), который также используется для диагностики данных заболеваний:</span>
      <br> <br>
      <ul>
        <li>Высокая специфичность (нет прочих факторов, которые могут привести к появлению в крови АЦЦП);</li>
        <li style="padding-top: 10px;">Появление в самом начале заболевания до клинических проявлений;;</li>
        <li style="padding-top: 10px;">Не курить за час до взятия крови;</li>
        <li style="padding-top: 10px;">Положительный результат даже при серонегативном варианте ревматоидного артрита (у таких пациентов отрицательный результат анализа на ревматоидный фактор);</li>
        <li style="padding-top: 10px;">Концентрация АЦЦП дает возможность оценить прогноз и тяжесть заболевания.</li>
      </ul>`
        case 'testimony':
          return 'Тестовый текст показаний'
        case 'preparation':
          return 'Тестовый текст подготовки'
        case 'results':
          return 'Тестовый текст интерпретации результатов'
      }
      return ''
    },
  },
  mounted() {
    localStorage.setItem('lastTab', 'description')
    this.$store.commit('tabs/changeTabsActive', 'description')
  },
  beforeDestroy() {
    localStorage.setItem('last', this.$store.state.tabs.tabsActive)
  },
  methods: {
    changeTab(tab) {
      this.$store.commit('tabs/changeTabsActive', tab)
    },
  },
})
</script>

<style lang="scss" scoped>
.promo-slug {
  max-width: 1440px;
  margin: 0 auto;
  padding: 50px 50px 100px;

  @include tablet {
    padding: 30px 25px;
  }

  @include phone {
    padding: 20px 16px;
  }

  &__back {
    padding-bottom: 46px;

    @include phone {
      padding-bottom: 22px;
    }
  }

  &-wrapper {
    justify-content: space-between;
    @include flex-row();

    @include small-laptop {
      grid-column-gap: 30px;
    }

    @include phone {
      flex-direction: column;
      position: relative;
    }
  }

  &__heading {
    padding-bottom: 34px;
    > h2 {
      margin: 0;
    }
    @include phone {
      width: 80%;
    }
  }

  &-left {
    max-width: 820px;
    width: 100%;
    height: max-content;

    @include wide-tablet {
      max-width: 60%;
    }

    @include phone {
      max-width: 100%;
    }
  }

  &-main {
    &__text {
      padding-top: 50px;

      @include wide-tablet {
        padding-top: 30px;
        text-align: justify;
      }
      @include phone {
        padding-bottom: 35px;
      }
    }
  }

  &-right {
    height: max-content;
    @include flex-column();

    &__badge {
      align-self: flex-end;
      margin-bottom: 25px;

      @include phone {
        position: absolute;
        top: 0;
        right: 0;
      }
    }

    &__popular {
      max-height: 280px;
      margin-bottom: 10px;
      padding: 20px 30px;
      justify-content: space-between;
      @include flex-column();

      @include small-laptop {
        width: 100%;
      }

      @include phone {
        max-width: none;
        margin: 20px 0 0;
        order: 2;
      }

      ::v-deep .cards {
        &__tags {
          grid-column-gap: 100%;
        }
        &__bottom {
          position: static;
          width: 100%;
          justify-content: flex-start;

          &-price-old {
            align-self: flex-end;
            margin-right: 15px;
            color: $c-disabled-input-text;
            text-decoration: line-through;
            @include font-size(20px, 32px);
          }

          &_price {
            padding: 0;
            @include font-size(34px, 42px, 500);
          }

          &_btn {
            width: 100%;
            margin-top: 25px;
            @include font-size(20px, 28px);
          }
        }
      }
    }

    &__tag {
      margin-top: 10px;

      @include phone {
        margin: 28px 0 60px;
        order: 3;
      }
    }
  }
}

// * Стили для блока табов
::v-deep .about-block {
  justify-content: flex-start;
  height: max-content;
  background-color: $c-white !important;

  &__inner {
    margin: 0 auto;
    padding: 0;
    width: 100%;

    &__tabs {
      width: max-content;

      @include wide-tablet {
        max-width: 100%;
      }

      .outline-primary {
        background: $c-white;
        border-color: $c-secondary-background;
        color: $c-primary;
        @include font-size(16px, 18px);
      }
      .active {
        background: $c-secondary-background !important;
        color: $c-white !important;
      }
    }
  }
}
</style>
