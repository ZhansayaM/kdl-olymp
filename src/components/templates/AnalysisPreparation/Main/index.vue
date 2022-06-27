<template>
  <div class="analysis-prep__body">
    <div class="analysis-prep__body__left">
      <div
        class="analysis-prep__body__left__generalInfo text-normalize"
        v-html="analysisInfo[0].attributes.description"
      ></div>
      <div
        class="analysis-prep__body__left__text text-normalize"
        v-html="analysisPrepare[0].attributes.description"
      ></div>
      <div class="analysis-prep__body__left__rules">
        <p class="analysis-prep__body__left__rules__title">
          Правила подготовки к отдельным исследования крови:
        </p>
        <div v-for="(item, index) in dropdown" :key="index">
          <DropdownAnalisys
            :subtitle="item.subtitle"
            :is-effects="item.isEffects"
          >
            <p>{{ item.title }}</p>
            <span v-if="item.underTitle"> {{ item.underTitle }} </span>
          </DropdownAnalisys>
        </div>
      </div>
    </div>
    <Button
      class="analysis-prep__body__right"
      @click="$router.push('/promotions')"
    >
      <Card
        :title="card.title"
        :old-price="card.oldPrice"
        :price="card.price"
        :date="card.date"
        :color="card.color"
        :img="card.img"
      />
    </Button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DropdownAnalisys from 'atoms/Accordeon/AccordeonAnalisys/index.vue'
import Card from 'molecules/Cards/ServiceCard/CurrentCard/index.vue'

/**
 * 'PAGES/AnalysisPrepTemplateMain'
 * @displayName AnalysisPrepTemplateMain
 */
