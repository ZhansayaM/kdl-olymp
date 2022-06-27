<template>
  <div class="promotions">
    <Banner
      :title="banner.title"
      :background="banner.src"
      :background-color="banner.background"
    >
      <template slot="content">
        <Tabs
          v-model="tab"
          :tabs="tabs"
          type="wrap"
          type-tab="outline-primary"
        />
      </template>
    </Banner>
    <div class="promotions__inner">
      <Slider :items="slides" :title="title" class="slider" />
      <section class="cards-wrapper">
        <div v-for="item in cards" :key="item.id">
          <RFHeading tag="h4"> {{ item.title }} </RFHeading>
          <Promocode
            :description="item.content"
            :btn="item.button"
            :img="item.img"
            :link="item.link"
            class="cards-wrapper__card"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Slider from 'organisms/Slider/ActualSlider/index.vue'
import Banner from 'molecules/Banner/index.vue'
import Tabs from 'molecules/Tabs/index.vue'
import Promocode from 'molecules/Cards/Promocode/index.vue'
import RFHeading from 'atoms/RFHeading/index.vue'

/**
 * 'TEMPLATES/PromotionsTemplate'
 * @displayName PromotionsTemplate
 */
export default Vue.extend({
  name: 'PromotionsTemplate',
  components: {
    Slider,
    Promocode,
    Banner,
    Tabs,
    RFHeading,
  },
  data() {
    return {
      title: 'Актуальные предложения',
      banner: {
        title: 'Акции',
        src: require('@/assets/images/promotions.png'),
        background: 'dark',
      },
      tab: undefined,
      tabs: [
        {
          id: 'sales',
          title: 'Акции',
        },
        {
          id: 'promocodes',
          title: 'Промо-коды',
        },
        {
          id: 'certificates',
          title: 'Сертификаты',
        },
      ],
      slideCards: [
        {
          id: 1,
          title: 'Хеликобактер пилори. 14С-уреазный дыхательный тест',
          oldPrice: '8000',
          price: '5600',
          date: '1.07 - 31.07',
          img: 'helicobacter.png',
        },
        {
          id: 2,
          title: 'Квантифероновый тест',
          oldPrice: '19800',
          price: '14000',
          date: '1.07 - 31.07',
          img: 'helicobacter-4.png',
          color:
            'radial-gradient(125.12% 191.76% at 91.55% 116.59%, #92CA5B 0%, #C9FD96 33.65%, #92CA5B 100%)',
        },
        {
          id: 3,
          title: 'ПЦР тест на COVID-19 для детей',
          oldPrice: '19800',
          price: '14000',
          date: '1.07 - 31.07',
          img: 'helicobacter-3.png',
          color: 'linear-gradient(99.71deg, #FD9DA0 7.68%, #FEAFA1 57.06%)',
        },
        {
          id: 4,
          title: 'ПЦР тест на COVID 19',
          oldPrice: '19800',
          price: '14000',
          date: '1.07 - 31.07',
          img: 'helicobacter-2.png',
          color: 'linear-gradient(99.71deg, #C93CA2 7.68%, #FF8686 57.06%)',
        },
      ],
      cards: [
        {
          title: 'Промо-код',
          img: 'promocode.png',
          content: '',
          button: 'Как получить промо-код',
          link: '/promotions/promocodes',
        },
        {
          title: 'Сертификаты',
          img: 'certificate.png',
          content:
            'Вы можете приобрести сертификаты на любую сумму для подарка близким.',
          button: 'Преобрести сертификат',
          link: '/promotions/certificates',
        },
      ],
    }
  },
  head: {
    title: 'Акции',
  },
  computed: {
    slides() {
      return this.$store.state.sales.salesInfo
    },
  },
  watch: {
    tab(val) {
      if (val) {
        this.$router.push(`/promotions/${val}`)
      }
    },
  },
  mounted() {
    this.cards[0].content = this.$store.getters[
      'promocode/getPromocode'
    ][0].attributes.description.slice(3, -6)
  },
})
</script>

<style lang="scss" scoped>
.promotions {
  padding: 0;
  &__inner {
    margin: 0 auto;
    max-width: 1440px;
    padding: 100px 50px;
    @include small-laptop {
      padding: 100px 30px 80px;
    }
    @include phone {
      padding: 100px 16px 60px;
    }
  }
  ::v-deep .banner-wrapper {
    background-color: radial-gradient(
      65.99% 154.98% at 97.54% -14.14%,
      #31b0ed 0%,
      #0087cb 100%
    );
  }
  ::v-deep .outline-primary {
    background: transparent;
    border-color: $c-white;
    color: $c-white;
  }
  ::v-deep .slider {
    margin-top: 0;
    &-top {
      display: none;
    }
  }
  .cards-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    margin-top: 40px;
    @include tablet {
      grid-template-columns: 1fr;
    }
    &__card {
      width: 100%;
    }
    h4.rf-heading {
      margin: 0 0 24px;
      @include font-size(28px, 34px);
    }
  }
}
::v-deep .banner.dark {
  background: radial-gradient(
    65.99% 154.98% at 97.54% -14.14%,
    #31b0ed 0%,
    #0087cb 100%
  );
}
</style>
