<template>
  <div class="main__about-us">
    <div class="main__about-us__info">
      <div>
        <RFHeading tag="h4">О компании</RFHeading>
        <p
          v-for="item in infoText"
          :key="item.id"
          class="main__about-us__info__text"
        >
          {{ item.text }}
        </p>
        <button class="main__about-us__btn" @click="openCompany">
          Подробнее
        </button>
      </div>
      <div>
        <RFHeading tag="h4">Новости компании</RFHeading>
        <RFButton
          v-for="item in infoLinks"
          :key="item.id"
          variant="link"
          size="small"
          class="main__about-us__info__links"
          @click.native="openNews(item)"
        >
          {{ item.attributes.title }}
        </RFButton>
        <button class="main__about-us__btn" @click="$router.push('/news')">
          Все новости
        </button>
      </div>
    </div>
    <div class="main__about-us__press">
      <RFHeading tag="h4">Пресса о нас</RFHeading>
      <Slider
        :items="cards"
        :variant="'press'"
        :breakpoints="breakpointsCards"
      />
      <button class="main__about-us__btn" @click="$router.push('/about/press')">
        Все новости
      </button>
    </div>
    <div class="main__about-us__partners">
      <RFHeading tag="h4">Наши партнеры</RFHeading>
      <Slider
        :items="partners"
        :variant="'partners'"
        :breakpoints="breakpointsPartners"
      />
    </div>
    <div class="main__about-us__articles">
      <Articals :articals="articles" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import RFButton from 'atoms/RFButton/index.vue'
import Articals from 'organisms/Articals/index.vue'
import Slider from 'molecules/Slider/index.vue'

export default Vue.extend({
  name: 'AboutMainTemplate',
  components: {
    RFHeading,
    RFButton,
    Articals,
    Slider,
  },
  data() {
    return {
      infoText: [
        {
          id: 1,
          text: 'Независимая сеть клинико-диагностических лабораторий «ОЛИМП» работает на рынке услуг в области лабораторной диагностики с января 2007 года.',
        },
        {
          id: 2,
          text: '"КДЛ ОЛИМП" на сегодняшний день является крупнейшей сетью частных лабораторий на территории Казахстана - более 370 процедурных кабинетов и 18 лабораторий.',
        },
      ],
      cards: [
        {
          id: 0,
          title: 'Новые технологии в пренатальной диагностике',
          description:
            'Известно ли Вам, что 21 марта это Международный день человека с синдромом Дауна? День выбран не случайно, ведь...',
          text: [
            'Мы продлеваем акцию на ПЦР анализ COVID-19 для детей c 50% скидкой! Акция продлится до 30 сентября 2021 г.',
            'Напомним, что сдача ПЦР-теста на коронавирус проводится по предварительной записи на сайте covid.kdlolymp.kz',
            'ПЦР-анализ на COVID-19 для детей (от 0 до 18 лет) по акции - 3250 тенге, вместо 6500 тенге.',
            'Стоимость забора биоматериала 700 тенге.',
          ],
          img: 'Forbes.png',
          date: '23 ноября',
        },
        {
          id: 1,
          title: 'Выбрана лучшая казахстанская франшиза - КДЛ ОЛИМП',
          description:
            '4-6 мая 2019 года в Нур-Султане во Дворце Независимости состоялся VII Национальный форум-выставка по франчайзингу КAZFRANCH. Организаторами...',
          text: [
            'Мы продлеваем акцию на ПЦР анализ COVID-19 для детей c 50% скидкой! Акция продлится до 30 сентября 2021 г.',
            'Напомним, что сдача ПЦР-теста на коронавирус проводится по предварительной записи на сайте covid.kdlolymp.kz',
            'ПЦР-анализ на COVID-19 для детей (от 0 до 18 лет) по акции - 3250 тенге, вместо 6500 тенге.',
            'Стоимость забора биоматериала 700 тенге.',
          ],
          img: 'Tengrinews.png',
          date: '14 мая',
        },
        {
          id: 2,
          title:
            'У 62% сдавших анализы казахстанцев есть антитела к коронавирусу',
          text: [
            'Мы продлеваем акцию на ПЦР анализ COVID-19 для детей c 50% скидкой! Акция продлится до 30 сентября 2021 г.',
            'Напомним, что сдача ПЦР-теста на коронавирус проводится по предварительной записи на сайте covid.kdlolymp.kz',
            'ПЦР-анализ на COVID-19 для детей (от 0 до 18 лет) по акции - 3250 тенге, вместо 6500 тенге.',
            'Стоимость забора биоматериала 700 тенге.',
          ],
          description:
            'Речь идет об анализах методом ЭХЛ, которые сотрудники КДЛ "Олимп" взяли у казахстанцев в течение недели',
          img: 'Sputnik.png',
          date: '18 августа',
        },
        {
          id: 3,
          title: 'Выбрана лучшая казахстанская франшиза - КДЛ ОЛИМП',
          text: [
            'Мы продлеваем акцию на ПЦР анализ COVID-19 для детей c 50% скидкой! Акция продлится до 30 сентября 2021 г.',
            'Напомним, что сдача ПЦР-теста на коронавирус проводится по предварительной записи на сайте covid.kdlolymp.kz',
            'ПЦР-анализ на COVID-19 для детей (от 0 до 18 лет) по акции - 3250 тенге, вместо 6500 тенге.',
            'Стоимость забора биоматериала 700 тенге.',
          ],
          description:
            '4-6 мая 2019 года в Нур-Султане во Дворце Независимости состоялся VII Национальный форум-выставка по франчайзингу КAZFRANCH. Организаторами...',
          img: 'Tengrinews.png',
          date: '14 мая',
        },
      ],
      breakpointsCards: {
        780: { visibleSlides: 2, slideMultiple: 1 },
        560: { visibleSlides: 1, slideMultiple: 1 },
      },
      partners: [],
      breakpointsPartners: {
        1000: { visibleSlides: 3, slideMultiple: 1 },
        780: { visibleSlides: 2, slideMultiple: 1 },
      },
    }
  },
  computed: {
    infoLinks() {
      return this.$store.getters['news/getAllNews'].slice(0, 5)
    },
    articles() {
      return this.$store.getters['pages/getAllPages'].slice(0, 5)
    },
  },
  mounted() {
    this.$store.commit('pressNews/changePressNews', this.cards)

    //  getting the partners data from the API
    const partnersData = this.$store.getters['partners/getPartners']
    for (let i = 0; i < partnersData.length; i++) {
      const obj = { id: '', partner: '' }
      obj.id = partnersData[i].id
      obj.partner = partnersData[i].attributes.image_path
      this.partners.push(obj)
    }
  },
  methods: {
    openNews(item) {
      this.$router.push(`/news/${item.attributes.slug}`)
    },
    openCompany() {
      this.$router.push('/about/company')
      this.$store.commit('tabs/changeTabsActive', 'company')
    },
  },
})
</script>