export default Vue.extend({
  name: 'AnalysisPrepTemplateMain',
  components: {
    DropdownAnalisys,
    Card,
  },
  data() {
    return {
      dropdown: [
        {
          id: 1,
          isEffects: false,
          title: 'Мочевая кислота',
          subtitle: [
            {
              text: 'Потенциальный франчайзи выбирает помещение, расположенное не менее одного километра от другого процедурного кабинета под брендом КДЛ ОЛИМП. Расстояние замеряется по прямой линии. Помещение должно соответствовать санитарным нормам и нормам КДЛ ОЛИМП. Стандарты помещений доступны по ссылке.',
            },
          ],
        },
        {
          id: 2,
          isEffects: true,
          title: 'Железо',
          subtitle: [
            {
              text: 'ФСГ, ЛГ, эстрадиол, пролактин, тестостерон — анализы сдаются на 3-7 день менструального цикла;',
              list: true,
            },
            {
              list: true,
              text: 'Прогестерон – на 21 день менструального цикла, если иное не указано лечащим врачом;',
            },
            {
              list: true,
              text: 'На антимюллеровый гормон можно сдавать в любой фазе менструального цикла;',
            },
          ],
        },
        {
          id: 3,
          isEffects: true,
          title: 'Магний',
          subtitle: [
            {
              text: 'ФСГ, ЛГ, эстрадиол, пролактин, тестостерон — анализы сдаются на 3-7 день менструального цикла;',
              list: true,
            },
            {
              list: true,
              text: 'Прогестерон – на 21 день менструального цикла, если иное не указано лечащим врачом;',
            },
            {
              list: true,
              text: 'На антимюллеровый гормон можно сдавать в любой фазе менструального цикла;',
            },
          ],
        },
        {
          id: 4,
          isEffects: true,
          title: 'Фосфор',
          subtitle: [
            {
              text: 'ФСГ, ЛГ, эстрадиол, пролактин, тестостерон — анализы сдаются на 3-7 день менструального цикла;',
              list: true,
            },
            {
              list: true,
              text: 'Прогестерон – на 21 день менструального цикла, если иное не указано лечащим врачом;',
            },
            {
              list: true,
              text: 'На антимюллеровый гормон можно сдавать в любой фазе менструального цикла;',
            },
          ],
        },
        {
          id: 5,
          isEffects: true,
          title: 'Пренатальный скрининг',
          subtitle: [
            {
              text: 'ФСГ, ЛГ, эстрадиол, пролактин, тестостерон — анализы сдаются на 3-7 день менструального цикла;',
              list: true,
            },
            {
              list: true,
              text: 'Прогестерон – на 21 день менструального цикла, если иное не указано лечащим врачом;',
            },
            {
              list: true,
              text: 'На антимюллеровый гормон можно сдавать в любой фазе менструального цикла;',
            },
          ],
        },
        {
          id: 6,
          isEffects: true,
          title: 'Половые гормоны у женщин',
          underTitle:
            'ФСГ, ЛГ, эстрадиол, пролактин, тестостерон, прогестерон, антимюллеровый гормон',
          subtitle: [
            {
              text: 'ФСГ, ЛГ, эстрадиол, пролактин, тестостерон — анализы сдаются на 3-7 день менструального цикла;',
              list: true,
            },
            {
              list: true,
              text: 'Прогестерон – на 21 день менструального цикла, если иное не указано лечащим врачом;',
            },
            {
              list: true,
              text: 'На антимюллеровый гормон можно сдавать в любой фазе менструального цикла;',
            },
          ],
        },
        {
          id: 7,
          isEffects: true,
          title: 'Гормоны щитовидной железы',
          underTitle: 'ТГ, ТТГ, Т3, Т4',
          subtitle: [
            {
              text: 'ФСГ, ЛГ, эстрадиол, пролактин, тестостерон — анализы сдаются на 3-7 день менструального цикла;',
              list: true,
            },
            {
              list: true,
              text: 'Прогестерон – на 21 день менструального цикла, если иное не указано лечащим врачом;',
            },
            {
              list: true,
              text: 'На антимюллеровый гормон можно сдавать в любой фазе менструального цикла;',
            },
          ],
        },
        {
          id: 8,
          isEffects: true,
          title: 'Коагулограмма',
          underTitle: 'ПВ, ТВ, АЧТВ, МНО, фибриноген',
          subtitle: [
            {
              text: 'ФСГ, ЛГ, эстрадиол, пролактин, тестостерон — анализы сдаются на 3-7 день менструального цикла;',
              list: true,
            },
            {
              list: true,
              text: 'Прогестерон – на 21 день менструального цикла, если иное не указано лечащим врачом;',
            },
            {
              list: true,
              text: 'На антимюллеровый гормон можно сдавать в любой фазе менструального цикла;',
            },
          ],
        },
        {
          id: 9,
          isEffects: true,
          title: 'Глюкоза',
          subtitle: [
            {
              text: 'ФСГ, ЛГ, эстрадиол, пролактин, тестостерон — анализы сдаются на 3-7 день менструального цикла;',
              list: true,
            },
            {
              list: true,
              text: 'Прогестерон – на 21 день менструального цикла, если иное не указано лечащим врачом;',
            },
            {
              list: true,
              text: 'На антимюллеровый гормон можно сдавать в любой фазе менструального цикла;',
            },
          ],
        },
        {
          id: 10,
          isEffects: true,
          title: 'Глюкозотолерантный тест',
          subtitle: [
            {
              text: 'ФСГ, ЛГ, эстрадиол, пролактин, тестостерон — анализы сдаются на 3-7 день менструального цикла;',
              list: true,
            },
            {
              list: true,
              text: 'Прогестерон – на 21 день менструального цикла, если иное не указано лечащим врачом;',
            },
            {
              list: true,
              text: 'На антимюллеровый гормон можно сдавать в любой фазе менструального цикла;',
            },
          ],
        },
        {
          id: 11,
          isEffects: true,
          title:
            'ПСА (общий и свободный), индекс свободного ПСА, индекс здоровья простаты',
          subtitle: [
            {
              text: 'ФСГ, ЛГ, эстрадиол, пролактин, тестостерон — анализы сдаются на 3-7 день менструального цикла;',
              list: true,
            },
            {
              list: true,
              text: 'Прогестерон – на 21 день менструального цикла, если иное не указано лечащим врачом;',
            },
            {
              list: true,
              text: 'На антимюллеровый гормон можно сдавать в любой фазе менструального цикла;',
            },
          ],
        },
        {
          id: 12,
          isEffects: true,
          title: 'Метанефрин и норметанефрин',
          subtitle: [
            {
              text: 'ФСГ, ЛГ, эстрадиол, пролактин, тестостерон — анализы сдаются на 3-7 день менструального цикла;',
              list: true,
            },
            {
              list: true,
              text: 'Прогестерон – на 21 день менструального цикла, если иное не указано лечащим врачом;',
            },
            {
              list: true,
              text: 'На антимюллеровый гормон можно сдавать в любой фазе менструального цикла;',
            },
          ],
        },
        {
          id: 13,
          isEffects: true,
          title: 'Ренин',
          subtitle: [
            {
              text: 'ФСГ, ЛГ, эстрадиол, пролактин, тестостерон — анализы сдаются на 3-7 день менструального цикла;',
              list: true,
            },
            {
              list: true,
              text: 'Прогестерон – на 21 день менструального цикла, если иное не указано лечащим врачом;',
            },
            {
              list: true,
              text: 'На антимюллеровый гормон можно сдавать в любой фазе менструального цикла;',
            },
          ],
        },
        {
          id: 14,
          isEffects: true,
          title: 'Лекарственный мониторинг',
          subtitle: [
            {
              text: 'ФСГ, ЛГ, эстрадиол, пролактин, тестостерон — анализы сдаются на 3-7 день менструального цикла;',
              list: true,
            },
            {
              list: true,
              text: 'Прогестерон – на 21 день менструального цикла, если иное не указано лечащим врачом;',
            },
            {
              list: true,
              text: 'На антимюллеровый гормон можно сдавать в любой фазе менструального цикла;',
            },
          ],
        },
      ],
      card: {
        id: 1,
        title: 'Хеликобактер пилори. 14С-уреазный дыхательный тест',
        oldPrice: 8000,
        price: 5600,
        date: '1 мая - 31 мая',
        img: 'helicobacter.png',
      },
    }
  },
  computed: {
    analysisInfo() {
      return this.$store.getters['AnalysisPrepInfo/getAnalysisPrepInfo']
    },
    analysisPrepare() {
      return this.$store.getters['prepare/getAnalysisPrepare']
    },
  },
})
</script>

