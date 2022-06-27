<template>
  <div class="main">
    <section class="main-wrapper">
      <main class="main-content-wrap">
        <section class="main-top">
          <div class="main-top_top">
            <SelectCity class="main-top__city" />
            <svg-icon name="ISO" class="main-top__svg"></svg-icon>
          </div>
          <Search
            :placeholder="searchData.placeholder"
            :title="searchData.title"
            :btn-name="searchData.btnName"
            :example="searchData.example"
            :text="searchData.text"
            class="main__search"
            @search="search"
          />
        </section>

        <template v-if="$route.query.search">
          <AnalyzesCard
            v-for="item in analyzesData"
            :key="item.id"
            :service="item"
            class="search_result-card"
          />
        </template>

        <template v-else>
          <Slider :items="slideCards" :title="title" class="main__slider" />
          <Banners :banners="banners" class="main__banners" />
          <section class="main__popular">
            <Popular :items="popularData" />
          </section>
          <section class="main__news">
            <News :news="newsData.slice(0, 4)" />
            <HelpInfo :items="helpData" />
          </section>
          <section class="main__articles">
            <Articals :articals="articles" />
          </section>
        </template>
      </main>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import Search from 'molecules/Search/index.vue'
import Slider from 'organisms/Slider/ActualSlider/index.vue'
import Banners from 'organisms/Banners/index.vue'
import Popular from 'organisms/Popular/index.vue'
import News from 'organisms/News/index.vue'
import HelpInfo from 'molecules/HelpInfo/index.vue'
import Articals from 'organisms/Articals/index.vue'
import AnalyzesCard from 'molecules/Cards/AnalyzesCard/index.vue'
import SelectCity from 'molecules/SelectCity/index.vue'

/**
 * 'Templates/Main'
 * @displayName Main
 */