<style lang="scss" scoped>
.main {
  h4.rf-heading {
    margin: 0 0 40px 0;
    font-weight: 400;
    @include phone {
      margin-bottom: 18px;
    }
  }
  &__about-us {
    padding: 60px 50px 100px;
    margin: 0 auto;
    max-width: 1440px;
    @include tablet {
      padding: 40px 20px 60px;
    }
    @include small-phone {
      padding: 20px 15px 60px;
    }
    > div:not(:last-child) {
      margin-bottom: 66px;
      @include phone {
        margin-bottom: 28px;
      }
    }
    &__btn {
      color: $c-primary;
      padding: 6.5px 12px 7.5px 12px;
      border: 1px solid $c-primary;
      box-sizing: border-box;
      border-radius: 4px;
      margin-top: 10px;
      cursor: pointer;
      background: $c-white;
      @include font-size(16px, 24px);
      @include phone {
        margin-top: 18px;
        @include font-size(14px, 20px);
      }
    }
    &__info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 40px;
      @include tablet {
        grid-template-columns: 1fr;
      }
      @include phone {
        grid-gap: 24px;
      }
      h4.rf-heading {
        margin: 0 0 20px 0;
        @include phone {
          margin-bottom: 12px;
        }
      }
      &__links {
        display: block;
        color: $c-primary;
        margin-bottom: 20px;
        @include font-size(16px, 24px);
        @include phone {
          margin-bottom: 18px;
          @include font-size(14px, 20px);
        }
      }
      &__links:nth-child(6) {
        @include phone {
          margin-bottom: 0;
        }
      }
      &__text {
        margin-bottom: 10px;
        @include font-size(20px, 28px);
        @include medium-tablet {
          @include font-size(16px, 24px);
        }
        @include phone {
          @include font-size(14px, 20px);
        }
      }
      &__text:nth-child(3) {
        @include phone {
          margin-bottom: 0;
        }
      }
    }
    &__press,
    &__partners {
      position: relative;
      &__arrows {
        display: flex;
        justify-content: center;
        align-items: center;
        > svg {
          width: 15px;
          height: 30px;
          cursor: pointer;
        }
        svg + svg {
          margin-left: 50px;
        }
      }
      &__wrap {
        display: flex;
        gap: 20px;
        flex-wrap: nowrap;
        flex-direction: column;
        &__card {
          margin-right: 20px;
          @include small-phone {
            margin-right: 5px;
            margin-left: 5px;
          }
        }
        img {
          max-width: 200px;
        }
      }
    }
    &__partners {
      @include phone {
        margin-bottom: 64px !important;
      }
      &__wrap {
        margin-top: 1rem;
        margin-right: 3rem;
        @include small-phone {
          width: 29rem;
          display: flex;
          margin-right: 0;
          justify-content: center;
          align-items: center;
        }
        @include smallest-phone {
          width: 21rem;
        }
      }
    }
  }
}

::v-deep .wrapper span {
  padding: 15px;
  @include small-phone {
    padding: 15px 2px 0 2px;
  }
}

::v-deep {
  .popular-top {
    display: none !important;
  }
  .articals-top {
    @include medium-tablet {
      padding-bottom: 0;
    }
    @include phone {
      padding-bottom: 17px;
    }
  }
  h2.rf-heading {
    @include font-size(28px, 34px);
    @include small-laptop {
      font-size: 1.4rem;
    }
    @include medium-tablet {
      font-size: 1.2rem;
    }
    @include tablet {
      font-size: 1.4rem;
    }
    @include phone {
      @include font-size(22px, 27px);
    }
  }
  .cards {
    @include phone {
      background: $c-white;
      border: 1px solid $c-basic-blue;
      border-radius: 5px;
      width: 224px;
      height: 247px;
      padding: 14px 10px;
    }
  }
  .cards__text {
    @include phone {
      @include font-size(14px, 20px);
    }
  }
  .articals__slider .vueperslides__arrows {
    top: -48px;
    right: 14px;
    @include phone {
      top: -43px;
      display: block;
    }
    svg {
      @include small-laptop {
        width: 13px;
        height: fit-content;
      }
      @include phone {
        width: 11px;
      }
    }
  }
  .articals-top__link {
    @include phone {
      display: none;
    }
  }
}
</style>