<style lang="scss" scoped>
.analysis-prep {
  &__body {
    margin: 0 auto;
    max-width: 1440px;
    padding: 50px 50px 100px;
    justify-content: space-between;
    gap: 40px;
    @include flex-row();
    @include small-laptop {
      padding: 30px 30px 80px;
    }
    @include phone {
      padding: 20px 16px 60px;
    }
    &__left {
      max-width: 55rem;
      > div {
        @include tablet {
          margin-bottom: 28px;
        }
      }
      &__generalInfo {
        ::v-deep p {
          margin-bottom: 10px;
          @include font-size(20px, 28px);
          @include medium-tablet {
            @include font-size(18px, 26px);
          }
          @include tablet {
            @include font-size(16px, 22px);
          }
        }
      }
      &__text {
        margin-top: 30px;
        @include phone {
          margin-top: 0;
        }
        ::v-deep {
          h4 {
            margin: 0 0 20px;
            @include font-size(24px, 32px);
            @include phone {
              margin: 28px 0 18px;
              @include font-size(22px, 27px);
            }
          }
          p {
            margin-bottom: 20px;
            @include phone {
              margin-bottom: 18px;
            }
          }
          ul li {
            margin-bottom: 20px;
          }
        }
      }
      &__rules {
        &__title {
          padding: 40px 0;
          @include font-size(28px, 34px);
          @include tablet {
            padding: 0 0 28px 0;
            @include font-size(22px, 27px);
          }
        }
      }
    }
    &__right {
      background: none;
      border: none;
      min-width: 18rem;
      cursor: pointer;
      height: fit-content;
      text-align: left;
      @include tablet {
        display: none;
      }
    }
  }
}
</style>