export default Vue.extend({
  name: 'MainTemplate',
  components: {
    Search,
    Slider,
    Banners,
    Popular,
    News,
    HelpInfo,
    Articals,
    AnalyzesCard,
    SelectCity,
  },
  data() {
    return {
      title: 'Актуальные предложения',
      searchData: {
        title: 'Клинико-диагностические лаборатории ОЛИМП',
        btnName: 'Найти',
        example: 'Например,',
        text: { text: 'тест на COVID', link: '/covid-19' },
        placeholder: 'Поиск услуг и анализов',
      },
      banners: [
        {
          id: 1,
          img: 'banner-card-big.png',
          title: 'Услуга "Выезд на дом"',
          subtitle: 'Сдавайте анализы где вам удобно',
          link: '/house-call',
        },
        {
          id: 2,
          img: 'banner-card.png',
          title: 'Анализы и цены',
          link: '/analyzes',
        },
        {
          id: 3,
          img: 'banner-card2.png',
          title: 'Профили',
          link: '/analyzes',
        },
        {
          id: 4,
          img: 'banner-card3.png',
          title: 'Медицинские услуги',
          link: '/',
        },
        {
          id: 5,
          img: 'banner-card4.png',
          title: 'Выбираю сам',
          link: '/choose-myself',
        },
      ],
      popularData: [
        {
          id: 1,
          title: 'Анализы',
          data: [
            {
              id: 1,
              title: 'Витаминые микроэлементы',
              tags: [
                { id: 1, name: '1 день' },
                { id: 2, name: 'Доступно с выездом на дом' },
              ],
              price: '5600',
              added: false,
            },
            {
              id: 2,
              title: 'Витаминые микроэлементы',
              tags: [
                { id: 1, name: '1 день' },
                { id: 2, name: 'Доступно с выездом на дом' },
              ],
              price: '7200',
              added: false,
            },
            {
              id: 3,
              title: 'Витаминые микроэлементы',
              tags: [
                { id: 1, name: '1 день' },
                { id: 2, name: 'Доступно с выездом на дом' },
              ],
              price: '12600',
              added: false,
            },
            {
              id: 4,
              title: 'Витаминые микроэлементы',
              tags: [
                { id: 1, name: '1 день' },
                { id: 2, name: 'Доступно с выездом на дом' },
              ],
              price: '15600',
              added: false,
            },
          ],
        },
        {
          id: 2,
          title: 'Профили',
          data: [
            {
              id: 5,
              title: 'Профиль 1',
              tags: [{ id: 3, name: '1 день' }],
              price: '5600',
              added: false,
            },
            {
              id: 6,
              title: 'Профиль 2',
              tags: [
                { id: 1, name: '1 день' },
                { id: 2, name: 'Доступно с выездом на дом' },
              ],
              price: '15600',
              added: false,
            },
            {
              id: 7,
              title: 'Профиль 3',
              tags: [
                { id: 2, name: 'Доступно с выездом на дом' },
                { id: 3, name: '1 день' },
              ],
              price: '25600',
              added: false,
            },
            {
              id: 8,
              title: 'Профиль 4',
              tags: [
                { id: 1, name: '1 день' },
                { id: 3, name: 'Доступно с выездом на дом' },
              ],
              price: '35600',
              added: false,
            },
          ],
        },
      ],
      helpData: [
        {
          id: 1,
          title: 'Подготовка к анализам',
          icon: 'rectangle-blue',
          link: '/preparation',
          isOutsideLink: false,
        },
        {
          id: 2,
          title: 'Дисконтная система',
          icon: 'discount-blue',
          link: '/discount-system',
          isOutsideLink: false,
        },
        {
          id: 3,
          title: '',
          icon: 'check-blue',
          link: '',
          isOutsideLink: true,
        },
        {
          id: 4,
          title: '',
          icon: 'document-blue',
          link: '',
          isOutsideLink: true,
        },
      ],
      analyzesData: [
        {
          id: 1,
          title:
            'Антитела к бокаловидным клеткам кишечника и антитела к экзокринным клеткам поджелудочной железы',
          price: 6800,
          tags: [
            {
              id: 1,
              title: 'Доступно с выездом на дом',
            },
            {
              id: 2,
              title: '1-5 дней',
            },
          ],
        },
        {
          id: 2,
          title: 'Анти-ТГ (антитела к тиреоглобулину)',
          old_price: 5800,
          price: 4800,
          tags: [
            {
              id: 2,
              title: '1-5 дней',
            },
          ],
        },
        {
          id: 3,
          title: 'Анти-ТГ (антитела к тиреоглобулину)',
          old_price: 7800,
          price: 3800,
          tags: [
            {
              id: 1,
              title: 'Доступно с выездом на дом',
            },
            {
              id: 2,
              title: '1-5 дней',
            },
          ],
        },
        {
          id: 4,
          title: 'ANA Screen (антиядерные антитела скрининг)',
          price: 12800,
          tags: [
            {
              id: 1,
              title: 'Доступно с выездом на дом',
            },
            {
              id: 2,
              title: '1-5 дней',
            },
            {
              id: 3,
              title: 'tag 3',
            },
          ],
        },
      ],
    }
  },
  head() {
    return {
      title: 'Olymp',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Olymp',
        },
      ],
    }
  },
  computed: {
    slideCards() {
      return this.$store.state.sales.salesInfo
    },
    documents() {
      return this.$store.getters['document/getDocument']
    },
    articles() {
      return this.$store.getters['pages/getAllPages'].slice(0, 5)
    },
    newsData() {
      return this.$store.getters['news/getAllNews']
    },
  },
  mounted() {
    this.helpData[2].title = this.documents[1].attributes.title
    this.helpData[2].link = this.documents[1].attributes.file_path
    this.helpData[3].title = this.documents[0].attributes.title
    this.helpData[3].link = this.documents[0].attributes.file_path
  },
  methods: {
    search(text) {
      this.$router.push({
        name: 'index',
        query: {
          search: text,
        },
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  &-wrapper {
    max-width: 1440px;
    margin: 0 auto;
  }
  &-content-wrap {
    padding: 50px 50px 60px;
    @include medium-tablet {
      padding: 30px 20px 60px;
    }
    @include phone {
      padding: 21px 16px 60px;
    }
    @include small-phone {
      padding: 12px 10px 56px;
    }
  }

  &-top {
    justify-content: space-between;
    gap: 20px;
    @include flex-row-reverse();
    @include tablet {
      display: block;
    }
    &__svg {
      @include tablet {
        width: 100px;
        height: 40px;
        float: right;
      }
      @include phone {
        width: 87px;
        height: 31px;
      }
    }
    &__city {
      display: none;
      border: 1px solid $c-primary;
      background: transparent;
      border-radius: 5px;
      @include tablet {
        display: block;
        padding: 4px 0;
        height: 27px;
      }
    }
    &_top {
      justify-content: space-between;
      margin-bottom: 22px;
      @include flex-row();
    }
  }

  &__search {
    max-width: 800px;
    @include tablet {
      clear: right;
    }
  }

  &__slider {
    margin-top: 36px;
    @include tablet {
      margin-top: 10px;
    }
    @include small-phone {
      margin-top: 50px;
    }
  }

  &__banners {
    padding-top: 42px;
    @include tablet {
      padding-top: 30px;
    }
    @include small-phone {
      padding-top: 40px;
    }
  }
  &__popular {
    padding-top: 92px;
    @include tablet {
      padding-top: 0;
      margin-top: 50px;
    }
  }
  &__news {
    padding-top: 59px;
    justify-content: space-between;
    @include flex-row();
    @include small-laptop {
      flex-direction: column-reverse;
    }
    @include tablet {
      padding-top: 0;
      margin-top: 50px;
    }
  }
  &__articles {
    padding-top: 76px;
    @include tablet {
      padding: 0;
      margin-top: 30px;
    }
  }
  .search_result-card {
    margin-bottom: 10px;

    &:first-of-type {
      margin-top: 34px;
    }
    &:last-of-type {
      margin-bottom: 120px;
    }
  }
}
::v-deep .select-city__btn {
  color: $c-primary;
  background-image: url('assets/icons/arrowDown_blue.svg');
  background-position: 94% 50%;
  padding: 0 20px 0 10px;
}
::v-deep .select-city__list {
  width: 176px;
  top: 2.6rem;
  left: 0;
  padding: 10px;
  @include phone {
    width: 155px;
    padding: 5px;
  }
}

::v-deep .select-city .search_city {
  width: 100%;
}
</style>
