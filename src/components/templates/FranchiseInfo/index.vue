<template>
  <div class="main">
    <div class="main__top">
      <div class="main__top_inner">
        <RFHeading tag="h1">{{ title }}</RFHeading>
      </div>
    </div>
    <div class="main__body">
      <div class="main__body__left">
        <div class="main__body__left__achievements">
          <RFHeading tag="h4">{{ achievement.title }}</RFHeading>
          <ul v-for="(item, index) in achievement.points" :key="index">
            <li class="main__body__text">{{ item }}</li>
          </ul>
        </div>
        <div class="main__body__left__stats">
          <!-- TODO: API /franchise разделить блок, начиная с "С чего начать" и отдельный API/поле для статистики -->
          <FranchiseStatistics :data="franchiseData" />
        </div>
        <div class="main__body__left__start">
          <RFHeading tag="h4">{{ start.title }}</RFHeading>
          <p class="main__body__text">{{ start.text }}</p>
        </div>
        <div class="main__body__left__faq">
          <RFHeading tag="h4">{{ faq.title }}</RFHeading>
          <div v-for="item in faq.dropdown" :key="item">
            <DropdownAnalisys
              :subtitle="item.subtitle"
              :is-effects="item.isEffects"
            >
              {{ item.title }}
            </DropdownAnalisys>
          </div>
        </div>
        <div class="main__body__left__calculate">
          <Calculate />
        </div>
      </div>
      <Calculate class="main__body__left__calculateBig" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import FranchiseStatistics from 'molecules/Cards/FranchiseStatistics/index.vue'
import DropdownAnalisys from 'atoms/Accordeon/AccordeonAnalisys/index.vue'
import Calculate from 'molecules/Cards/Calculate/index.vue'

/**
 * 'PAGES/Main'
 * @displayName Main
 */
export default Vue.extend({
  name: 'FranchiseInfo',
  components: { RFHeading, FranchiseStatistics, DropdownAnalisys, Calculate },
  data() {
    return {
      title: 'Франшиза',
      achievement: {
        title: 'Достижения',
        points: [
          'Победитель конкурса казахстанских франшиз в номинации "Лучшая казахстанская франшиза на отечественном рынке";',
          "Выбор года '16, '17, '18, '19;",
          'Премия «Алтын Сапа – 2018»;',
          'Премия Іскер;',
          'Премии Содружества Независимых Государств, за достижения в области качества продукции и услуг;',
          'Наличие аккредитации на соответствие требованиям национального и международного стандарта ISO 15189;',
        ],
      },
      start: {
        title: 'С чего начать',
        text: 'Потенциальный франчайзи выбирает помещение, расположенное не менее одного километра от другого процедурного кабинета под брендом КДЛ ОЛИМП. Расстояние замеряется по прямой линии. Помещение должно соответствовать санитарным нормам и нормам КДЛ ОЛИМП. Стандарты помещений доступны по ссылке.',
      },
      faq: {
        title: 'Частые вопросы',
        dropdown: [
          {
            id: 1,
            isEffects: false,
            title:
              'Потенциальный франчайзи выбирает помещение, расположенное не менее одного километра?',
            subtitle: [
              {
                text: 'Потенциальный франчайзи выбирает помещение, расположенное не менее одного километра от другого процедурного кабинета под брендом КДЛ ОЛИМП. Расстояние замеряется по прямой линии. Помещение должно соответствовать санитарным нормам и нормам КДЛ ОЛИМП. Стандарты помещений доступны по ссылке.',
              },
            ],
          },
          {
            id: 2,
            isEffects: false,
            title:
              'Потенциальный франчайзи выбирает помещение, расположенное не менее одного километра?',
            subtitle: [
              {
                text: 'Потенциальный франчайзи выбирает помещение, расположенное не менее одного километра от другого процедурного кабинета под брендом КДЛ ОЛИМП. Расстояние замеряется по прямой линии. Помещение должно соответствовать санитарным нормам и нормам КДЛ ОЛИМП. Стандарты помещений доступны по ссылке.',
              },
            ],
          },
          {
            id: 3,
            isEffects: false,
            title:
              'Потенциальный франчайзи выбирает помещение, расположенное не менее одного километра?',
            subtitle: [
              {
                text: 'Потенциальный франчайзи выбирает помещение, расположенное не менее одного километра от другого процедурного кабинета под брендом КДЛ ОЛИМП. Расстояние замеряется по прямой линии. Помещение должно соответствовать санитарным нормам и нормам КДЛ ОЛИМП. Стандарты помещений доступны по ссылке.',
              },
            ],
          },
        ],
      },
    }
  },
})
</script>

<style lang="scss" scoped>
.main {
  &__top {
    background: $c-secondary-background;
    &_inner {
      height: 22rem;
      align-items: center;
      padding: 50px;
      max-width: 1440px;
      margin: 0 auto;
      @include flex-row();
      @include tablet {
        height: 18rem;
      }
      @include phone {
        height: 13.75rem;
        padding: 16px;
      }
    }
    h1.rf-heading {
      color: $c-white;
      @include medium-tablet {
        @include font-size(40px, 50px, 500);
      }
      @include phone {
        letter-spacing: -0.02em;
        @include font-size(28px, 34px, 500);
      }
    }
  }
  &__body {
    max-width: 1440px;
    margin: 0 auto;
    padding: 40px 50px 100px;
    justify-content: space-between;
    gap: 40px;
    @include flex-row();
    @include medium-tablet {
      padding: 40px 30px 80px;
    }
    @include tablet {
      flex-direction: column;
    }
    @include phone {
      padding: 28px 10px 8px;
    }
    &__text {
      @include font-size(16px, 24px);
      @include phone {
        align-items: flex-start;
        @include flex-row();
        @include font-size(14px, 20px);
      }
    }

    &__left {
      max-width: 55rem;
      @include tablet {
        @include flex-column();
      }
      > div:not(:last-child) {
        margin-bottom: 40px;
        @include phone {
          margin-bottom: 28px;
        }
      }
      &__calculate {
        display: none;
        @include tablet {
          display: block;
          margin: 0 auto;
          order: 4;
          margin-bottom: 28px;
        }
      }
      &__calculateBig {
        @include tablet {
          display: none;
        }
      }
      h3.rf-heading {
        margin: 0 0 20px;
        font-weight: 400;
        @include phone {
          margin-bottom: 18px;
        }
      }
      &__faq {
        h3.rf-heading {
          margin-bottom: 0;
        }
        @include tablet {
          order: 5;
        }
      }
      &__stats {
        @include tablet {
          order: 1;
        }
      }
      &__start {
        @include tablet {
          order: 3;
        }
      }
      &__achievements {
        @include tablet {
          order: 2;
        }
        ul:not(:last-child) {
          margin: 0 0 20px;
          @include phone {
            margin-bottom: 17px;
          }
        }
        ul {
          list-style: none;

          li::before {
            content: '\2022';
            color: $c-primary;
            font-weight: bold;
            display: inline-block;
            width: 8px;
            margin-right: 19px;
            @include phone {
              width: auto;
              font-size: 2.1em;
              margin-right: 18px;
              margin-top: -2px;
            }
          }
        }
      }
    }
  }
}
</style>
